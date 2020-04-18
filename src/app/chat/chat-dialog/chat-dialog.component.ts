import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef} from '@angular/core';
import { ChatService, Message} from '../../chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})

export class ChatDialogComponent implements OnInit {

  

  // Random session ID 
  sessionId = Math.random().toString(36).slice(-5);

  //Getting the current date and time
  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  uiSystem = environment.uiwatsonibm;
  
  messages: Observable<Message[]>;
  formValue: string;
  constructor(private chat : ChatService) {
    window['uiSystem'] = this.uiSystem;
  }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
     .pipe(
           scan((acc, val) => acc.concat(val))
        );
    
  }
  //Sending messages
  sendMessage(){
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
  
}

