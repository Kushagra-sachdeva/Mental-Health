import { Component, OnInit } from '@angular/core';
import {Content} from '../Services/Content';
import {SaveService} from  '../Services/save.service';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  name = 'ng2-ckeditor';    
  ckeConfig: any;    
  mycontent: string | null = null;
  log: string | null = null;
  res: any; 
  contentdata=new Content();
  contentArray: Content[] | null = null;
  constructor(private service:SaveService ) { }

  ngOnInit(): void {
    this.ckeConfig = {    
      allowedContent: false,    
      extraPlugins: 'divarea',    
      forcePasteAsPlainText: true  ,
      uiColor : '#66AB16',
      width :1000,
      height: 700
    };    
  }
  onSubmit()    
  {  
    if(this.contentdata.Content.length>0 || this.contentdata.Title.length>0)
    this.service.save();
    else
    alert("Please Add something to Save");
  } 
  
  share()
  {
    if(this.contentdata.Content.length>0 || this.contentdata.Title.length>0)
    this.service.Share();
    else
    alert("Please Add something to Share");
  }
  clear(){
    this.contentdata.Content='';
    this.contentdata.Title='';

  }


}
