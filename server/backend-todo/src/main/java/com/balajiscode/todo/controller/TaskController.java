package com.balajiscode.todo.controller;

import com.balajiscode.todo.model.Task;
import com.balajiscode.todo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //This make the class as 'Controller' and return List data as JSON data.
@CrossOrigin //This will give access to get data from frontend
public class TaskController {

    private final TaskRepository taskRepository;

    @Autowired // This will crete automatically object for class
    TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    //return to GET Request of the Browser
    @GetMapping("/hello-world")
    public String hello() {
        return "Hello World!!";
    }

    //This is Post Request to POSTMAN app
    @PostMapping("/api/task")
    public Task createTask(@RequestBody Task task) { // It get Request from POSTMAN and print it
        //System.out.println(task.getDescription()+" - "+task.isCompleted());
        taskRepository.save(task);
        return task;
    }

    @GetMapping("/api/task")
    public List<Task> getAllTasks() {
        return taskRepository.findAll(); //This Function Returns all JSON Values in List Form
    }

    @PutMapping("/api/task/{id}") // This will Update the Details {id} , in which id data we have to change
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) { //@PathVariable get the specified we have to change
        task.setId(id); // Now It will set the id to change
        return taskRepository.save(task); // This Save method also insert and update the values
    }

    @DeleteMapping("api/task/{id}")
    public void DeleteTask(@PathVariable Long id) {
        taskRepository.deleteById(id);
    }
}
