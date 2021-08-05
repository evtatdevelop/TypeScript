export class NumberCollectiom {
  constructor(public data: number[]) {}
  
  get length(): number {
    return this.data.length
  };
   
  compare = (i: number, j: number): boolean => this.data[i] > this.data[j];

  swap = (i: number, j: number): void => {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}