"use strict";
// import { NumberCollectiom } from "./NumberCollectiom";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// interface Sortable {
//   length: number;
//   compare(i: number, j: number): boolean;
//   swap(i: number, j: number): void;
// }
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var _a = this, length = _a.length, swap = _a.swap, compare = _a.compare;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (compare(j, j + 1))
                    swap(j, j + 1);
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
