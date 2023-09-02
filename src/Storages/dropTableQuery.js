import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.POS");

/* ----------- drop Table with table name -----------*/
export const dropTablewithName = (name) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM " + name,
        [],
        (txObj, resultSet) => {
          console.log("Delete Table Successfully", name);
          resolve(txObj);
        },
        (txObj, error) => console.log("Error", error)
      );
    });
  });
};
