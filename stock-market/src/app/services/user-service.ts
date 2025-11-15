import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { UserStoreService } from './user-store-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('/api/user/login', {
      username: username,
      password: password
    }).pipe(tap((resp: any) => {
      this.userStore.token = resp.token;
    }));
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post('/api/user/register', {
      username: username,
      password: password
    });
  }
}
