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
  }
  switchEditMode() {
    this.editMode = !this.editMode;
  }
  
  delateGrades(grade: Grading) {
    // this.grades = this.grades.filter(e => e !== task);
    // this.sortGrades();

  }

}

