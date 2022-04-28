#########################################
# factorial.py  Joshua Eason  12/22/2018
# This module contains functions to 
# to calculate the nth factorial
#########################################

def fact_iterative(n):
    if n < 2:
        return 1
    else:
        a = n
        for i in range(n):
            if i + 1 < n:
                a = a * (i + 1)
        return a

def fact_recursive(n):
    if n < 2:
        return 1
    else:
        return n * fact_recursive(n-1)