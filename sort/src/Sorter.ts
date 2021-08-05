// import { NumberCollectiom } from "./NumberCollectiom";

interface Sortable {
  length: number;
  compare(i: number, j: number): boolean;
  swap(i: number, j: number): void;
}


export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length, swap, compare } = this.collection;
    
    for (let i = 0; i < length; i++ ) {
      for (let j = 0; j < length - 1 - i; j++ ) {
        if (compare(j, j + 1))
          swap(j, j + 1);
      }
    }
  }
} 