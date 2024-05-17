import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutMeComponent } from './about-me/about-me.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
