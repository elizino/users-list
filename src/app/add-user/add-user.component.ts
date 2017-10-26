import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TypicodeService } from '../services/typicode.service';
import { Users } from '../interfaces/users';

@Component({
  selector: 'add-user',
  templateUrl: '../common-templates/user-form.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: Users[] = [];
  router: Router;
  heading: string;
  btnName: string;
  id: number = 10;

  templateTitles = {
    edit:"Edit User",
    create: "Create User",
    btn: {
      add: "Add User",
      edit: "Edit User"
    }
  }

  constructor(private _router: Router, private typicode: TypicodeService){
    this.router = _router;
  }

  ngOnInit(){
    switch(this.router.url){
      case '/adduser':{
        this.heading = this.templateTitles.create;
        this.btnName = this.templateTitles.btn.add;
        break;
      }
      case '/edituser': {
        this.heading = this.templateTitles.edit;
        this.btnName = this.templateTitles.btn.edit;
      }
    }
  }

  form = new FormGroup({
    'name': new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]{1,20}$')]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'phone': new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$')])
  });

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  addUser(user: any) {
    let data = Object.assign({}, user.value, {id: this.id++});
    this.users.push(data);
    sessionStorage.setItem('users', JSON.stringify(this.users))
		  this.typicode.addUser(user.value)
      .subscribe((status)=>{
          console.log("Successfully Added.", status.statusText)
	      });
    this.form.reset();
  }
}


