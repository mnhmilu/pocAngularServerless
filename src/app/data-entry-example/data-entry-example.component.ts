import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service'
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-data-entry-example',
  templateUrl: './data-entry-example.component.html',
  styleUrls: ['./data-entry-example.component.css']
})
export class DataEntryExampleComponent implements OnInit {

  
  loggedInuser="Logged in user"
  _data : any=[];

  constructor(private auth: AuthorizationService,private router: Router,private http: Http) { }

  ngOnInit() {

 

  }

  log(x) {
    console.log(x);
  }

  submit(formdata)
  {

    console.log("posting ...data")
     console.log(formdata);

    var authenticatedUser = this.auth.getAuthenticatedUser();
    if (authenticatedUser == null) {
      return;
    }
    authenticatedUser.getSession( (err, session) => {
      if (err) {
        console.log(err);
        return;
      }
      const token = session.getIdToken().getJwtToken();      
      const headers = new Headers();
      headers.append('authorization', token);     
      var that = this;
      this.auth.getAuthenticatedUser().getSession((err, session) => {
        if (err) {
          console.log(err);
          return;
        }
        const token = session.getIdToken().getJwtToken();        
        const headers = new Headers();
        headers.append('authorization', token);        

  

        console.log("form data message"+formdata.value.item.message)


       var postdata = {
         "message":formdata.value.item.message,
         "productName":formdata.value.item.productName
       }
  

          var apiUrl = environment.apiUrlForPost;


          console.log("url log"+apiUrl);

          return this.http.post(apiUrl,postdata,{ headers: headers})
          .subscribe(
            response => {           
              that._data = response.json();
              console.log(that._data);
              this.router.navigate(['/dashboard']);
            },
            error => {
              console.log(error);
            }
          );


      });
    });


  }


}
