import { Component, OnInit } from '@angular/core';
import {SaveService} from  '../Services/save.service';
@Component({
  selector: 'app-gratitute',
  templateUrl: './gratitute.component.html',
  styleUrls: ['./gratitute.component.css']
})
export class GratituteComponent implements OnInit {

  constructor(private service:SaveService) { }
  one:string ="";
  two:string="";
  three:string="";
  four:string="";
  five:string="";
  ngOnInit(): void {
  }
  clear(){
    this.one=""
    this.two=""
    this.three=""
    this.four=""
    this.five=""
    
  }
  save(){
    if(this.one.length>0 ||this.two.length>0 ||this.three.length>0||this.four.length>0||this.five.length>0)
    {
    this.service.save();
    }
    else
    {
      alert('Please Add something to Save...');
    }
  }
  share(){
    if(this.one.length>0 ||this.two.length>0 ||this.three.length>0||this.four.length>0||this.five.length>0)
    {
    this.service.Share();
    }
    else
    {
      alert('Please Add something to Share....');
    }
   
  }
}
