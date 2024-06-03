import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  ngOnInit(): void {
      this.getAlltasks();
  }

  constructor(private taskServices : TaskService) { }

  newTask : Task = {description : "" , completed : false}; // Initial Value

  createTask() : void {
    this.taskServices.creatTask(this.newTask).subscribe((createdTask) => {
      this.newTask = {description : "" , completed : false}; // Reset the values
      this.tasks.push(createdTask); // push the new value to array
    })
  }

  tasks! : Task[];
  getAlltasks() {
    this.taskServices.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  editingTask : Task|null = null;
  updatingTask : Task = {description : "" , completed : false}; // Initial Value

  editTask(task : Task) : void {
    this.editingTask = task;
    this.updatingTask = {...task}; // Copy the data to updatingtask
  }

  updateTask() : void {
    if(this.editingTask){
      this.taskServices.updateTask(this.editingTask.id! , this.updatingTask)
      .subscribe((result) =>{
        const index = this.tasks.findIndex((task) => task.id == this.editingTask!.id);
        if(index!=-1){
          this.tasks[index] = result;
          //close edit
          this.cancelEdit();
        }
      })
    }
  }

  cancelEdit() : void {
    this.editingTask = null;
    this.updatingTask = {description : "" , completed : false}; // default value
  }

  deleteTask(taskId : number) : void {
    if(confirm("Are You Sure Want to delete ? "))
    {
      this.taskServices.deletetask(taskId)
      .subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id!==taskId);
        if(this.editingTask && this.editingTask.id == taskId){
          this.cancelEdit();
        }
      })
    }
  }
}  
