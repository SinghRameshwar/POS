/* ----------- Insert Comp Master Data -----------*/

import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.POS");

export const itemInsert = (payload) => {
  return new Promise((resolved, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT OR REPLACE INTO items_master(item_id, item_name, p_price, s_price, qty) values (?, ?, ?, ?, ?)",
        [
          payload.item_id,
          payload.item_name,
          payload.p_price,
          payload.s_price,
          payload.qty,
        ],
        (txObj, resultSet) => {
          //console.log('Data Added Successfully',"");
          resolved("success");
        },
        (txObj, error) => console.log("Error", error)
      );
    });
  });
};
