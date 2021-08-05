"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(data) {
        var _this = this;
        this.data = data;
        this.compare = function (i, j) { return _this.data[i].toLowerCase() > _this.data[j].toLowerCase(); };
        this.swap = function (i, j) {
            // const arr = Array.from(this.data);
            var arr = _this.data.split('');
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            _this.data = arr.join('');
        };
    }
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return CharacterCollection;
}());
exports.CharacterCollection = CharacterCollection;
