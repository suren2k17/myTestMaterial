import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatToolbar, MatToolbarModule, 
  MatTabsModule,
  MatPaginatorModule,
  MatInputModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatGridListModule,
  MatSortModule
  
  } from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { PlayerComponent } from './player/player.component';
import { Component } from '@angular/core/src/metadata/directives';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    HttpModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule, 
    MatSidenavModule,  
    MatListModule, 
    MatOptionModule,   
    MatSelectModule,
    MatGridListModule,
    MatSortModule,
    RouterModule.forRoot([
      {path: 'player', component: PlayerComponent},
      {path: 'team', component: TeamComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: HomeComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
 }
