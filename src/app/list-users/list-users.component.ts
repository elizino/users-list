import { Component, OnInit } from '@angular/core';
import { TypicodeService } from '../services/typicode.service';

import { Users } from '../interfaces/users';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: Users[];

  constructor(private typicode: TypicodeService) { }

  ngOnInit() {
   this.typicode.getUsers().subscribe((data)=> {
     this.users = data;
    });
  }

	deleteUser(user: Users) {
    for(let i = 0; i < this.users.length; i++ ){
      if(this.users[i].id == user.id){
        this.users.splice(i, 1);
      }
    }
		this.typicode.deleteUser(user)
      .subscribe((status)=>{
        console.log("Successfully Deleted.", status.statusText)
	  });
  }
}