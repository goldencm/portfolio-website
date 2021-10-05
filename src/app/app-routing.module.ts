import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { HireMeComponent } from './hire-me/hire-me.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'about-me', component: AboutMeComponent},
  { path: '', component: HomeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'hire-me', component: HireMeComponent},
  { path: '**', component: PageNotFoundComponent },

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
