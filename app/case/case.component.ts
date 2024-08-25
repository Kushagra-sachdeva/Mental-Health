import { Component, OnInit } from '@angular/core';
import { stories } from "../Services/stories";
import { Story } from "../Services/Story";

@Component({
  selector: 'app-story-case', 
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class StoryCaseComponent implements OnInit {
  storyContent: string = '';
  imageUrl: string | undefined;
  page: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.storyContent = stories[this.page].Content;
    this.imageUrl = stories[this.page].imageurl;
    console.log(this.storyContent);
  }

  btnSubmit(): void {
    this.page = this.page === 0 ? 1 : 0;
    this.storyContent = stories[this.page].Content;
    this.imageUrl = stories[this.page].imageurl;

    const btnNext = document.getElementById("btnNext");
    if (btnNext) {
      btnNext.innerHTML = btnNext.innerHTML === "Previous" ? "Next" : "Previous";
    }
    console.log(this.storyContent);
  }
}