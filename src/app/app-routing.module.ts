import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'about/:id',component:DetailsComponent},
{path:'contact/:id',component:DetailsComponent},
{path:'**',component:AboutComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
