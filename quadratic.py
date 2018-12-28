from math import *

def quad():
        a = int(input("What is the value of A?: "))
        b = int(input("What is the value of B?: "))
        c = int(input("What is the value of C?: "))

        roots_list = (roots(a,b,c))

        if roots_list is type(str):
                print(roots_list)
        elif len(str(roots_list)) <= 3:
                print("Your root is", roots_list)
        else:
                print("Your roots are :", roots_list)
        


def roots(a,b,c):
        delta = (b**2)-(4*a*c)
        if delta == 0:
                return (-b)/(2*a)
        elif a == 0:
                return "This is not a valid quadratic."
        elif delta > 0:
                x_1 = ((-b)+sqrt(delta))/2*a
                x_2 = ((-b)-sqrt(delta))/2*a
                return x_1, x_2
        else:
                x_1 = ((-b)+sqrt(delta*-1))/2*a
                x_2 = ((-b)-sqrt(delta*-1))/2*a
                return str(x_1)+"i", str(x_2)+"i"
                

    
