import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { ButtonComponent } from '../button/button.component';

interface IGames {
  id: string;
  background: string;
  heading: string;
  text: string;
  buttonText: string;
  logo: string;
  trailer: {
    gif: string;
    thumbnail: string;
  };
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, SliderComponent, ButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
  index: number = 0;
  private timer: any;

  parallaxX: number = 0;
  parallaxY: number = 0;

  games: IGames[] = [
    {
      id: 'diablo',
      background: 'assets/banners/diablo-bg.png',
      heading: 'Retorna à escuridão com o game Diablo IV',
      text: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
      buttonText: 'Jogue agora',
      logo: 'assets/banners/diablo-logo.png',
      trailer: {
        gif: 'assets/banners/diablo-animation.gif',
        thumbnail: 'assets/banners/diablo-animation-cover.png',
      }
    },
    {
      id: 'hearthstone',
      background: 'assets/banners/hearthstone-bg.png',
      heading: 'Novo pacote de expansão de Hearthstone',
      text: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
      buttonText: 'Reserve agora na pré-venda',
      logo: 'assets/banners/hearthstone-logo.png',
      trailer: {
        gif: 'assets/banners/hearthstone-animation.gif',
        thumbnail: 'assets/banners/hearthstone-animation-cover.png',
      }
    },
    {
      id: 'wow',
      background: 'assets/banners/wow-bg.png',
      heading: 'Desbrave as Terras Sombrias em Shadowlands!',
      text: 'O que jaz além do mundo que você conhece?',
      buttonText: 'Reserve na pré-venda',
      logo: 'assets/banners/wow-logo.png',
      trailer: {
        gif: 'assets/banners/wow-animation.gif',
        thumbnail: 'assets/banners/wow-animation-cover.png',
      }
    },
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  get gameId(): string {
    return this.games[this.index].id;
  }

  onGameSelect(gameId: string) {
    this.index = this.games.findIndex((game) => game.id === gameId);
    console.log("Novo index: ", this.index);
    this.clearAutoSlide();
    this.startAutoSlide();
  }

  private startAutoSlide(): void {
    this.timer = setInterval(() => {
      this.index = (this.index + 1) % this.games.length;
    }, 5000);
  }

  private clearAutoSlide(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    this.parallaxX = (clientX / innerWidth - 0.5) * 10;
    this.parallaxY = (clientY / innerHeight - 0.5) * 10;
  }
}