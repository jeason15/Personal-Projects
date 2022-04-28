##############################################
# rallyscoring.py  Joshua Eason  9/30/2018
# this module contains functions that allow 
# the simulation of many volleyball games using 
# rally scoring.
##############################################
import random

def play_point(ranking1, ranking2):
    """This function simulates a point in a volleyball game and returns the winning team number
    (1 or 2). ranking1 and ranking2 are integers from 1 to 100 indicating the power rank
    of the respective team"""
    pick = random.randint(1, ranking1+ranking2)    
    if pick <= ranking1:
        return 1
    else:
        return 2

def play_game(num_points, ranking1, ranking2):
    """This function simulates an entire volleyball game and returns the score for each team"""
    score1 = 0
    score2 = 0
    while (score1 < num_points and score2 < num_points) or abs(score1-score2) <= 1: 
        point = play_point(ranking1, ranking2)         
        if point == 1:
            score1 += 1
        else:
            score2 += 1
        #print(score1, score2) 
    return (score1, score2)


def play_stats(num_games, num_points, ranking1, ranking2):
    """This module simulates a number of games and calculates the winning percentage of each team"""
    sum1 = 0
    sum2 = 0
    for _ in range(num_games):
        (score1, score2) = play_game(num_points, ranking1, ranking2)
        if score1 > score2:
            sum1 += 1
        else:
            sum2 += 1
            
    print("Team 1 won", str(round((sum1/num_games)*100,1)) + "% of the games")
    print("Team 2 won", str(round((sum2/num_games)*100,1)) + "% of the games")