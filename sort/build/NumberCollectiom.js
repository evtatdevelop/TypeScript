"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollectiom = void 0;
var Sorter_1 = require("./Sorter");
var NumberCollectiom = /** @class */ (function (_super) {
    __extends(NumberCollectiom, _super);
    function NumberCollectiom(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.compare = function (i, j) { return _this.data[i] > _this.data[j]; };
        _this.swap = function (i, j) {
            var temp = _this.data[i];
            _this.data[i] = _this.data[j];
            _this.data[j] = temp;
        };
        return _this;
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
}(Sorter_1.Sorter));
exports.NumberCollectiom = NumberCollectiom;
