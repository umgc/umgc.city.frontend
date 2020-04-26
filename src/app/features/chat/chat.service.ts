import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export class Message{
  profile_pic: string;

  constructor(
    public content: string, 
    public sentBy: string, 
    public placeholder : boolean = false,
    public action: string = null,) 
  {
    //This define the message profile pic
    this.profile_pic = (sentBy=='user') ? "/assets/img/user.png": "/assets/img/agent_avatar.png";
  }
  
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
   
   if(msg.content.trim() != ''){
     console.log("the msg content is: " + msg);
      console.log('botMessage:', msg);
      console.log('botMessage:', msg.content);
      console.log('botMessage:', msg.sentBy);
      this.conversation.next([msg]);
      if (msg.sentBy == 'bot') {
        //this.synthVoice(msg.content); //Uncomment for voice response from the  bot and enable text to speech
      }
      if (msg.sentBy == 'user') {
        //this.synthVoice(msg.content); //Uncomment to add a voice response from the user and enable text to speech
      }
   }else{
    console.log("Can't accept an empty message from the user or the bot");
   }
  }
  //Sends and receive messages via DialogFlow
  converse(msg: string) {
    
    const userMessage = new Message(msg, 'user');
     if(userMessage.content === ''){
       console.log("Query should not be empty");
    }else{
      this.update(userMessage);
      return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
    }
   
  }
  // Add text to speech to bot response and user input
  synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
  } 
  
  
}

