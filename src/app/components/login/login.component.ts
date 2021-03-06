import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core'

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: string;
  email: string;
  password: string;
  @Output() switch = new EventEmitter<any>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const data = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.authService.login(data)
        .then(() => {
          this.router.navigate(['/profile']);
        })
        .catch((err) => {
          this.error = err.error.code || 'unexpected'; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

  handleSwitch() {
    this.switch.emit(event);
  }
}
