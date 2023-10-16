import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.POS");

export const getScannedItem = (itemId) => {
  return new Promise((response, reject) => {
    let query =  "SELECT * FROM items_master where item_id = '" + itemId +"'"
    //let query =  "SELECT * FROM items_master"
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (txObj, res) => {
          if (res.rows.length > 0) {
            response(res.rows._array[0]);
          } else {
            response("No Item in stock!");
          }
        },
        (txObj, error) => console.log("Error ", error)
      );
    });
  });
};
