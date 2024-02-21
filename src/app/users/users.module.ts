import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MainComponent } from './main/main.component';
import { MatCardModule } from '@angular/material/card';
import { SingleComponent } from './single/single.component';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    MainComponent,
    SingleComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class UsersModule { }
