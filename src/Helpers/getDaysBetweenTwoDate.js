
// yyyy-MM-DD formate
export const getDaysBetweenTwoDate = (fromDt, toDate) =>{ 

    let timeDifference = toDate.getTime() - fromDt.getTime()
    let dayMilliSeconds = 1000 * 60 * 60 * 24;
    let totalDays = timeDifference / dayMilliSeconds;
    totalDays = Math.floor(totalDays);// Math.floor used for Int values 
    return totalDays
}