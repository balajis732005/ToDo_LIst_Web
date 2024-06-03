package com.balajiscode.todo.model;

import jakarta.persistence.*;

@Table(name="datatask") //This will create our own table name otherwise default table name is class name
@Entity // make this as Entity Class
public class Task {

    @Id //Denotes this is Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // This give Separate values for every data
    //Here we are give 'enum' as 'IDENTITY'
    private Long id;
    private String description;
    private boolean completed;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
