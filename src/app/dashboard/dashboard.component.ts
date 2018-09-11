import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service'
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedInuser="Logged in user"
  _data : any=[];

  constructor(private auth: AuthorizationService,private router: Router,private http: Http,) {
    console.log("Within Dashboard");
  }

  ngOnInit() {
 
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

        var apiUrl = environment.apiUrlForRead;
        console.log("url log"+apiUrl);

        this.http.get(apiUrl, { headers: headers })
          .subscribe(
          response => {           
            that._data = response.json().Items;
            console.log(that._data);
          },
          error => {
            console.log(error);
          }
        );
      });
    });


  }

}
