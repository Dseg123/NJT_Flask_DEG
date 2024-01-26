import sys
sys.path.append("app")

from flask import request, jsonify, render_template
from bson import json_util
import json
from app import app, mongo_db  # Import the Flask app instance and the MongoDB database instance
import datetime
from db_ops import *
import requests
from flask_cors import CORS, cross_origin
import pandas as pd
import read_trees

PASSWORD = "NJTForever!"
LOADING = False

@app.route('/get_loading', methods=['GET'])
def get_loading():
    global LOADING
    
    print("Loading", LOADING)
    if LOADING:
        return "Loading"
    return "Not Loading"

@app.route('/add_items', methods=['POST'])
def add_items():
    global LOADING

    print("ADDING")

    query_params = request.args.to_dict()
    print("Request", request)
    print("Params", query_params)

    print("File", request.files['upload_file'])
    print("Password", request.form.get('upload_auth_token'))
    # return query_params

    file = request.files['upload_file']
    password = request.form.get('upload_auth_token')

    if password != PASSWORD:
        return "Incorrect credentials"


    file.save("curr_data.csv")

    LOADING = True
    success = read_trees.upload_to_db('curr_data.csv')
    LOADING = False
    print(success)
    return success


@app.route('/get_items', methods=['GET'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorizations'])
def get_items():
    print("HI")
    query_params = request.args.to_dict()
    items_collection = mongo_db.tree_logs
    

    if ('min_long' in query_params) and ('max_long' in query_params) and ('min_lat' in query_params) and ('max_lat' in query_params):
        min_longitude = float(query_params['min_long'])
        max_longitude = float(query_params['max_long'])
        min_latitude = float(query_params['min_lat'])
        max_latitude = float(query_params['max_lat'])
        
        if ('name' in query_params):
            names = query_params['name'].split(',')  # Split the names if multiple are provided
            # Query MongoDB for items with latitude, longitude, and specific names
            items = items_collection.find({
                '$and': [
                    {'Coords.0': {'$gte': min_longitude, '$lte': max_longitude}},
                    {'Coords.1': {'$gte': min_latitude, '$lte': max_latitude}},
                    {'name': {'$in': names}}
                ]
            })
        else:
        # Query MongoDB for items with longitude and latitude within the specified ranges
            items = items_collection.find({
                '$and': [
                    {'Coords.0': {'$gte': min_longitude, '$lte': max_longitude}},
                    {'Coords.1': {'$gte': min_latitude, '$lte': max_latitude}}
                ]
            })
        items = list(items)
    else:
        items = list(items_collection.find({}))
        

    items = json.loads(json_util.dumps(items))
    print(items) 

    return items

    
