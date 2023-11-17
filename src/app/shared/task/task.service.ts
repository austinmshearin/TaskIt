import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Subject } from 'rxjs';
import { TaskJob } from '../taskJob/taskJob.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    new Task(1, "test title", "test description", "2023-11-01", "Low", "To Do"),
    new Task(2, "test title 2", "test description 2", "2023-11-02", "Medium", "In Progress"),
    new Task(3, "test title 3", "test description 3", "2023-11-03", "High", "Done")
  ]
  private selectedTaskId = 0;

  constructor() {}

  taskListChanged = new Subject<Task[]>();

  selectedTaskIdChanged = new Subject<Task>();

  updateTaskJob = new Subject<TaskJob>();

  setTaskJob(taskJob: TaskJob)
  {
    this.updateTaskJob.next(taskJob)
  }

  setSelectedTaskId(id: number) {
    this.selectedTaskId = id;
    this.selectedTaskIdChanged.next(this.getSelectedTask());
  }

  getSelectedTask() {
    if (this.selectedTaskId == 0) {
      return new Task(0, "", "", "", "", "")
    }
    for (let task of this.tasks) {
      if (task.id === this.selectedTaskId) {
        return task;
      }
    }
  }

  get_tasks(){
    return this.tasks.slice();
  }

  add_task(id, title, description, dueDate, priority, status){
    this.tasks.push(new Task(id, title, description, dueDate, priority, status));
    this.taskListChanged.next(this.tasks.slice());
  }
}
