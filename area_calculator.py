##################################################
# area_calculator.py   Joshua Eason   9/23/2018
# This module calculates the area of common shapes
# based on user defined lengths
##################################################

import math

def final_units_square():
    units = input("Enter the units of measure (inches, feet, meters, etc.) ")
    return "square" + " " + units

def reg_n_gon():
    num_sides = float(input("How many sides are there? "))
    dimensions_base_1 = float(input("What is the length of the base? "))
    dimensions_height = float(input("What is the height? "))
    return round((dimensions_base_1*dimensions_height*num_sides)/2,2)
def triangle():
    dimensions_base_1 = float(input("What is the length of the base? "))
    dimensions_height = float(input("What is the height? "))
    return round(.5*(dimensions_base_1*dimensions_height),2)
    return dimensions_base_1

def equilateral_triangle():
    dimensions_base_1 = float(input("What is the length of the base? "))
    return round((math.sqrt(3)/4)*(dimensions_base_1**2),2)

def circle():
    radius = float(input("What is the radius? "))
    return round((math.pi*radius)**2,2)

def square():
    dimensions_base_1 = float(input("What is the length of the base? "))
    return round((dimensions_base_1**2),2)

def rectangle_parallelogram():
    dimensions_base_1 = float(input("What is the length of the base? "))
    dimensions_height = float(input("What is the height? "))
    return round(dimensions_base_1*dimensions_height,2)

def trapezoid():
    dimensions_base_1 = float(input("What is the length of the base? "))
    dimensions_base_2 = float(input("What is the length of the secondary base? "))
    dimensions_height = float(input("What is the height? "))
    return round(dimensions_height*((dimensions_base_1 + dimensions_base_2)/2),2) 

cont = "y"
 
while cont == "y":
    
    which_shape = input("What shape would you like to calculate? (Please enter: square, triangle, equilateral triangle, circle, rectangle, parallelogram, regular polygon, or trapezoid) ")    
    
    if which_shape.lower() == "square":
        print("Your area is: " + str(square()) , str(final_units_square()))

    elif which_shape.lower() == "triangle":
        print("Your area is: " + str(triangle()) , str(final_units_square()))

    elif which_shape.lower() == "equilateral triangle":
        print("Your area is: " + str(equilateral_triangle()) , str(final_units_square()))

    elif which_shape.lower() == "circle":
        print("Your area is: " + str(circle()) , str(final_units_square()))
    
    elif which_shape.lower() == "rectangle":
        print("Your area is: " + str(rectangle_parallelogram()) , str(final_units_square()))

    elif which_shape.lower() == "parallelogram":
        print("Your area is: " + str(rectangle_parallelogram()) , str(final_units_square()))
    
    elif which_shape.lower() == "trapezoid":
        print("Your area is: " + str(trapezoid()) , str(final_units_square()))

    elif which_shape.lower() == "regular polygon":
        print("Your area is: " + str(reg_n_gon()) , str(final_units_square()))

    else:
        print("You have not entered a valid shape.")

    cont = input("Would you like to continue? (y or n) ")

print("Thanks for mathing with me today!")
