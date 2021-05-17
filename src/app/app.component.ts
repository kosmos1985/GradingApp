import { Component } from '@angular/core';
import { Task } from './task';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';
  config: { [key: string]: string } = null;
  tasks: Task[] = [
    {
      name: 'siłownia',
      deadline: '2020-11-09',
      done: false,
    },
    {
      name: 'mycie czegokolwiek',
      deadline: '2020-07-01',
      done: true,
    },
    {
      name: 'jedzenie krewetek',
      deadline: '2020-03-03',
      done: false,
    },

  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Grading list',
        footer: ' © Grading list, All rights reserved.',
        date: new Date().toDateString()
      };
    }, 500);
    this.sortTasks();
  }
  clearTasks() {
    this.tasks = [];
  }


  createTasks() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }
  switchEditMode() {
    this.editMode = !this.editMode;
  }
  // markTaskAsDone(task: Task) {
  //   task.done = true;
  //   this.sortTasks();
  // }
  delateTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }
  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
}

