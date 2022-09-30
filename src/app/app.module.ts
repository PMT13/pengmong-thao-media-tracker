import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaContentComponent } from './media-content/media-content.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddMediaComponent } from './add-media/add-media.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaListComponent,
    MediaContentComponent,
    NavBarComponent,
    AddMediaComponent,
    HomeComponentComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
