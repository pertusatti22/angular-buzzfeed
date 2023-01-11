import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json'

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

  hero: boolean = true
  constructor() { }

  ngOnInit(): void {
    if(quizz_questions) {
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length


    }
  }

  playerChoise(value: string) {
    this.answers.push(value)
    this.nextStep()
  }

  async nextStep() {
    this.questionIndex+=1
    if(this.questionMaxIndex>this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex]
    } else {
      const finalAnswer: string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results]
      if(this.answerSelected === "Você muito provavelmente seria um super vilão!") {
        this.hero = false
      }
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, i, arr) => {
      if(
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
      ) {
          return previous
      } else {
        return current
      }
    })
    return result
  }

  restart() {
    window.location.reload();
  }
}
