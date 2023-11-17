import { Component } from '@angular/core';
import { TaskService } from '../shared/task/task.service';
import { TaskJob } from '../shared/taskJob/taskJob.model';
import { Task } from '../shared/task/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {

  public taskJob: TaskJob;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.updateTaskJob.subscribe((taskJob: TaskJob) => {
      this.taskJob = taskJob;
    });
  }

  addTask()
  {
    this.taskService.setTaskJob(
      new TaskJob(
        "Add",
        new Task())
    )
  }
}
