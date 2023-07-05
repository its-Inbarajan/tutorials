import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { IosComponent } from './course/ios/ios.component';
import { AndroidComponent } from './course/android/android.component';
import { LoginComponent } from './login/login.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { ReadingAreaComponent } from './readingArea/readingArea.component';


const routes: Routes = [
  {
    path : '' , component : HomeComponent
  },
  {
    path : 'home' , component : HomeComponent
  },
  {
    path : "course", component : CourseComponent
  },
  {
    path : "contact", component : ContactComponent
  },
  {
    path : "ios" , component : IosComponent
  },
  {
    path : "android" , component : AndroidComponent
  },
  {
    path : 'login' , component : LoginComponent
  },
  {
    path : 'readingArea' , component : ReadingAreaComponent
  },
  {
    path : '**' ,pathMatch: 'full', component : NotfoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
