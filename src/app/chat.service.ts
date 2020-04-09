import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export class Message{
  constructor(public content: string, public sentBy: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.umgcBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {}
  
 //Add message to source
  update(msg: Message){
    this.conversation.next([msg]);
  }
  //Sends and receive messages via DialogFlow
  converse(msg: string) {
 
    const userMessage = new Message(msg, 'user');
     
    this.update(userMessage);
    return this.client.textRequest(msg)
    .then(res => {
      const speech = res.result.fulfillment.speech;
      const botMessage = new Message(speech, 'bot');
      this.update(botMessage);
    });
  }/* 
  talk(){
   this.client.textRequest('what is eup?')
    .then(res => console.log(res));
  } */
  
  
}

