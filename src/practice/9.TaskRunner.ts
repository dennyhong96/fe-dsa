type Task = (done: () => void) => void;

export class TaskRunner {
  private maxConcurrantCount: number;
  private concurrantCount: number;
  private queue: Task[];

  constructor(maxConcurrantCount: number) {
    this.maxConcurrantCount = maxConcurrantCount;
    this.concurrantCount = 0;
    this.queue = [];
  }

  public push(task: Task): void {
    this.queue.push(task);
    this.run();
  }

  private run(): void {
    // throttle concurrent task count
    while (
      this.queue.length > 0 &&
      this.concurrantCount < this.maxConcurrantCount
    ) {
      this.concurrantCount++;
      const task = this.queue.shift()!; // get next task to execute
      const done = () => {
        this.concurrantCount--;
        this.run(); // execute next task
      };
      task(done); // execute the task
    }
  }
}

const task1: Task = (done) => {
  console.log(1);
  setTimeout(() => {
    done();
  }, 3000);
};
const task2: Task = (done) => {
  console.log(2);
  setTimeout(() => {
    done();
  }, 3000);
};
const task3: Task = (done) => {
  console.log(3);
  setTimeout(() => {
    done();
  }, 3000);
};
const task4: Task = (done) => {
  console.log(4);
  setTimeout(() => {
    done();
  }, 3000);
};
const taskRunner = new TaskRunner(2);
taskRunner.push(task1);
taskRunner.push(task2);
taskRunner.push(task3);
taskRunner.push(task4);
