import { Component, OnInit } from '@angular/core';
import { GradesService } from './service/grades.service';
import { Grading } from './models/grading';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  grades: Grading[];
  editMode = false;
  nameGrade = '';
  percentFrom = '';
  percentTo = '';
  description = '';
  config: { [key: string]: string } = null;
 
  constructor(private http: GradesService) {
  };

  ngOnInit() {
    this.http.getGrades().subscribe(gradesList => {
      this.grades = gradesList;
    });
    setTimeout(() => {
      this.config = {
        title: 'Grading list',
        footer: ' © Grading list, All rights reserved.',
        date: new Date().toDateString()
      };
    }, 500);

  };
  // getGrades() {
  //   const grades = this.http.getGrades().subscribe();
  //   return console.log(grades);
  // }
 
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
    this.grades;
    this.nameGrade = '';
    this.percentFrom = '';
    this.percentTo = '';
    this.description = '';
    // this.sortGrades();
  }
  switchEditMode() {
    this.editMode = !this.editMode;
  }
  // // markTaskAsDone(task: Task) {
  // //   task.done = true;
  // //   this.sortTasks();
  // // }
  delateGrades(task: Grading) {
    // this.grades = this.grades.filter(e => e !== task);
    // this.sortGrades();
  }
  // private sortGrades() {
  //   this.grades.sort((a: Grading, b: Grading) =>
  //     a.name === b.name ? 0 : a.name ? 1 : -1
  //   );
  // }
}

