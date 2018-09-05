import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  confirmCode: boolean = false;
  error: string = "";

  constructor(private auth: AuthorizationService,private router: Router) {
    console.log("from cons");
  }

  ngOnInit() {

    console.log("from ng");

  }


  log(x) {
    //  console.log(x);
  }

  submit(x) {
    //print whole form

    console.log(x);

    // capture the value
    console.log(x.value.signup.email);

    //  this.auth.register("mnhmilu@gmail.com","test123");

    // console.log("Registration Done");

    this.auth.register(x.value.signup.email, x.value.signup.password).subscribe(
      (data) => {
        this.confirmCode = true;
        console.log("Registration Done");
        this.router.navigate(['/signin']);
      },
      (err) => {
        console.log(err);
        this.error = "Registration Error has occurred";
      }
    );


  }

}
