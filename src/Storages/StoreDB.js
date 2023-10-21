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

        // Transations Tables
        tx.executeSql(
          "CREATE TABLE po_item(_id VARCHAR PRIMARY KEY, v_id VARCHAR, item_id VARCHAR, item_name TEXT, unit_name TEXT, itm_amt INTEGER, quantity INTEGER, disc INTEGER DEFAULT 0,itmRate INTEGER DEFAULT 0, text1 TEXT, text2 TEXT, text3 TEXT, text4 TEXT)"
        );
        tx.executeSql(
          "CREATE TABLE po_item_tax(_id INTEGER PRIMARY KEY AUTOINCREMENT, v_id VARCHAR, tax_id INTEGER, idrefi VARCHAR, tax_amt Decimal(20,4), rate INTEGER, tax_lname TEXT, text1 TEXT, text2 TEXT, text3 TEXT, text4 TEXT)"
        );
        tx.executeSql(
          "CREATE TABLE sale_pos_main(_id VARCHAR PRIMARY KEY, v_id INTEGER, t_type TEXT, t_no TEXT, t_Dt TEXT, bpn_gstin TEXT, p_lid INTEGER DEFAULT 0, p_gstin TEXT, payment_type TEXT,customerMob TEXT, text1 TEXT, text2 TEXT, text3 TEXT, text4 TEXT)"
        );
        tx.executeSql(
          "CREATE TABLE po_item_main(_id VARCHAR PRIMARY KEY, v_id VARCHAR, item_id VARCHAR, item_name TEXT, unit_name TEXT, itm_amt INTEGER, quantity INTEGER, disc INTEGER DEFAULT 0,itmRate INTEGER DEFAULT 0, text1 TEXT, text2 TEXT, text3 TEXT, text4 TEXT)"
        );
        tx.executeSql(
          "CREATE TABLE customer_dtl(_id INTEGER PRIMARY KEY, address TEXT, email TEXT, doa VARCHAR, dob VARCHAR, mobNo INTEGER, name TEXT, text1 TEXT, text2 TEXT, text3 TEXT, text4 TEXT)"
        );
      });
    } catch (error) {
      console.log("Table Create Error: ", error);
    }
  }
}
