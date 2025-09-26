import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css'
})
export class CharacterDetail {
  private route = inject(ActivatedRoute);
  private service = inject(CharactersService);
  protected readonly character = signal<any | null>(null);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCharacter(id).then(data => this.character.set(data));
  }
}
