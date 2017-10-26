import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/catch';

import { Users } from '../interfaces/users';

@Injectable()
export class TypicodeService {
  users: Users[] = [];
  private url = 'http://jsonplaceholder.typicode.com/users/';

  constructor(private http:Http) {
  }

getUsers(){
  let users = JSON.parse(sessionStorage.getItem("users"));
    
  if (users) {
     return Observable.from(users)
     .concatMap((user) => {
         console.log(user);
        return this.http.get(this.url).map(res => {
           let val = res.json();
           return val.concat(user);
        });
     })
      .catch(this.handleError);
   }
  
}

/*
if (user) {
      let users: Users[] = user;
      console.log("GETTING DATA FROM SESSION STORAGE")
      return Observable.of(users);
    } else {
      return this.http.get(this.url)
          .map( res => {
          sessionStorage.setItem("users", JSON.stringify(res.json()));           
          return res.json()
        }).catch(this.handleError);
    }
  }
*/


   deleteUser(user:any) {
	  return this.http.delete(`${this.url}/${user.id}`);
   }

   addUser(user:any) {
	  return this.http.post(this.url, user);
   }

    private handleError(error:any){
        console.error(error.message);
        return Observable.throw("Server Error");
    }
}

