import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesComponent } from './courses/courses.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'aboutus', component : AboutusComponent},
  {path:'courses', component : CoursesComponent},
  {path:'news', component : NewsComponent},
  {path:'contact', component : ContactComponent},
  {path:'teachers', component : TeachersComponent},
  {path:'faq', component : FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
