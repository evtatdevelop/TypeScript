"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollectiom_1 = require("./NumberCollectiom");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numberColection = new NumberCollectiom_1.NumberCollectiom([12, -3, 29, -17, 25, -523]);
var sorter = new Sorter_1.Sorter(numberColection);
sorter.sort();
console.log(numberColection.data);
var characterCollection = new CharactersCollection_1.CharacterCollection('Collection');
var sorter1 = new Sorter_1.Sorter(characterCollection);
sorter1.sort();
console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
for (var i = 0; i < 7; i++) {
    linkedList.add(Math.floor(Math.random() * 10));
}
linkedList.print();
console.log('---------------');
var sorter2 = new Sorter_1.Sorter(linkedList);
sorter2.sort();
linkedList.print();
