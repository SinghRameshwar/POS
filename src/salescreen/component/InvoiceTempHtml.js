import numFrmt from "../../Helpers/numFrmt";

export const InvoiceTempHtml = (payload, address1) => {
  let itemList = "";
  let index1 = 1;

  payload.itemDetails.map((item, index) => {
    index1 += index;
    let itemRate = item.itemAmount + item.discountAmount / item.quantity;

    itemList +=
      `<div style="display: flex; justify-content: space-between;">
	<p style="text-align: left; width:40%">` +
      index1 +
      ". " +
      item.itemName +
      `</p>
	<p style="text-align: left; width:10%"">` +
      item.quantity +
      `</p>
	<p style="text-align: left; width:10%"">` +
      item.unitName +
      `</p>
	<p style="text-align: left; width:10%"">` +
      numFrmt(itemRate) +
      `</p>
	<p style="text-align: right; width:10%"">` +
      item.discountAmount +
      `</p>
	<p style="text-align: right; width:20%"">` +
      numFrmt(item.itemAmount) +
      `</p>
	</div>`;
  });

  let partyName = "";
  let partyGSTin = "";
  let totalBillAmt = "";
  let itemtotalAmt = "";
  let taxList = "";
  let converter = require("number-to-words");

  payload.accountsTransaction.ledgerDetails.map((item) => {
    if (item.ledgerType == "r2@0") {
      partyName = item.ledger.ledgerName;
      totalBillAmt = item.amount;
      partyGSTin = item.ledger.partyDetails.gstin;
    } else if (item.ledgerType == "r1@0") {
      itemtotalAmt = item.amount;
    } else if (item.ledgerType == "ext") {
      taxList +=
        `<div style="display: flex; justify-content: space-between;">
		<p style="text-align: left; width:40%">` +
        item.ledger.ledgerName +
        `</p>
		<p style="text-align: right;">` +
        item.amount +
        `</p>
		</div>`;
    }
  });

  let decimalVal = totalBillAmt.split(".");
  let numberinWord = "";
  if (decimalVal.length >= 2) {
    numberinWord =
      converter.toWords(totalBillAmt) +
      " and " +
      converter.toWords(decimalVal[1]) +
      " only";
  } else {
    numberinWord = converter.toWords(totalBillAmt);
  }

  const html =
    `<html>
	  <head>
		  <meta charset="utf-8">
		  <title>Invoice</title>
	  </head>
	  <body>
		  <header>
			  <h1 style ="text-align:center">Invoice</h1>
  
			  <div style="display: flex; justify-content: space-between;">
			  <p style="text-align: left;">GSTIN:` +
    payload.accountsTransaction.gstin +
    `</p>
			  <p style="text-align: right;">` +
    payload.customerMobile +
    `</p>
			  </div>
  
			  <address contenteditable style ="text-align:center;">
				  <p>` +
    address1.company_name +
    `</p>
				  <p>` +
    address1.com_address +
    `</p>
				  <p>` +
    address1.com_city +
    " - " +
    address1.com_pin +
    `</p>
				  <p>` +
    address1.com_state +
    " - " +
    address1.com_country +
    `</p>
			  </address>
			  
			  <div style="display: flex; justify-content: space-between;">
			  <p style="text-align: left;">BILL NO: ` +
    payload.transactionNumber +
    `</p>
			  <p style="text-align: right;">DATE:` +
    payload.transactionDate +
    `</p>
			  </div>
  
			  <address contenteditable style ="text-align:left">
				  <p>` +
    partyName +
    `</p>
				  <p>   </p>
				  <p>GSTIN: ` +
    partyGSTin +
    `</p>
			  </address>
			  <hr>
		  </header>
  
		  <div style="display: flex; justify-content: space-between;">
		  <p style="text-align: left; width:40%">#DESC</p>
		  <p style="text-align: left; width:10%">QTY</p>
		  <p style="text-align: left; width:10%">UNIT</p>
		  <p style="text-align: left; width:10%">RATE</p>
		  <p style="text-align: right; width:10%">DISC AMT</p>
		  <p style="text-align: right; width:20%">AMT(` +
    address1.currency +
    `)</p>
		  </div>
		  <hr>` +
    itemList +
    `
		  <hr>
		  <div style="display: flex; justify-content: space-between;">
			  <p style="text-align: left;">Total Item Amount</p>
			  <p style="text-align: right;">` +
    numFrmt(itemtotalAmt) +
    `</p>
		  </div>
		  <br/>` +
    taxList +
    `<hr>
  
		  <div style="display: flex; justify-content: space-between;">
		  <p style="text-align: left; width:40%">Total Bill Amount</p>
		  <p style="text-align: right;">` +
    numFrmt(totalBillAmt) +
    `</p>
		  </div>
		  
		  <aside>
			  <div contenteditable>
				  <p>` +
    numberinWord.toLocaleUpperCase() +
    `</p>
			  </div>
		  </aside>
	  </body>
  </html>
  `;

  return html;
};
