import requests
import pandas as pd
import json
from urllib.parse import quote

KEY = "30m7sutbjBKWh105o6s4Ocs12KfL5wfu"
url = "https://api.mapbox.com/geocoding/v5/mapbox.places/{addr}.json?access_token=pk.eyJ1IjoiZHlsYW5lZyIsImEiOiJjbHJqc2V2dXUwMWgxMmlxZXBiNnU5b3Y2In0.dynPOTXJWiyozU-flbNF_Q"
# def get_coords_mapbox(address):


def get_coords(address):


    response = requests.request("GET", url.format(addr=quote(address)))

    # print(response.text)

    data = json.loads(response.text)
    # print(data)

    if len(data['features']) == 0:
        return None

    return data['features'][0]['center'] #returns [longitude, latitude]


if __name__ == "__main__":
    print(get_coords("2 S Brown St, Gloucester City, NJ 08030, United States"))
    # print(get_coo)
