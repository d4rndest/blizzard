import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

interface IGames {
  id: string;
  image: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  host: {
    'class': 'container' 
  }
})
export class SliderComponent {
  @Input() gameId: string = '';
  @Output() gameSelected = new EventEmitter<string>();

  games: IGames[] = [
    { id: 'diablo', image: 'assets/game_icons/diablo_iv.png' },
    { id: 'hearthstone', image: 'assets/game_icons/hearthstone.png' },
    { id: 'wow', image: 'assets/game_icons/wow.png' },
    { id: 'diablo_immortal', image: 'assets/game_icons/diablo_immortal.png' },
    { id: 'starcraft', image: 'assets/game_icons/starcraft_2.png' },
  ];

  selectGame(id: string) {
    this.gameSelected.emit(id);
  }
}
