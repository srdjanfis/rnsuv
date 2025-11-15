import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrl: './login.css',
    imports: [FormsModule, AsyncPipe]
})
export class Login {
  public username: string = '';
  public password: string = '';

  messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();
  constructor(private userService: UserService,
              private router: Router
  ) { }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe({
        next: (resp: { msg: string; }) => {
        this.messageSubject.next(resp.msg);
        this.router.navigate(['/stocks/list']);
      }, 
        error: (err: { error: { msg: string; }; }) => {
          this.messageSubject.next(err.error.msg);
      }
    });
  }
}
