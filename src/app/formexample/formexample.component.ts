import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formexample',
  templateUrl: './formexample.component.html',
  styleUrls: ['./formexample.component.css']
})
export class FormexampleComponent implements OnInit {

  contactMethods: any;
  constructor() {
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
  }

}
