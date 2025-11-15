import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.html',
    styleUrl: './register.css',
    imports: [FormsModule]
})
export class Register {
  public username: string = '';
  public password: string = '';

  public message: string = '';
  constructor(private userService: UserService,
              private router: Router
  ) { }

  register() {
    this.userService.register(this.username, this.password)
      .subscribe({
        next: (resp) => {
        this.message = resp.msg;
        this.router.navigate(['/login']);
      }, error: (err) => {
        this.message = err.error.msg;
      }
    });
  }
}
