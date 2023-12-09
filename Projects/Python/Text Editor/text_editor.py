
from tkinter import *
from tkinter import filedialog, colorchooser, font


# File Menu's Cascade


def openFile():

    filePath = filedialog.askopenfilename(title='Choose a File', filetypes=(("Text Files", "*.txt"), ("Python Files", "*.py"), ("HTML Files", "*.html"), ("All Files", "*.*")))


    with open(filePath, 'r') as file:

        content = file.read()
        textarea.delete("1.0", END)  # Clear existing text
        textarea.insert(END, content)



def saveFile():
    filePath = filedialog.asksaveasfilename(title='Save File', defaultextension=".txt", filetypes=(("Text Files", "*.txt"), ("Python Files", "*.py"), ("CSV Files", "*.csv"), ("Images", "*.png"), ("All Files", "*.*")))

    text = textarea.get("1.0", END)
    with open(filePath, 'w') as file:
        file.write(text)



def openNewWindow():
    new_window = Tk()
    new_window.title("New Window")
    new_window.geometry("400x200")
    new_window.mainloop()
    


# Edit Menu's Cascade



def cut():
    textarea.event_generate("<<Cut>>")

def copy():
    textarea.event_generate("<<Copy>>")

def paste():
    textarea.event_generate("<<Paste>>")



# Font Manipulation 



def change_color():

    color = colorchooser.askcolor(title='Pick a Color')
    textarea.config(fg=color[1]) # tuple of color



def update_font_style(*args): 

    style = font_style.get()
    size = font_size.get()
    textarea.config(font=(style, size))


# Option Menu selects a font from *font.families() iterable. The function captures that argument even thought here it is not explicitly used. instead of *args just args works as well.



def update_font_size():

    style = font_style.get()
    size = font_size.get()
    textarea.config(font=(style, size))



window = Tk()
window.title("Text Editor")
window.geometry("500x500")


menubar = Menu(window)
window.config(menu=menubar) # menu is an option like width and height for window


fileMenu = Menu(menubar, tearoff=0)
menubar.add_cascade(label='File', menu=fileMenu) # adding the cascading property onto the 'File' menu


fileMenu.add_command(label='New Window', command=openNewWindow) 
fileMenu.add_separator()
fileMenu.add_command(label='Open', command=openFile)
fileMenu.add_separator()
fileMenu.add_command(label='Save', command=saveFile)
fileMenu.add_separator()
fileMenu.add_command(label='Exit', command=quit) # quit is a thing


editMenu = Menu(menubar, tearoff=0)
menubar.add_cascade(label='Edit', menu=editMenu)


editMenu.add_command(label='Cut', command=cut)
editMenu.add_separator()
editMenu.add_command(label='Copy', command=copy)
editMenu.add_separator()
editMenu.add_command(label='Paste', command=paste)


font_style = StringVar()
font_style.set("Segoe Print") # default value


font_size = IntVar()
font_size.set(12) # default value


font_frame = Frame(window) # keeping in frame cuz easier to manipulate the positions
font_frame.pack(pady=10)


font_label = Label(font_frame, text="Font Style:")
font_label.pack(side=LEFT)


font_box = OptionMenu(font_frame, font_style, *font.families(), command = update_font_style)
font_box.pack(side=LEFT)

# the selected value will be stored in font_style variable. It's a syntax.

color_button = Button(font_frame, text="Pick Color", command=change_color, cursor = 'hand2')
color_button.pack(side=LEFT, padx=10)


size_label = Label(font_frame, text="Font Size:")
size_label.pack(side=LEFT)


size_spinbox = Spinbox(font_frame, from_=1, to=100, textvariable = font_size, command = update_font_size)
size_spinbox.pack(side=LEFT, padx=10)


textarea_frame = Frame(window)
textarea_frame.pack()


textarea = Text(textarea_frame, font = (font_style.get(), font_size.get()), width=70, height=70, padx=10, pady=10)
textarea.pack(side=LEFT) # keeping left cuz right is for scrollbar


scrollbar = Scrollbar(textarea_frame, command=textarea.yview) # makes the scrollbar resposive to user's interaction
scrollbar.pack(side=RIGHT, fill=Y)


textarea.config(yscrollcommand=scrollbar.set) # makes the scrollbar responsive to page's movement


window.mainloop()