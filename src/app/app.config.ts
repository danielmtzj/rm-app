import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'characters', pathMatch: 'full' },
      {
        path: 'characters',
        loadComponent: () =>
          import('../app/characters/character-list/character-list').then(m => m.CharacterList)
      },
      {
        path: 'characters/:id',
        loadComponent: () =>
          import('../app/characters/character-detail/character-detail').then(m => m.CharacterDetail)
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('../app/favorites/favorite-list/favorite-list').then(m => m.FavoriteList)
      }
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ]
};