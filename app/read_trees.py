import pandas as pd
from locations import get_coords
import db_ops

def upload_to_db(csv_path):

    df = pd.read_csv(csv_path)
    col_names = ["Species - Latin Name", "Common Name", "Address", "Comments", "Planting Season", "Planting Year", "Tree Care-taker", "Nursery", "Replacement tree", "City"]

    db_ops.backup_db()
    db_ops.clear_db()

    for i in range(len(df)):
        print(i)
        row = df.iloc[i]
        #   print(row)
        #   print(row.keys())
        for col in col_names:
            try:
                a = row[col]
            except:
                print("Spreadsheet in incorrect format")
                db_ops.load_backup()
                return "Spreadsheet in incorrect format"
        

        row_dict = {}
        for col in col_names:
            if pd.isna(row[col]):
                row_dict[col] = "Unknown"
            else:
                row_dict[col] = row[col]

        # print(row_dict)



        # print(i, row['City'])
        # if row['City'] == None:
        #     continue

        if row_dict['City'] == 'Unknown':
            continue
        
        my_address = str(row['Address']) + ", " + str(row['City']) + ", NJ"
        print(my_address)
        try:
            coords = get_coords(my_address)
        except:
            db_ops.load_backup()
            return "API Uses Exhausted"
        
        if coords == None:
            try:
                coords = get_coords(str(row['City']) + ", NJ")
            except:
                db_ops.load_backup()
                return "API Uses Exhausted"

           

        row_dict["Coords"] = coords
        row_dict["Planting Year"] = int(row_dict["Planting Year"])
        
        res = db_ops.insert_db(row_dict)
        if not res:
            db_ops.load_backup()
            return "Error in Data Upload"
    return "Data Uploaded Successfully"
    
if __name__ == '__main__':
    csv_path = '../data/rtp_trees.csv'
    df = pd.read_csv(csv_path)
    print(df)

    for i in range(2270, len(df)):
        print(i)
        row = df.iloc[i]
        my_address = str(row['Address']) + ", " + str(row['City']) + ", NJ"
        print(my_address)

        coords = get_coords(my_address)
        print(coords)






