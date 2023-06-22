import { NgModule } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCommonModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavigationComponent } from './navigation/navigation.component';
import {MatMenuModule} from '@angular/material/menu';
import { NgOptimizedImage } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card'
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { IosComponent } from './course/ios/ios.component';
import { AndroidComponent } from './course/android/android.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      CourseComponent,
      ContactComponent,
      NavigationComponent,
      LoginComponent,
      SideBarComponent,
      FooterComponent,
      NotfoundPageComponent,
      IosComponent,
      AndroidComponent
   ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatToolbarModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    NgbTooltip,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
