import { Sorter } from "./Sorter";
import { NumberCollectiom } from "./NumberCollectiom";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberColection = new NumberCollectiom([12, -3, 29, -17, 25, -523 ]);
const sorter = new Sorter(numberColection)
sorter.sort();
console.log(numberColection.data);

const characterCollection = new CharacterCollection('Collection');
const sorter1 = new Sorter(characterCollection)
sorter1.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
for (let i = 0; i < 7; i++){
  linkedList.add(Math.floor(Math.random() * 10))
}
linkedList.print();
console.log('---------------');
const sorter2 = new Sorter(linkedList)
sorter2.sort();
linkedList.print();
