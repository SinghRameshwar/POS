import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.POS");

/* ----------- Comp Master Update by C_ID -----------*/
export const updateItem = async (data, cname, id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE company_master SET data = ?, cname = ? WHERE cid = ?",
        [data, cname, id],
        (txObj, resultSet) => {
          //console.log("Data update Successfully", "");
          resolve(txObj);
        },
        (txObj, error) => console.log("Error", error)
      );
    });
  });
};
