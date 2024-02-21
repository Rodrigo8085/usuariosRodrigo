import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/app/services/Users';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public user: Users) {
  }
}
