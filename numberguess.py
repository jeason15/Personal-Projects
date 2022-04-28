########################################################################
# numberguess.py     Joshua Eason        9/19/2018
# This simulator makes the user guess a number and gives feedback on 
#  how close they were to the correct number
########################################################################

import random

def num_guess():
    return random.randint(1,50)
play_again = str("y")

while play_again == str("y"):
    user_guess = int(input("I am thinking of a number from 1 to 50. What do you think it is? "))
    ber_guess = num_guess()
    while user_guess != ber_guess:
        if user_guess > 50:
            print("Please choose a plausible number...")
        elif user_guess < ber_guess:
            print("Too low...")
        else:
            print("Too high...")
        user_guess = int(input("Guess again..."))
        
    print("You got it!")
    play_again = input("Would you like to play again? Enter y or n: ")

print("Thanks for playing!")