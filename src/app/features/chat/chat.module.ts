import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChatService } from "./chat.service";
import { ChatDialogComponent } from "./chat-dialog/chat-dialog.component";
import { ChatComponent } from "./chat.component";

@NgModule({
  declarations: [ChatDialogComponent, ChatComponent],
  imports: [CommonModule, FormsModule],
  exports: [ChatDialogComponent],
  providers: [ChatService],
})
export class ChatModule {}
