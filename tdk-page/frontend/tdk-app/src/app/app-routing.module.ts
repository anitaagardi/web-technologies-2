import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorMenuConferenceListParticipantsComponent } from './administrator-menu-conference-list-participants/administrator-menu-conference-list-participants.component';
import { UserAppylingTdkComponent } from './user-appyling-tdk/user-appyling-tdk.component';


const routes: Routes = [
  { path: "conference/list/participants", component: AdministratorMenuConferenceListParticipantsComponent },
  { path: "user/applyingTDK", component: UserAppylingTdkComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
  RoutingComponent = [AdministratorMenuConferenceListParticipantsComponent, UserAppylingTdkComponent];
