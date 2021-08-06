import { Sorter } from "./Sorter";
class ListNode {

  next: ListNode | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter{
  head: ListNode | null = null;
  
  add = (data: number): void => {
    const node = new ListNode(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at = (index: number): ListNode => {
    if (!this.head) throw new Error(`Index ${index} is out of bounds.`);

    let counter = 0;
    let node: ListNode | null = this.head;
    while (node) {
      if (counter === index) return node;
      
      counter++;
      node = node.next;
    }
    throw new Error(`Index ${index} is out of bounds.`);
  }

  compare = (i: number, j:number): boolean => {
    if (!this.head) throw new Error('The list is empty');
    return this.at(i).data > this.at(j).data; 
  }

  swap = (i: number, j:number): void => {
    // Actually this code should be more complicated
    const leftNode = this.at(i);
    const rightNode = this.at(j);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print = (): void => {
    if (!this.head) return;
    let node: ListNode | null = this.head;
    let result: string = '';
    while(node) {
      result += ' ' + node.data;
      node = node.next;
    }
    console.log(result);
  }
}