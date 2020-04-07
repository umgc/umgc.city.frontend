import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
} from "@angular/core";
import { ChatService, Message } from "../../chat.service";
import { Observable } from "rxjs";
import { scan } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-chat-dialog",
  templateUrl: "./chat-dialog.component.html",
  styleUrls: ["./chat-dialog.component.css"],
})
export class ChatDialogComponent implements OnInit {
  // Random session ID
  sessionId = Math.random().toString(36).slice(-5);

  messages: Observable<Message[]>;
  formValue: string;
  constructor(private chat: ChatService) {}

  ngOnInit() {
    //this.chat.talk();
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
