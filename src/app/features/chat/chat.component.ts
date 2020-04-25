import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { scan } from "rxjs/operators";
import { Message, ChatService } from "./chat.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-chat-component",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ChatComponent implements OnInit {
  title = "Chat Demo Landing";
  // Random session ID
  sessionId = Math.random().toString(36).slice(-5);

  //Getting the current date and time
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();

  messages: Observable<Message[]>;
  formValue: string;
  constructor(private chat: ChatService) {}

  ngOnInit() {
    (window as any)
      .loadWatsonAssistantChat({
        integrationID: "0cc1e6af-455e-4d6b-8468-b8f7a0d9b3fb", // The ID of this integration.
        region: "us-east", // The region your integration is hosted in.
      })
      .then(function (instance) {
        if ((window as any).uiSystem) {
          instance.render();
        }
      });
  }
}
