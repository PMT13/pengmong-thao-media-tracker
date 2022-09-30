import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaListComponent } from './media-list/media-list.component';
import {HomeComponentComponent} from "./home-component/home-component.component";

const routes: Routes = [
  { path: 'media', component: MediaListComponent},
  {path:'',component: HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
