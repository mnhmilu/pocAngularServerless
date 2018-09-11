import { Injectable } from '@angular/core';
import {AuthenticationDetails, CognitoUser, CognitoUserPool,CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs/Observable';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { environment } from '../environments/environment';



const poolData = {
  UserPoolId:environment.UserPoolId ,//'ap-south-1_KoBLw4eiO', // Your user pool id here
  ClientId:environment.ClientId //'326ldbu009muperjd2g81h7919' // Your client id here  
};

const userPool = new CognitoUserPool(poolData);

@Injectable()
export class AuthorizationService {
  cognitoUser: any;
  redirectUrl: string;
  constructor() { }

  register(email, password) {

    const attributeList = [];

    attributeList.push(new CognitoUserAttribute({
      Name: 'email',
      Value: email
    }));


    return Observable.create(observer => {
      userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          console.log("signUp error", err);
          observer.error(err);
        }
        console.log("nahid debug "+result)
        this.cognitoUser = result.user;
        console.log("signUp success", result);
        observer.next(result);
        observer.complete();
      });
    });

  }

  confirmAuthCode(code) {
    const user = {
      Username : this.cognitoUser.username,
      Pool : userPool
    };
    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
          console.log(err);
          observer.error(err);
        }
        console.log("confirmAuthCode() success", result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  signIn(email, password) { 

    const authenticationData = {
      Username : email,
      Password : password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username : email,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);
    
    return Observable.create(observer => {

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          
          //console.log(result);
          observer.next(result);
          observer.complete();
        },
        onFailure: function(err) {
          console.log(err);
          observer.error(err);
        },
      });
    });
  }

  canActivate() {
    console.log("AlwaysAuthGuard");
    return this.isLoggedIn();
  }

  isLoggedIn() {    
    return userPool.getCurrentUser() != null;
  }

  getAuthenticatedUser() {
    // gets the current user from the local storage
    return userPool.getCurrentUser();
  }

  logOut() {
    this.getAuthenticatedUser().signOut();
    this.cognitoUser = null;
  }
}
