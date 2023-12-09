
import random
from tkinter import *


players = ["0", "X"]

p1_color = '#ff3b3b'
p2_color = '#217ded'
draw_color = '#524d4d'

current_player = random.choice(players)  # randomly choosing starting player




def disable_buttons():

    for row in range(3):

        for column in range(3):

            buttons[row][column].config(state=DISABLED)



def new_game():
    global buttons, current_player, players

    for row in range(3):

        for column in range(3):
            
            buttons[row][column]['text'] = ''
            buttons[row][column].config(bg = '#F0F0F0', state=ACTIVE)

    current_player = random.choice(players)
    label.config(text=current_player + "'s turn")




def game_status():

    global buttons

    for row in range(3):

        if buttons[row][0]['text'] == buttons[row][1]['text'] == buttons[row][2]['text'] != "":

            buttons[row][0].config(bg = '#34f026')
            buttons[row][1].config(bg = '#34f026')
            buttons[row][2].config(bg = '#34f026')

            return "Finished"

    for column in range(3):

        if buttons[0][column]['text'] == buttons[1][column]['text'] == buttons[2][column]['text'] != "":

            buttons[0][column].config(bg = '#34f026')
            buttons[1][column].config(bg = '#34f026')
            buttons[2][column].config(bg = '#34f026')

            return "Finished"



    if buttons[0][0]['text'] == buttons[1][1]['text'] == buttons[2][2]['text'] != "":

        buttons[0][0].config(bg = '#34f026')
        buttons[1][1].config(bg = '#34f026')
        buttons[2][2].config(bg = '#34f026')

        return "Finished"


    if buttons[0][2]['text'] == buttons[1][1]['text'] == buttons[2][0]['text'] != "":

        buttons[0][2].config(bg = '#34f026')
        buttons[1][1].config(bg = '#34f026')
        buttons[2][0].config(bg = '#34f026')

        return "Finished"



    available_space = 9

    for row in range(3):

        for column in range(3):

            if buttons[row][column]['text'] != "":
                available_space -= 1

    if available_space == 0:
        return "Tie"
    

def check_winner(row, column):

    global buttons, current_player, players, p1_color, p2_color


    if game_status() != 'Finished':

        buttons[row][column]['text'] = current_player

        if current_player == players[0]:

            buttons[row][column].config(state = DISABLED)
            buttons[row][column].config(disabledforeground=p1_color)
            current_player = players[1]
            label.config(text=current_player + "'s turn")
            

        elif current_player == players[1]:

            buttons[row][column].config(state = DISABLED)
            buttons[row][column].config(disabledforeground=p2_color)
            current_player = players[0]
            label.config(text=current_player + "'s turn")



    if game_status() == 'Finished':

        current_player = players[1] if current_player == players[0] else players[0]
        label.config(text=current_player + " wins!")
        disable_buttons()


    if game_status() == 'Tie':

        label.config(text="It's a Tie")
        disable_buttons()

        for row in range(3):

            for column in range(3):

                buttons[row][column].config(bg = '#000000', fg = 'white')
                

        

    


root = Tk()
root.title("Tic Tac Toe")
label = Label(root, font = ('Garnet', 15), text=current_player + "'s turn")
label.pack(pady = 5)


button = Button(root, font = ('Garnet', 15), text='RESET', bg = '#fa418b', fg = '#c91a23', command=new_game, activebackground='#fa418b', activeforeground='#c91a23')
button.pack(pady = 5)



buttons = [
    [None, None, None],  # [0,0], [0,1], [0,2]
    [None, None, None],  # [1,0], [1,1], [1,2]
    [None, None, None]   # [2,0], [2,1], [2,2]
]



frame = Frame(root)
frame.pack()



for row in range(3):
    for column in range(3):
        buttons[row][column] = Button(frame, width=8, height=3, font = ('Impact', 20), command=lambda row=row, column=column: check_winner(row, column))
        buttons[row][column].grid(row=row, column=column)


root.mainloop()
