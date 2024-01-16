import { Component } from '@angular/core';
import { faFacebook, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myLinkedInIcon = faLinkedinIn;
  myFacebookIcon = faFacebook;
  myGoogleIcon = faGoogle;
}
