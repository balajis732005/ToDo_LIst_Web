package com.balajiscode.todo.repository;

import com.balajiscode.todo.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

//For JpaRepository<class_name , Datatype of Primary Key>
public interface TaskRepository extends JpaRepository<Task,Long> {

}
