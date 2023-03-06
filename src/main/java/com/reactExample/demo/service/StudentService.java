package com.reactExample.demo.service;

import com.reactExample.demo.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
