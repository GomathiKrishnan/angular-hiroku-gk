import { Component } from '@angular/core';
import { JSQuestions } from '../assets/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-hiroku-gk';
  JSQuestions = JSQuestions;
  CorrectAnswer = 0;
  hour: any;
  minute: any;
  interval: any;
  second = 0;
  millisecond: any;
  isReadytoStart = false;
  isSubmitted = false;
  questionAnswers = {};
  constructor() {}
  checkAnswers(event: any, data: any, ques_index: any) {
    if (event.value == data.answer) {
      this.questionAnswers = {
        ...this.questionAnswers,
        [ques_index]: 'Correct',
      };
    } else {
      this.questionAnswers = { ...this.questionAnswers, [ques_index]: 'Wrong' };
    }
    let CorrectAnswer = Object.keys(this.questionAnswers).filter((value) => {
      return this.questionAnswers[value] === 'Correct';
    });
    this.CorrectAnswer = CorrectAnswer.length;
  }
  start() {
    this.interval = setInterval(() => {
      this.timer();
    }, 1000);
  }

  timer() {
    this.second = this.second + 1;
  }

  onSubmit() {
    clearInterval(this.interval);
    this.isReadytoStart = false;
    this.isSubmitted = true;
    console.log('second', this.second);
  }
  onStart() {
    this.isReadytoStart = true;
    this.start();
  }
  onTimerChallenge() {
    console.log('second', this.second);
  }
}
