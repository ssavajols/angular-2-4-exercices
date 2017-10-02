import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'characters', component: CharactersListComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
