import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PommeListeComponent } from './composants/pomme-liste/pomme-liste.component';
import { PommeDetailComponent } from './composants/pomme-detail/pomme-detail.component';
import { PommeService } from './services/pomme.service';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    PommeListeComponent,
    PommeDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PommeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
