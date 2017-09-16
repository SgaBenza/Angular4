import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/tempdriven', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'posts', component: PostsComponent},
  { path: 'tempdriven', component: TemplateDrivenFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

