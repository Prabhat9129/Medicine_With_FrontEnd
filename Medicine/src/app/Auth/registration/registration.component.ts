import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterServieService } from 'src/app/service/register-servie.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  @ViewChild('f') registerForm: NgForm;
  registerData: any = { name: null, email: null, number: null, password: null };
  error: any = '';
  valError = false;
  private subError: Subscription;
  constructor(
    private http: HttpClient,
    private service: RegisterServieService
  ) {}

  ngOnInit(): void {
    this.subError = this.service.error.subscribe((errmessage) => {
      this.error = errmessage;
    });
  }

  onSubmit() {
    // console.log(this.registerForm);

    this.registerData.name = this.registerForm.form.value.name;
    this.registerData.email = this.registerForm.form.value.email;
    this.registerData.number = this.registerForm.form.value.number;
    this.registerData.password = this.registerForm.form.value.password;
    const { name, email, number, password } = this.registerData;

    this.service.register({ name, email, number, password });
  }
  ngOnDestroy() {
    this.subError.unsubscribe();
  }
}
