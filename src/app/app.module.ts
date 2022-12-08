import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { EntryComponent } from './entry/entry.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"add",
    component:EntryComponent
  },{
    path:"search",
    component:SearchComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"edit",
    component:EditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserLoginComponent,
    EntryComponent,
    SearchComponent,
    SignupComponent,
    ViewComponent,
    NavBarComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
