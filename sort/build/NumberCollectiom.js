"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollectiom = void 0;
var NumberCollectiom = /** @class */ (function () {
    function NumberCollectiom(data) {
        var _this = this;
        this.data = data;
        this.compare = function (i, j) { return _this.data[i] > _this.data[j]; };
        this.swap = function (i, j) {
            var temp = _this.data[i];
            _this.data[i] = _this.data[j];
            _this.data[j] = temp;
        };
    }
    Object.defineProperty(NumberCollectiom.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return NumberCollectiom;
}());
exports.NumberCollectiom = NumberCollectiom;
