import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message: string = "";

  constructor() { }
  
  public getMessage(): string{
    return this.message;
  }
  
  public setMessage(m: string){
    this.message = m;
  }
}
