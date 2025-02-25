import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { GamesService } from './games/games.service';
import { GamesComponent } from './games/games.component';
import { DownloadComponent } from './download/download.component';
import { IGames } from './games/games.model';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, GamesComponent, DownloadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  games: IGames[] = [];
  filter: string | null = null;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.loadGames();
    AOS.init({ duration: 500, easing: 'ease-in-out' });
  }

  loadGames(): void {
    this.gamesService.getGames().subscribe({
      next: (games) => {
        this.games = games;
      },
      error: (err) => {
        console.error('erro ao buscar jogos:', err);
      }
    });
  }

  setFilter(filter: string | null): void {
    this.filter = filter;
  }
}
