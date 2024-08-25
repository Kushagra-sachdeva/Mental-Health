import { Component, OnInit } from '@angular/core';
import {SaveService} from  '../Services/save.service';
@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {

  constructor(private service:SaveService ) { }
  one:string ="";
  two:string="";
  three:string="";
  four:string="";
  five:string="";
  six:string="";
  seven:string="";
  eight:string="";
  nine:string="";
  ten:string="";
  ele:string="";
  twe:string="";
  thir:string="";
  for:string="";
  fif:string="";
  sixt:string="";
  sev:string="";
  ngOnInit(): void {
   
    
  }
  clear()
  {
  this.one="";
  this.two="";
  this.three="";
  this.four="";
  this.five="";
  this.six="";
  this.seven="";
  this.eight="";
  this.nine="";
  this.ten="";
  this.ele="";
  this.twe="";
  this.thir="";
  this.for="";
  this.fif="";
  this.sixt="";
  this.sev="";
  }
  submit()
  {

    if(this.one.length>0 ||this.two.length>0 ||this.three.length>0||this.four.length>0||this.five.length>0|| this.six.length>0 ||this.seven.length>0 ||this.eight.length>0||this.nine.length>0||this.ten.length>0 ||this.ele.length>0 ||this.twe.length>0 ||this.thir.length>0||this.for.length>0||this.fif.length>0||this.sixt.length>0 ||this.sev.length>0 )
    {
    this.service.save();
    }
    else
    {
      alert('Please Add something to Save...');
    }
  }
  share()
  {
    if(this.one.length>0 ||this.two.length>0 ||this.three.length>0||this.four.length>0||this.five.length>0|| this.six.length>0 ||this.seven.length>0 ||this.eight.length>0||this.nine.length>0||this.ten.length>0 ||this.ele.length>0 ||this.twe.length>0 ||this.thir.length>0||this.for.length>0||this.fif.length>0||this.sixt.length>0 ||this.sev.length>0 )
    {
    this.service.Share();
    }
    else
    {
      alert('Please Add something to Save...');
    }
  }

}
