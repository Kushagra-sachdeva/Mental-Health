import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContentService } from "../Services/content.service"; 
import {Content} from '../Services/Content';
import { HttpClient,HttpHeaders } from '@angular/common/http';  
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms'; 
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';   
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-journalism',
  templateUrl: './journalism.component.html',
  styleUrls: ['./journalism.component.css']
})
export class JournalismComponent implements OnInit {
  name = 'ng2-ckeditor';    
  ckeConfig: any;    
  mycontent: string = '';    
  log: string = '';  
  res: any; 
  contentArray: Content[] = [];

  constructor(private contentservice:ContentService,private router: Router,private http: HttpClient) {     }
  
  contentdata = new Content();

  ngOnInit(): void {
    //  this.Getcontent()    
    this.ckeConfig = {    
      allowedContent: false,    
      extraPlugins: 'divarea',    
      forcePasteAsPlainText: true,  
      uiColor : '#66AB16',
      width :1000,
      height: 700
    };    
  }

  onSubmit()    
  {  
    this.contentdata.Id=1;
    console.log(this.contentdata);
    const blob = new Blob([JSON.stringify(this.contentdata)], {type : 'application/json'});
    saveAs(blob,'Content.json');
  }

  Getcontent()    
  {    
    this.contentservice.Getcontent().subscribe((data:any)=>{    
      this.res=data;    
      console.log(this.res);    
    })    
  }  
}