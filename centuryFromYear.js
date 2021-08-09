function centuryFromYear(year) {
    var number = year,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}
    if(output.length === 4){
        if(output[3] > 0){
            const currentYear = "" + output[0] + output[1]
            const correctNumber = Number(currentYear) + 1
            return correctNumber
        }
        else {
            const currentYear = "" + output[0] + output[1]
            return parseInt(currentYear)
        }
    } else if(output.length <= 2){
        return 1
    } else {
        if(output[2] > 0){
            const currentYear = "" + output[0]
            const correctNumber = Number(currentYear) + 1
            return correctNumber
        }
        else{
            const currentYear = "" + output[0]
            return parseInt(currentYear)
        }
    }
    // const currentYear = "" + output[0] + output[1]
    // console.log(parseInt(currentYear))
}

// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

//     For year = 1905, the output should be
//     centuryFromYear(year) = 20;
//     For year = 1700, the output should be
//     centuryFromYear(year) = 17.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] integer year

//     A positive integer, designating the year.

//     Guaranteed constraints:
//     1 ≤ year ≤ 2005.

//     [output] integer

//     The number of the century the year is in.

// [JavaScript] Syntax Tips