import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddUserComponent } from "../add-user/add-user.component";

@Component({
  selector: 'edit-form',
  templateUrl: '../common-templates/user-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent extends AddUserComponent {
  addUser(f) {
    console.log(f.value);
    this.form.reset();
  }
}