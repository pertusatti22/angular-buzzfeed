import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  title: string = ""
  questions: any
  questionSelected: any

  questionIndex: number = 0
  questionMaxIndex: number = 0

  answers:string[] = []

  answerSelected: string = ""

  finished: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
