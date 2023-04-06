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

    this.http.post<post>('http://localhost:8080/sigup', postdata).subscribe(
      (responsedata) => {
        console.log(responsedata);
      },
      (err) => {
        console.log(err);
        if (err.error.error) {
          this.error.next(err.error.error);
        } else if (err.error) {
          this.error.next(err.error.message);
        } else {
          this.error.next('Unknown Error');
        }
      }
    );
  }

  login(email: string, password: string) {}
}
