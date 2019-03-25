import { Routes } from '@angular/router';
import { PommeListeComponent } from './composants/pomme-liste/pomme-liste.component';
import { PommeDetailComponent } from './composants/pomme-detail/pomme-detail.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'pommes', pathMatch: 'full'},
    {path: 'pommes', component: PommeListeComponent},
    {path: 'pommes/:page', component: PommeListeComponent},
    {path: 'pomme/:id', component: PommeDetailComponent}
];
