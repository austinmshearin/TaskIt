import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    new Task("Test1", "Test1", "Test1", "Test1"),
    new Task("Test1", "Test1", "Test1", "Test1"),
    new Task("Test1", "Test1", "Test1", "Test1"),
    new Task("Test1", "Test1", "Test1", "Test1")
  ]

  constructor() {}

  taskListChanged = new Subject<Task[]>();

  get_tasks(){
    return this.tasks.slice();
  }

  add_task(){
    this.tasks.push(new Task("Test1", "Test1", "Test1", "Test1"));
    this.taskListChanged.next(this.tasks.slice());
  }
}
