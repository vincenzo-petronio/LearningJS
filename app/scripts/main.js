console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });


var DataNow = function () {
    this.value = new Date();
    this.Now = function () {
        return this.value;
    };
};

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