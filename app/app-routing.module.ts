import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import {ScoreComponent} from './score/score.component';
import { MusicComponent } from './music/music.component';
import { JournalismComponent } from './journalism/journalism.component';
import { CaseComponent } from './case/case.component';
import { MotivateComponent } from './motivate/motivate.component';
import { KeyComponent } from './key/key.component';
import { MentalComponent } from './mental/mental.component';
import { SelfComponent } from './self/self.component';
import { ReciteComponent } from './recite/recite.component';
import { ExpertsComponent } from './experts/experts.component';

const routes: Routes = [ 
{path:'Test',component:TestComponent},
{path:'Home',component:HomeComponent},
{path:'Music', component:MusicComponent},
{path:'journalism', component:JournalismComponent},
{path:'Case', component:CaseComponent},
{path:'Motivate', component:MotivateComponent},
{path:"Contact", component:ContactComponent},
{path:'About', component:AboutComponent},
{path:'Key', component:KeyComponent},
{path:'Mental', component:MentalComponent},
{path:'Recite',component:ReciteComponent},
{path:'Experts',component:ExpertsComponent},
{path:'', redirectTo:'/Home', pathMatch:'full'},
{path:'Score/:id', component:ScoreComponent}];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
