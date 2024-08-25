import { Component, OnInit } from '@angular/core';
import {QuestionService} from  '../Services/question.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  srNum:number=1;
  que ='';
  count="1";
  sum =0; 
  i=1;
  id:number = 0;
  
  constructor(private questionService: QuestionService, private router:Router){
    this.srNum = this.questionService.getRandomIntBetween(1,24);
    this.que = this.questionService.getQuestions(this.srNum);
  } 
      
 
  ngOnInit(){

  }
  btnClick(){
    if(this.i<=10)
    {
      this.srNum = this.questionService.getRandomIntBetween(1,24);
      this.que = this.questionService.getQuestions(this.srNum);
      this.sum = this.sum +  parseInt(this.count);
      this.i=this.i+1;
    }
    if(this.i>10)
    {
      this.id = this.sum;
      this.router.navigate(['/Score',this.id]);
    }
  }
  disable():boolean
  {
      return this.i>10;
  }

}
