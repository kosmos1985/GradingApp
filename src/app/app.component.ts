import { Component, OnDestroy, OnInit } from '@angular/core';
import { GradesService } from './service/grades.service';
import { Grading } from './models/grading';
import { Observable, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  grades: Grading[];
  editMode = false;
  nameGrade = '';
  percentFrom = '';
  percentTo = '';
  description = '';
  config: { [key: string]: string } = null;
  private subscriptions = new Subscription();
 
  constructor(private http: GradesService) {
  };

  ngOnInit() {
    const sub = this.http.getGrades().subscribe(gradesList => {
      this.grades = gradesList;
      console.log(this.grades);
    }, error => console.error(error),
      ()=>console.log('Complite')
    );
    this.subscriptions.add(sub);
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

  


  createGrades(formRef) {
    const newGrade:Partial<Grading>= {
      name: this.nameGrade,
      percent_from: this.percentFrom,
      percent_to: this.percentTo,
      grade_description: this.description,
    };
    console.log(formRef.value);
    this.http.postGrades(newGrade).subscribe();
  }
  switchEditMode() {
    this.editMode = !this.editMode;
  }
  
  removeGrades(id :number) {
    this.http.deleteGrades(id).subscribe();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}

