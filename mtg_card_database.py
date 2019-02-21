#############################################
# mtg_card_database.py  Joshua Eason 2/14/19
#
#
#
#############################################

import urllib.request
import json

def get_data():
    """Retrieves the JSON file from www.mtgjson.com"""
    card_database = urllib.request.urlopen("https://mtgjson.com/json/AllCards.json").read()
    decoded = json.loads(card_database)
    return decoded

