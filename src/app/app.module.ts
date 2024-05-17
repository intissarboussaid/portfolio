import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailServiceService } from './email-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
    ServiceComponent,
    AboutMeComponent,
    TestComponent,
    SkillsComponent,
    // HttpClientModule
    // ReactiveFormsModule

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    IvyCarouselModule,    
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    EmailServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
