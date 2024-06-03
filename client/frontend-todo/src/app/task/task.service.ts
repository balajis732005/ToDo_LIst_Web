import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl : string = "http://localhost:8080/api/task";

  constructor(private httpClient: HttpClient) { }

  creatTask(newTask: Task) : Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl,newTask); // Type cast the Object data to Task type
  }

  getAllTasks() : Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl); // Type cast the Object data to Task[] type
  }

  updateTask(taskId : number , updatedTask : Task) : Observable<Task> {
    return this.httpClient.put<Task>(this.apiUrl+"/"+taskId , updatedTask); // Change Value and save in updatedTask
  }

  deletetask(taskId : number) {
    return this.httpClient.delete(this.apiUrl+"/"+taskId);
  }
}