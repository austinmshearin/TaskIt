import { Component } from '@angular/core';
import { TaskService } from '../shared/task/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {

  constructor(private taskService: TaskService) {}

  addTaskSubmit(formObj: NgForm) {
    let title = formObj.value.title;
    let description = formObj.value.description;
    let dueDate = formObj.value.dueDate;
    let status = formObj.value.status;
    let priority = formObj.value.priority;
    this.taskService.add_task(title, description, dueDate, priority, status);
    formObj.reset();
  }
}