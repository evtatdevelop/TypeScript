import { Sorter } from "./Sorter";
export class CharacterCollection extends Sorter{
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length
  }

  compare = (i: number, j: number): boolean => this.data[i].toLowerCase() > this.data[j].toLowerCase();

  swap = (i: number, j: number): void => {
    // const arr = Array.from(this.data);
    const arr = this.data.split('');
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    this.data = arr.join('');
  }
}