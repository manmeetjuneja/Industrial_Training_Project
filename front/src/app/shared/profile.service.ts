import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Profile} from '../shared/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/profile';
  insertprofile( pro: Profile) {
    return this.http.post(this.baseURL, pro);
  }
  updatepro( pro: Profile) {
    return this.http.put(this.baseURL + `/${pro._id}`, pro);
  }
  getpro(email: string) {
    return this.http.get(this.baseURL + `/${email}`);
  }

}
