import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../authorization.service'

@Component({
  selector: 'app-formexample',
  templateUrl: './formexample.component.html',
  styleUrls: ['./formexample.component.css']
})
export class FormexampleComponent implements OnInit {
  confirmCode: boolean = false;
  contactMethods: any;
  error: string = "";

  constructor(private auth:AuthorizationService) {
    console.log("from cons");
   }

  ngOnInit() {

    console.log("from ng");
    
    this.contactMethods = [{ id: 1, name: 'Email' },
    { id: 2, name: 'Fax' }
    ];
  }


  log(x) {
    //  console.log(x);
  }

  submit(x) {
    //print whole form

    console.log(x);

    // capture the value
    console.log(x.value.contact.comment);
 
  //  this.auth.register("mnhmilu@gmail.com","test123");

   // console.log("Registration Done");

   this.auth.register("mnhmilu@gmail.com","Test123Dfdf#dd").subscribe(
    (data) => {        
      this.confirmCode = true;
      console.log("Registration Done");
    },
    (err) => {
      console.log(err);
      this.error = "Registration Error has occurred";
    }
  );

 
  }

}
