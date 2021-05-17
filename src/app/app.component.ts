import { Component, OnInit } from '@angular/core';
import { GradesService } from './service/grades.service';
import { Grading } from './models/grading';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  grades;
  editMode = false;
  nameGrade = '';
  percentFrom = '';
  percentTo = '';
  description = '';
  config: { [key: string]: string } = null;
 
  constructor(private http: GradesService) {
  };

 
  ngOnInit() {
    
    this.grades = this.http.getGrades().subscribe();
    setTimeout(() => {
      this.config = {
        title: 'Grading list',
        footer: ' © Grading list, All rights reserved.',
        date: new Date().toDateString()
      };
    }, 500);
    this.sortGrades();
  }
 
  clearGrades() {
    this.grades = [];
  };

  


  createGrades() {
    const grade: Grading = {
      name: this.nameGrade,
      percent_from: this.percentFrom,
      percent_to: this.percentTo,
      grade_description: this.description,
    };
    this.grades.push(grade);
    this.nameGrade = '';
    this.percentFrom = '';
    this.percentTo = '';
    this.description = '';
    this.sortGrades();
  }
  switchEditMode() {
    this.editMode = !this.editMode;
  }
  // markTaskAsDone(task: Task) {
  //   task.done = true;
  //   this.sortTasks();
  // }
  delateGrades(task: Grading) {
    this.grades = this.grades.filter(e => e !== task);
    this.sortGrades();
  }
  private sortGrades() {
    this.grades.sort((a: Grading, b: Grading) =>
      a.name === b.name ? 0 : a.name ? 1 : -1
    );
  }
}

