import { Component, OnInit} from '@angular/core';
import {ScreenComponent} from '../screen/screen.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrls : string[]=[];
  constructor() { }
  
  ngOnInit(): void {
   
  }

}
