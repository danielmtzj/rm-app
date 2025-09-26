import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../services/favorites.service';
import { NoResultsComponent } from '../../shared/components/no-results';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule, NoResultsComponent],
  templateUrl: './favorite-list.html',
  styleUrl: './favorite-list.css'
})
export class FavoriteList {
  private service = inject(FavoritesService);
  protected readonly favorites = signal<any[]>([]);

  constructor() {
    this.service.getFavorites('User1').then(data => this.favorites.set(data));
  }
}
