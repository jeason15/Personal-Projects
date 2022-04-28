###################################################
# weather.py  Joshua Eason & Branden Smith
# This script gives prints a detailed forecast
# obtained from the NWS for the next several days
# for the current location of the IP address.
###################################################
import urllib.request
import json
import geocoder

def get_latlong():
    """uses the IP address to obtain the current location in a lat/long 
    format as a comma separated string"""
    info = urllib.request.urlopen("https://ipinfo.io").read()
    decoded = json.loads(info)
    print(decoded["loc"])
    return decoded["loc"]

def get_forecast(latlongstr):
    """takes a comma separated string version of a lat/long and obtains a forecast from the NWS"""
    response = urllib.request.urlopen("https://api.weather.gov/points/"+latlongstr+"/forecast").read() 
    return json.loads(response)["properties"]["periods"]


#Prints the forecast for each time period returned by the NWS forecast. 
for period in get_forecast(get_latlong()):
    print(period["name"]+":")
    print(period["detailedForecast"])
    print()
