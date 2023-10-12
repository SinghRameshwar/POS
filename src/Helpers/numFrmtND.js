

function numFrmtND(num) {
    try{
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }catch(error){return num}
    }
  
export default (numFrmtND);