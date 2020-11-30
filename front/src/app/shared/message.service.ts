import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Message} from '../shared/message.model';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/message';
  readonly baseURL1 = 'http://localhost:3000/outbox';
  sendmdg( msg: Message) {
    return this.http.post(this.baseURL, msg);
  }
  viewmsg(email: string) {
    return this.http.get(this.baseURL + `/${email}`);
  }
  outbox(email: string) {
    return this.http.get(this.baseURL1 + `/${email}`);
  }
}
