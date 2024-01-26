# from app import app, mongo_db

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

PASSWORD = "62n7Oiybn5u44gCY"
uri = f"mongodb+srv://nj-tree-foundation-tree-map-prod-db:{PASSWORD}@prod-db.iwb4mld.mongodb.net/?retryWrites=true&w=majority"  # Replace with your MongoDB URI
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
mongo_db = client['TreeMap']

def backup_db():
    clear_backup()
    records = list(mongo_db.tree_logs.find())
    for i in range(len(records)):
        record = records[i]
        print(i)
        mongo_db.tree_logs_backup.insert_one(record)
    # success = mongo_db.tree_logs_backups.insert_one(list(records)[0])
    # print(success)
    # .forEach(lambda doc: mongo_db.tree_logs_backups.insert(doc))

def load_backup():
    clear_db()
    records = list(mongo_db.tree_logs_backup.find())
    for i in range(len(records)):
        record = records[i]
        print(i)
        mongo_db.tree_logs.insert_one(record)


def clear_backup():
    items_collection = mongo_db.tree_logs_backup
    return items_collection.drop()
    
def clear_db():
    items_collection = mongo_db.tree_logs
    return items_collection.drop()

def insert_db(data_point):
    items_collection = mongo_db.tree_logs
    result = items_collection.insert_one(data_point)
    return result.acknowledged

def query_db():
    items_collection = mongo_db.tree_logs
    result = items_collection.find()
    result = list(result)[0]
    return result

if __name__ == "__main__":
    backup_db()

