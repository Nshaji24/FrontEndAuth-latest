import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { GroupsComponent} from './groups/groups.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {CatchListComponent} from './components/catch-list/catch-list.component';
import {CatchDetailsComponent} from './components/catch-details/catch-details.component';
import {AddCatchComponent} from './components/add-catch/add-catch.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'catches', component: CatchListComponent },
  { path: 'catches/:id', component: CatchDetailsComponent },
  { path: 'add', component: AddCatchComponent },

  { path: 'user', component: BoardUserComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }