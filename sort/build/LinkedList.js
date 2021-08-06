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
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        _this.add = function (data) {
            var node = new ListNode(data);
            if (!_this.head) {
                _this.head = node;
                return;
            }
            var tail = _this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        };
        _this.at = function (index) {
            if (!_this.head)
                throw new Error("Index " + index + " is out of bounds.");
            var counter = 0;
            var node = _this.head;
            while (node) {
                if (counter === index)
                    return node;
                counter++;
                node = node.next;
            }
            throw new Error("Index " + index + " is out of bounds.");
        };
        _this.compare = function (i, j) {
            if (!_this.head)
                throw new Error('The list is empty');
            return _this.at(i).data > _this.at(j).data;
        };
        _this.swap = function (i, j) {
            // Actually this code should be more complicated
            var leftNode = _this.at(i);
            var rightNode = _this.at(j);
            var temp = leftNode.data;
            leftNode.data = rightNode.data;
            rightNode.data = temp;
        };
        _this.print = function () {
            if (!_this.head)
                return;
            var node = _this.head;
            var result = '';
            while (node) {
                result += ' ' + node.data;
                node = node.next;
            }
            console.log(result);
        };
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
