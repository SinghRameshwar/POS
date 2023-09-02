import React from "react";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.POS");

export default class StoreDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };

    try {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS items_master(item_id VARCHAR PRIMARY KEY, item_name TEXT, p_price INTEGER, s_price INTEGER, qty INTEGER)"
        );

        // tx.executeSql(
        //     "CREATE TABLE IF NOT EXISTS ledger_grp_master(_id INTEGER PRIMARY KEY, lgName VARCHAR(100), grpNature VARCHAR(100), isSystem INTEGER DEFAULT 0, data TEXT)"
        //   );
      });
    } catch (error) {
      console.log("Table Create Error: ", error);
    }
  }
}
