import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { ApiAiClient } from "api-ai-javascript/es6/ApiAiClient";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

export class Message {
  constructor(public content: string, public sentBy: string) {}
}
@Injectable({
  providedIn: "root",
})
export class ChatService {
  readonly token = "a22e33de886a49a299353446e2c7dca3";

  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);
  uiSystem = environment.uiwatsonibm;

  constructor() {
    window["uiSystem"] = this.uiSystem;
  }

  //Add message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
  //Sends and receive messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, "user");

    this.update(userMessage);
    return this.client.textRequest(msg).then((res) => {
      const speech = res.result.fulfillment.speech;
      const botMessage = new Message(speech, "bot");
      this.update(botMessage);
    });
  }
}
