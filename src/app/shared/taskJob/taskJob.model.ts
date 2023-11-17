import { Task } from "../task/task.model";

export class TaskJob {
  constructor(
    public mode: string,
    public task: Task
  ) {}
}
