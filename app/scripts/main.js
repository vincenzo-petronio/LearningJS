/* eslint-disable */

console.log('\'Allo \'Allo!');


// Constructor Pattern
var DataNow = function () {
    this.fulldate = new Date();
    this.Now = function () {
        return this.fulldate;
    };
};

// Named function expression (è un modo meno noto per definire una funzione)
// var DataNow = function DataOra() {
//     this.value = new Date();
//     this.Now = function () {
//         return this.value;
//     };
// };

// Constructor function to ES2015 class
// class DataNow {
//     constructor() {
//         this.value = new Date();
//         this.Now = function () {
//             return this.value;
//         };
//     }
// }