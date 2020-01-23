import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { NgbModalComponent} from './ngb-modal/ngb-modal.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { NgmodalProfileComponent } from './ngmodal-profile/ngmodal-profile.component';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    NgbModalComponent,
    NgmodalProfileComponent,
    ExperienceModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule
  ],
  entryComponents: [NgbModalComponent, NgmodalProfileComponent, ExperienceModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
