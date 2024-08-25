import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { animation, trigger, style, transition, state, animate } from '@angular/animations';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  
})

export class ScoreComponent implements OnInit {
  score: any;
  id:number = 0;
  currentState = 'initial';
  isVisible = false;
  content:string="Click to see Advice";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   if (this.id  <= 15)
    {
        this.content = "You may find it hard to relax, which can make you irritable and emotional. Feeling this way causes you to be tense and makes it hard to be flexible when meeting daily challenges. There are certain situations that can cause you to feel very anxious. When you are anxious you may notice physical symptoms—heavy breathing, a pounding heart, or sweatiness in your palms.";

    }
    else if (this.id  > 15 && this.id  <= 35)
    {
      this.content= "It seems like you are juggling between stressful and calm situitation. Nevertheless, you will overcome it . Though you’re often able to manage stressful experiences, sometimes you may find it hard to relax. This can make you irritable, emotional, and in some situations, it can make you feel anxious.Occasionally, you may notice that you feel physical symptoms of this anxiety—heavy breathing, a pounding heart, or sweatiness in your palms.";
    }
    else if (this.id  > 35)
    {
      this.content = "Congrats!You can control your stress level and overcome the obstacles in your life.You find it easy to relax, which allows you to be calm and engage positively with daily challenges.When certain situations make you anxious, you show good control over your physical reaction.k Your ability to cope with life’s stresses has positive benefits for both the body and the mind.";
    }
  
  }
  
}
