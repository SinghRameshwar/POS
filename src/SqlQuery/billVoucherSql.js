import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.POS");

export const billVoucherSql = (payload) => {
  try {
    let _id = payload.inv_id + "";
    let v_id = payload.voucherId;
    let t_type = payload.json_obj.transactionType;
    let t_no = payload.json_obj.transactionNumber;
    let t_Dt = payload.json_obj.transactionDate;
    let bpn_gstin = accountsTransaction.gstin;
    let p_gstin = "00";
    let p_lid = "0";
    let payment_type = payload.pmtType;
    let customerMob = payload.json_obj.customerMobile + "";

    return new Promise((resolved, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT OR REPLACE INTO sale_pos_main(_id, v_id, t_type, t_no, t_Dt, bpn_gstin, p_lid, p_gstin, payment_type, customerMob, text1) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            _id,
            v_id,
            t_type,
            t_no,
            t_Dt,
            bpn_gstin,
            p_lid,
            p_gstin,
            payment_type,
            customerMob,
            payload.grandTotal,
          ],
          (txObj, resultSet) => {
            console.log("Voucher Added Successfully");
            resolved("Success");
          },
          (txObj, error) => console.log("Error", error)
        );
      });
    });
  } catch (error) {
    console.log("Local Main Entry Data Save", error);
  }
};
