import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddUserComponent } from "../add-user/add-user.component";
import { TypicodeService } from '../services/typicode.service';
import { Users } from '../interfaces/users';

@Component({
  selector: 'edit-form',
  templateUrl: '../common-templates/user-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent extends AddUserComponent {
  userObj: Users;

  constructor(public router: Router, public typicode: TypicodeService){
    super(router, typicode);
  }

 ngOnInit(){
   switch(this.router.url){
      case '/edituser': {
        this.heading = this.templateTitles.edit;
        this.btnName = this.templateTitles.btn.edit;
        break;
      }
    }

    this.userObj = JSON.parse(sessionStorage.getItem("users"));
    if(this.userObj){
      let {name, email, phone } = this.userObj[0];
      this.formGroup();
      this.userForm.reset({ name, email, phone });
    }
 }
}