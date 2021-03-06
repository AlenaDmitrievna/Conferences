import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from 'node_modules/@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {ErrorInterceptorProvider } from './_services/error.interceptor';
import {TokenHttpRequestInterceptor } from './_services/token-http-request.interceptor';
import { ConferencesComponent } from './conferences/conferences.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConferenceDetailComponent } from './conference-detail/conference-detail.component';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';
import { LectureComponent } from './lecture/lecture.component';
import { ForumComponent } from './forum/forum.component';
import { FilesComponent } from './files/files.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      ConferencesComponent,
      ConferenceDetailComponent,
      AddConferenceComponent,
      AddSectionComponent,
      AddLectureComponent,
      LectureComponent,
      ForumComponent,
      FilesComponent,
      ScheduleComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      ReactiveFormsModule,
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: TokenHttpRequestInterceptor,
         multi: true
       }
      
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
