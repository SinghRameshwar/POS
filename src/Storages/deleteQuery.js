import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.POS");

export const deleteItembyId = (id) => {
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM items WHERE id = ? ",
      [id],
      (txObj, resultSet) => {
        console.log("Data Added Successfully", "");
      },
      (txObj, error) => console.log("Error", error)
    );
  });
};

// Table Delete then ( DROP TABLE TableName)
