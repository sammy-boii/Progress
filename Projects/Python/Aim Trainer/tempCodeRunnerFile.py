
import random
import math
import time
import pygame

pygame.init() # needed for pygame


WIDTH, HEIGHT = 900, 600
BG_COLOR = (0, 25, 40)

window = pygame.display.set_mode((WIDTH, HEIGHT))  # displays window
pygame.display.set_caption("AIM TRAINER")


TARGET_RATE = 500   # milliseconds
TARGET_EVENT = pygame.USEREVENT   # custom event
TARGET_PADDING = 30


FONT = pygame.font.SysFont("Graceful", 30)
LABEL_HEIGHT = 50



class Target:

    MAX_SIZE = 30
    GROWTH_RATE = 0.2
    COLOR_1 = 'red'
    COLOR_2 = 'white'

    def __init__(self, x, y):

        self.x = x 
        self.y = y
        self.size = 0  # starts at 0
        self.grow = True

    def target_update(self):

        if self.size + self.GROWTH_RATE >= self.MAX_SIZE:
            self.grow = False
        
        if self.grow:
            self.size += self.GROWTH_RATE
        else:
            self.size -= self.GROWTH_RATE

    def draw(self, window):
        
        pygame.draw.circle(window, self.COLOR_1, (self.x, self.y), self.size)
        pygame.draw.circle(window, self.COLOR_2, (self.x, self.y), self.size * 0.8)
        pygame.draw.circle(window, self.COLOR_1, (self.x, self.y), self.size * 0.6)
        pygame.draw.circle(window, self.COLOR_2, (self.x, self.y), self.size * 0.4)


# that tuple of x and y is the center. Drawing 4 circles of different sizes to create a target like design. The circles overlap eachother


    def collide(self):

        mouse_pos = pygame.mouse.get_pos()   #  the mouse position will be in a tuple (125, 111)

        D = math.sqrt((mouse_pos[0] - self.x)**2 + (mouse_pos[1] - self.y)**2)  # distance formula

        return D <= self.size  
    
    #  the distance between the cursor and center is calculated and if it exceeds the size then the cursor is definitely outside the cicle





def draw(targets):

    window.fill(BG_COLOR)

    for target in targets:
        target.draw(window)
    


def time_format(secs):

    milli = math.floor(int(secs * 1000 % 1000) / 100)
    seconds = int(round(secs % 60, 1))
    minutes = int(secs // 60)

    return f"{minutes:02d}: {seconds:02d}.{milli}"


def top_bar(elapsed_time, score, lives):

    pygame.draw.rect(window, 'grey', (0,0, WIDTH, LABEL_HEIGHT)) #  first two coords = top left, last two = bottom right

    speed = round(score / elapsed_time, 1)


    time_label = FONT.render(f"Time: {time_format(elapsed_time)}", 1, "black")

    speed_label = FONT.render(f"Speed: {speed} t/s", 1, 'black')

    score_label = FONT.render(f"Score: {score}", 1, "black")

    lives_label = FONT.render(f"Lives: {lives}", 1, "black")

    window.blit(time_label, (55,15))
    window.blit(speed_label, (295,15))
    window.blit(score_label, (550,15))
    window.blit(lives_label, (750,15))


def middle(label):
    return WIDTH / 2 - label.get_width() / 2   # WIDTH / 2 goes to the middle but it will start writing from that position and go right. So basically go to the middle of the screen and subtract the label's width so that even the label's center is in the center.

def end_screen(elapsed_time, score, clicks):

    window.fill(BG_COLOR)


    speed = round(score / elapsed_time, 1)

    try: 
        accuracy = round(score / clicks * 100, 1)  # in case clicks is 0. or just use an if statement
    
    except ZeroDivisionError: 

        accuracy = 0


    speed_label = FONT.render(f"Speed: {speed} t/s", 1, 'white')

    score_label = FONT.render(f"Score: {score}", 1, "white")

    time_label = FONT.render(f"Time: {time_format(elapsed_time)}", 1, "white")

    score_label = FONT.render(f"Score: {score}", 1, "white")

    accuracy_label = FONT.render(f"Accuracy: {accuracy} %", 1, "white")


    window.blit(time_label, (middle(time_label),100))
    window.blit(speed_label, (middle(speed_label),200))
    window.blit(score_label, (middle(score_label),300))
    window.blit(accuracy_label, (middle(accuracy_label),400))

    pygame.display.update()

    run = True
    while run:
        for event in pygame.event.get():
            if event.type == pygame.QUIT or event.type == pygame.KEYDOWN or event.type == pygame.MOUSEBUTTONDOWN:
                quit()



def main():

    run = True
    clock = pygame.time.Clock()


    score = 0
    clicks = 0
    start_time = time.time()
    misses = 0
    lives = 3

    targets = []

    pygame.time.set_timer(TARGET_EVENT, TARGET_RATE) #  triggers the event at the rate of TARGET_RATE 

    while run:

        clock.tick(60) # runs at 60 FPS
        click = False

        for event in pygame.event.get():

            if event.type == pygame.QUIT:
                run = False
                break
        
            if event.type == TARGET_EVENT:
                x = random.randint(TARGET_PADDING, WIDTH - TARGET_PADDING)
                y = random.randint(TARGET_PADDING + LABEL_HEIGHT, HEIGHT - TARGET_PADDING)
                target = Target(x,y) # create a new instance of Target Class
                targets.append(target)

            if event.type == pygame.MOUSEBUTTONDOWN:
                click = True
                clicks += 1


        for target in targets:

            target.target_update()

            if target.size <= 0:
                targets.remove(target)
                misses += 1
                lives -= 1
            
            if click and target.collide():  # if click isn't added then hover counts as well
                targets.remove(target)
                score += 1

        if misses >= lives:
            end_screen(elapsed_time, score, clicks)

        elapsed_time = time.time() - start_time

        draw(targets)

        top_bar(elapsed_time, score, lives)

        pygame.display.update()


 
           
    pygame.quit()



# pressing the exit (X) will be treated as a event in pygame so we loop throught every event happening and if it happens to be a quit we exit the for loop


# when the custom event is triggered a random x and y value will be generated between 30 and 30 less than max width and height. It is because max size of target is 30 so if it's center is (0,0) then it'll occupy 30 px on each axes from the center. 


# then we create a new instance of Target class and pass in the x and y values then add it onto the targets list.


if __name__ == '__main__':
    main()


# executes the main() only if this file is directly run instead of running as a imported file