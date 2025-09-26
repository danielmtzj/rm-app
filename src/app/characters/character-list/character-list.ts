import { Component, inject, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../services/characters.service';
import { FavoritesService } from '../../favorites/services/favorites.service';
import { NoResultsComponent } from '../../shared/components/no-results';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NoResultsComponent],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList {
  private service = inject(CharactersService);
  private favoritesService = inject(FavoritesService);

  protected readonly characters = signal<any[]>([]);
  protected readonly filter = signal('');
  protected readonly favoritesList = signal<any[]>([]);

  protected readonly filteredCharacters = computed(() =>
    this.characters().filter(c =>
      c.name.toLowerCase().includes(this.filter().toLowerCase())
    )
  );

  constructor() {
    this.service.getCharacters().then(data => this.characters.set(data));
    this.loadFavorites();
  }

  private async loadFavorites() {
    const favs = await this.favoritesService.getFavorites('User1');
    this.favoritesList.set(favs);
  }

  isFavorite(charId: number): boolean {
    return this.favoritesList().some(f => f.id === charId);
  }

  async toggleFavorite(char: any) {
    if (this.isFavorite(char.id)) {
      await this.favoritesService.removeFromFavorites('User1', char.id);
    } else {
      await this.favoritesService.addToFavorites('User1', char);
    }
    this.loadFavorites();
  }
}
