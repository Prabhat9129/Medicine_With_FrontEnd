import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from '../post.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterServieService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}
  register({ name, email, number, password }: post) {
    const postdata: post = {
      name: name,
      email: email,
      number: number,
      password: password,
    };

    this.http.post<post>('http://localhost:8080/signup', postdata).subscribe(
      (responsedata) => {
        console.log(responsedata);
      },
      (error) => {
        this.error.next(error.message);
      }
    );
  }

  login(email: string, password: string) {}
}
