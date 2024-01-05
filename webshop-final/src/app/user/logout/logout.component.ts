import { Component } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private userStore: UserStoreService){
    userStore.token="";
  }
}
