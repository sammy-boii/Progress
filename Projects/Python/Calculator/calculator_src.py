from tkinter import *

window = Tk()
window.geometry("400x505")
window.title("Calculator")

eqn = ""
result = 0


def clear():

    global eqn, result
    eqn = '' 
    result = 0 
    label.config(text="")


# just setting text to empty won't be enough because equn and result is already embedded inside label. So overwriting their values to empty does the trick.


def button(value):

    global eqn, result

    try:

        if value != '=':

            eqn += str(value)
            label.config(text=eqn)

        else:

            result = eval(eqn)
            label.config(text=result)
            eqn = str(result) 

    except SyntaxError:
        label.config(text='Syntax Error')

    except ZeroDivisionError:
        label.config(text="Arithmetic Error")



label = Label(window, bg='black', fg='green',  font=('Arial', 16), width=31, height=3)
label.pack(pady = 1)

frame = Frame(window)
frame.pack()


# using normal function immediately invokes the function

# i recommend using a Button class and creating objects outta it cuz i wanna add a feature where the label eqn doesn't exceed the visible label but yea...

button1 = Button(frame, text='1', width=7, fg="green", font=('Arial', 16), bg="black", height=3, command=lambda: button(1))
button1.grid(row=0, column=0)

button2 = Button(frame, text='2', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button(2))
button2.grid(row=0, column=1)

button3 = Button(frame, text='3', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button(3))
button3.grid(row=0, column=2)

button4 = Button(frame, text='4', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button(4))
button4.grid(row=1, column=0)

button5 = Button(frame, text='5', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button(5))
button5.grid(row=1, column=1)

button6 = Button(frame, text='6', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button(6))
button6.grid(row=1, column=2)

button7 = Button(frame, text='7', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button(7))
button7.grid(row=2, column=0)

button8 = Button(frame, text='8', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button(8))
button8.grid(row=2, column=1)

button9 = Button(frame, text='9', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button(9))
button9.grid(row=2, column=2)

button0 = Button(frame, text='0', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button(0))
button0.grid(row=3, column=0)

button_plus = Button(frame, text='+', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button('+'))
button_plus.grid(row=0, column=3)

button_minus = Button(frame, text='-', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button('-'))
button_minus.grid(row=1, column=3)

button_multiply = Button(frame, text='x', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button('*'))
button_multiply.grid(row=2, column=3)

button_equals = Button(frame, text='=', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button('='))
button_equals.grid(row=3, column=3)

button_divide = Button(frame, text='÷', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button('/'))
button_divide.grid(row=3, column=2)

button_decimal = Button(frame, text='.', width=7, fg="green",font=('Arial', 16), bg="black", height=3, command=lambda: button('.'))
button_decimal.grid(row=3, column=1)

clear_button = Button(window, bg='black',font=('Arial', 16), text='Clear', fg='green', width=14, height=2, command=clear)
clear_button.pack(pady = 1)


window.mainloop()
