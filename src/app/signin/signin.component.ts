import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  emailVerificationMessage: boolean = false;

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
    console.log(x.value.signin.email);
    
    this.auth.signIn(x.value.signin.email, x.value.signin.password).subscribe((data) => {
      this.router.navigateByUrl('/dashboard');
    }, (err)=> {
      this.emailVerificationMessage = true;
    });   
  }


  
}
