import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.POS");

export const scannedItemlist = (db, payload) => {
  //console.log("-----11------", payload);
  return new Promise((resolved, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT OR REPLACE INTO po_item(itm_amt, item_name, unit_name, item_id, quantity, itmRate, disc, text2, v_id, _id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          payload.itemTotalAmt,
          itemobj.title,
          "pic", //Item Unit
          itemobj.id,
          payload.itemQty,
          payload.itemRate,
          "0", // Discount Amount
          "", // Item Description
          "" + payload.voucherRowPrimarKey + "",
          "" + payload.itemRowPrimaryKey + "", // prime number
        ],
        (txObj, resultSet) => {
          console.log("Data Added Successfully", "POS ITEM");
          resolved(txObj);
        },
        (txObj, error) => console.log("Error", error)
      );
    });
  });
};
