import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GetUsersResolverService } from '../services/users/get-users-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
        dataUsers: GetUsersResolverService
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
