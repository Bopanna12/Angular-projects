import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HighlightDirective } from './highlight.directive';
import { NeedDataService } from './need-data.service';
import { DesignComponent } from './design/design.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DesignComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
