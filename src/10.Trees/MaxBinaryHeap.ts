type CompareFn<T> = (a: T, b: T) => number;

class MaxBinaryHeap<T> {
  private data: T[] = [];
  private compare: CompareFn<T>;

  constructor(compare: CompareFn<T>) {
    this.compare = compare;
  }

  // O(n) time; O(1) space;
  public insert(element: T): void {
    // insert to the end of list first
    this.data.push(element);
    // then bubble it up to the correct position
    this.bubbleUp();
  }

  // move the last element up to its correct position
  private bubbleUp(): void {
    let elementIndex = this.data.length - 1;
    const element = this.data[elementIndex];
    // while elementIndex > 0 since we know when elementIndex === 0
    // the element is already max, nothing left to compare with
    while (elementIndex > 0) {
      const parentIndex = Math.floor((elementIndex - 1) / 2);
      const parent = this.data[parentIndex];
      if (this.compare(element, parent) >= 0) {
        return; // if element is smaller than the parent, it's already at the correct position
      }
      // if element is greater than parent, swap the two
      this.data[elementIndex] = parent;
      this.data[parentIndex] = element;
      elementIndex = parentIndex;
    }
  }

  // O(n) time; O(1) space;
  public extractMax(): T | undefined {
    const max = this.data.shift();
    if (this.data.length) {
      // replace max's with the smallest element
      // then sink the smallest element to its correct position
      this.data.unshift(this.data.pop()!);
      this.sinkDown();
    }
    return max;
  }

  // move the first element down to its correct position
  private sinkDown(): void {
    let elementIndex = 0;
    const element = this.data[elementIndex];
    while (true) {
      let swapIndex: number | null = null;
      const leftChildIndex = elementIndex * 2 + 1;
      if (leftChildIndex < this.data.length) {
        const leftChild = this.data[leftChildIndex];
        // if element is smaller than leftChild, it's not at the correct position
        if (this.compare(element, leftChild) >= 0) {
          swapIndex = leftChildIndex;
        }
      }
      const rightChildIndex = elementIndex * 2 + 2;
      if (rightChildIndex < this.data.length) {
        const rightChild = this.data[rightChildIndex];
        // if element is smaller than rightChild, it's not at the correct position
        if (
          this.compare(element, rightChild) >= 0 &&
          (swapIndex === null ||
            this.data[rightChildIndex] > this.data[swapIndex]) // swap element with the larger child between the two
        ) {
          swapIndex = rightChildIndex;
        }
      }
      if (swapIndex === null) {
        return; // element is larger than both children, it's already at the correct position
      } else {
        const largerChild = this.data[swapIndex];
        this.data[elementIndex] = largerChild;
        this.data[swapIndex] = element;
        elementIndex = swapIndex;
      }
    }
  }

  public toString() {
    return `[${this.data.toString()}]`;
  }
}

// Example
// const maxHeap = new MaxBinaryHeap<number>((a, b) =>
//   a === b ? 0 : a < b ? 1 : -1
// );
const maxHeap = new MaxBinaryHeap<number>((a, b) => b - a);
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
console.log(maxHeap.toString());
console.log(maxHeap.extractMax());
console.log(maxHeap.toString());

export {};
