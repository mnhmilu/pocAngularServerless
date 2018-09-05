import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service'
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedInuser="Logged in user"

  constructor(private auth: AuthorizationService,private router: Router) {
    console.log("Within Dashboard");
  }

  ngOnInit() {
  }

}
