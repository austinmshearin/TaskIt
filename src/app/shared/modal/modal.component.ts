import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task/task.service';
import { TaskJob } from '../taskJob/taskJob.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {

  public taskJob: TaskJob;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.updateTaskJob.subscribe((taskJob: TaskJob) => {
      this.taskJob = taskJob;
    });
  }

  modalSubmit(formObj: NgForm) {

  }

  // cancelCreateTask(formObj: NgForm) {
  //   formObj.reset();
  // }

  // addTaskSubmit(formObj: NgForm) {
  //   let id = Date.now();
  //   let title = formObj.value.title;
  //   let description = formObj.value.description;
  //   let dueDate = formObj.value.dueDate;
  //   let status = formObj.value.status;
  //   let priority = formObj.value.priority;
  //   this.taskService.add_task(
  //     id,
  //     title,
  //     description,
  //     dueDate,
  //     priority,
  //     status
  //   );
  //   formObj.reset();
  // }
}
