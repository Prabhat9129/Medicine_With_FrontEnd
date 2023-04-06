import { Component, OnInit } from '@angular/core';
// import { RegisterServieService } from './service/register-servie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Medicine';
  // errMessage = '';
  // constructor(private service: RegisterServieService) {}
  // ngOnInit(): void {
  //   this.service.error.subscribe((errmessage) => {
  //     this.errMessage = errmessage;
  //   });

  // console.log(this.errMessage);
  // }
}
