import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/services/Users';
import { GetUsersService } from 'src/app/services/users/get-users.service';
import { SingleComponent } from '../single/single.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users: any;
  
  constructor (
    private gus: GetUsersService,
    public dialog: MatDialog
    ) {}
    
  ngOnInit(): void {
    this.gus.obtenerUsers().subscribe(
      data => {
        this.users = data;
      }
    )
  }

  routeSingle(data: Users): void {
    this.dialog.open(SingleComponent, {
      data
    });

  }

}

