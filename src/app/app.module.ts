import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent} from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { TypicodeService } from './services/typicode.service';
import { EditFormComponent } from './edit-user/edit-form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUsersComponent,
    EditFormComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'adduser', 
        component: AddUserComponent 
      },
      { 
        path: 'edituser:id', 
        component: EditFormComponent
      },
      { 
        path: 'edituser', 
        component: EditFormComponent
      },
      { 
        path: 'listusers', 
        component: ListUsersComponent
      },
      { 
        path: '**', 
        component: HomeComponent 
      }
    ])
  ],
  providers: [TypicodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
