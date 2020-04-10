import { Component, OnInit} from '@angular/core';
import { NavComponent} from "../nav/nav.component";
import { FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  title = 'Sign In';

  constructor() { }

  ngOnInit() {
  }
}
