import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface IItems {
  name: string;
  image: string;
}

interface IFooter {
  text: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        style({
          height: '0'
        }),
        animate('.4s ease', style({
          height: '*'
        }))
      ]),
      transition(':leave', [
        animate('.4s ease', style({
          height: '0'
        }))
      ])
    ])
  ]
})
export class MenuComponent {
  @Input() show: boolean = false;
  @Input() selectedMenu: 'games' | 'sports' | null = null;

  games: IItems[] = [
    { name: 'Diablo® II ressurected', image: 'assets/game_icons/diablo_3.png' },
    { name: 'Overwatch® 2', image: 'assets/game_icons/overwatch_2.png' },
    { name: 'World of Warcraft®', image: 'assets/game_icons/wow.png' },
    { name: 'Hearthstone®', image: 'assets/game_icons/hearthstone.png' },
    { name: 'Heroes of the storm®', image: 'assets/game_icons/heroes_of_the_storm.png' },
    { name: 'Warcraft® III Reforged', image: 'assets/game_icons/warcraft.png' },
    { name: 'Diablo® IV', image: 'assets/game_icons/diablo_iv.png' },
    { name: 'Diablo® Immortal', image: 'assets/game_icons/diablo_immortal.png' },
    { name: 'Diablo® III', image: 'assets/game_icons/diablo_3.png' },
    { name: 'StarCraft® II', image: 'assets/game_icons/starcraft_2.png' },
    { name: 'StarCraft® Remastered', image: 'assets/game_icons/starcraft.png' },
    { name: 'Arcade da Blizzard®', image: 'assets/game_icons/arcade.png' }
  ];

  sports: IItems[] = [
    { name: 'Hearthstone® masters', image: 'assets/game_icons/hearthstone_masters.png' },
    { name: 'Campeonato Mundial de Arena WoW®', image: 'assets/game_icons/wow_championship.png' },
    { name: 'StarCraft® II WCS', image: 'assets/game_icons/star_craft.png' },
    { name: 'Copa Mundial de Overwatch®', image: 'assets/game_icons/overwatch_world.png' },
    { name: 'Liga de Overwatch®', image: 'assets/game_icons/overwatch_league.png' }
  ];

  footerGames: IFooter[] = [
    { text: 'Ver todos jogos', image: 'assets/icons/cubes-blue.svg' },
    { text: 'Aplicativo Battle.net', image: 'assets/icons/icon-logo.svg' },
    { text: 'Downloads', image: 'assets/icons/icon-downloads.svg' },
    { text: 'Fóruns dos jogos', image: 'assets/icons/icon-chat.svg' }
  ];

  footerSports: IFooter[] = [
    { text: 'Torneios da comunidade', image: 'assets/icons/trophy.svg' }
  ];

  get items() {
    return this.selectedMenu === 'games' ? this.games : this.sports;
  }

  get footerLink() {
    return this.selectedMenu === 'games' ? this.footerGames : this.footerSports;
  }
}
