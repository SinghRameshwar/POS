import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.POS");

export const getItemList = () => {
  return new Promise((response, reject) => {
    let query = "SELECT * FROM items_master";
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (txObj, res) => {
          response(res.rows._array);
        },
        (txObj, error) => console.log("Error ", error)
      );
    });
  });
};
