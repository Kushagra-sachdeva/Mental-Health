import { Component, OnInit , Input} from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  imageUrls : string[]=[];
  @Input()Home:HomeComponent = new HomeComponent();
  constructor() { }

  ngOnInit(): void {
    this.imageUrls.push( "/assets/images/screen1.jpg");
    this.imageUrls.push( "/assets/images/screen2.jpg");
  }

}
