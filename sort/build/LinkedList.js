"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        this.head = null;
        this.add = function (data) {
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
        this.at = function (index) {
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
        this.compare = function (i, j) {
            if (!_this.head)
                throw new Error('The list is empty');
            return _this.at(i).data > _this.at(j).data;
        };
        this.swap = function (i, j) {
            // Actually this code should be more complicated
            var leftNode = _this.at(i);
            var rightNode = _this.at(j);
            var temp = leftNode.data;
            leftNode.data = rightNode.data;
            rightNode.data = temp;
        };
        this.print = function () {
            if (!_this.head)
                return;
            var node = _this.head;
            while (node) {
                console.log(node.data);
                node = node.next;
            }
        };
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
}());
exports.LinkedList = LinkedList;
