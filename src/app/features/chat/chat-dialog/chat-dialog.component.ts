import { Component, OnInit } from "@angular/core";
import { ChatService, Message } from "../chat.service";
import { Observable } from "rxjs";
import { scan } from "rxjs/operators";

@Component({
  selector: "app-chat-dialog",
  templateUrl: "./chat-dialog.component.html",
  styleUrls: ["./chat-dialog.component.css"],
})
export class ChatDialogComponent implements OnInit {
  uiSystem: any;
  //Getting the current date and time
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();

  messages: Observable<Message[]>;
  formValue: string;
  constructor(private chat: ChatService) {}

  ngOnInit() {
    //appends to array after each new message is added to source
    this.messages = this.chat.conversation
      .asObservable()
      .pipe(scan((acc, val) => acc.concat(val)));
  }
  //Sending messages
  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = "";
  }
}
