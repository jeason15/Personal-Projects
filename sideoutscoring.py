####################################################
# sideoutscoring.py  Joshua Eason  9/30/2018
# This module contains functions that enable the simulation
# of many volleyball games using sideout scoring
####################################################

import random

def play_point(serving, ranking1, ranking2):
    pick = random.randint(1, ranking1+ranking2)     
    team_serve = serving
    if pick <= ranking1 and team_serve == 1:
        return 1
    elif pick > ranking1 and team_serve == 2:
        return 2
    else:
        return 3

def play_game(num_points, ranking1, ranking2):
    score1 = 0
    score2 = 0
    serving = 1
    #print(serving,score1,score2)
    while (score1 < num_points and score2 < num_points) or abs(score1-score2) <= 1: 
        point = play_point(serving, ranking1, ranking2)         
        if point == 1:
            score1 += 1
        elif point == 2:
            score2 += 1
        elif point == 3 and serving == 1:
            serving += 1
        elif point == 3 and serving == 2:
            serving -= 1
        #print(serving, score1, score2) 
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