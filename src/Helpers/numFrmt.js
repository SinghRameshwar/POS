

function numFrmt(num) {
  try{
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }catch(error){return num}
  }

  export default (numFrmt);