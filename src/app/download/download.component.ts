import { Component, WritableSignal, signal, computed, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

interface NavigatorUA {
  userAgentData?: {
    getHighEntropyValues: (keys: string[]) => Promise<{ platform: string }>;
  };
}

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent implements OnInit {
  detectedOS: WritableSignal<string> = signal('Unknown OS');

  ngOnInit(): void {
    this.detectOS();
  }

  detectOS(): void {
    const nav = navigator as NavigatorUA;
    if (nav.userAgentData) {
      nav.userAgentData.getHighEntropyValues(['platform']).then((data) => {
        this.detectedOS.set(data.platform);
      });
    } else {
      const userAgent = navigator.userAgent;
      if (userAgent.includes('Win')) this.detectedOS.set('Windows');
      if (userAgent.includes('Mac')) this.detectedOS.set('MacOS');
      if (userAgent.includes('X11') || userAgent.includes('Linux')) this.detectedOS.set('Linux');
    }
  }

  osIcon = computed(() => {
    const os = this.detectedOS();
    return os === 'Windows' ? 'assets/icons/windows.svg' :
           os === 'MacOS' ? 'assets/icons/macos.svg' :
           os === 'Linux' ? 'assets/icons/linux.svg' :
           '';
  });
}

