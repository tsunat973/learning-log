// function  sum() {
//     return arguments.reduce((total, num) => total + num);
// }

function sum(...nums)  {
console.log(nums);
}
function raceResults(gold,silver,...rest) {
    console.log(`金:${gold}`);
    console.log(`銀:${silver}`);
    console.log(`その他:${rest}`);
}