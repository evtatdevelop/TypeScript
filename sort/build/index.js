"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollectiom_1 = require("./NumberCollectiom");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numberColection = new NumberCollectiom_1.NumberCollectiom([12, -3, 29, -17, 25, -523]);
// const sorter = new Sorter(numberColection)
numberColection.sort();
console.log(numberColection.data);
var characterCollection = new CharactersCollection_1.CharacterCollection('Collection');
// const sorter1 = new Sorter(characterCollection)
characterCollection.sort();
console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
for (var i = 0; i < 7; i++) {
    linkedList.add(Math.floor(Math.random() * 10));
}
linkedList.print();
// const sorter2 = new Sorter(linkedList)
linkedList.sort();
linkedList.print();
