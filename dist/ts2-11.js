"use strict";
var Directoin;
(function (Directoin) {
    Directoin[Directoin["Up"] = 1] = "Up";
    Directoin[Directoin["Down"] = 2] = "Down";
    Directoin[Directoin["Left"] = 3] = "Left";
    Directoin[Directoin["Right"] = 4] = "Right";
})(Directoin || (Directoin = {}));
console.log(Directoin);
var AppStatus;
(function (AppStatus) {
    AppStatus["Active"] = "ACT";
    AppStatus["InActive"] = "INACT";
    AppStatus["OnHolding"] = "HLD";
    AppStatus["OnStop"] = "STOP";
})(AppStatus || (AppStatus = {}));
let y;
function checkStatus(status) {
    for (y in AppStatus) {
        console.log(status[y]);
    }
}
checkStatus(AppStatus.Active);
