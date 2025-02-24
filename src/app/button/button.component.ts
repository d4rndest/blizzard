import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() style?: 'primary' | 'outline' = 'primary';
  @Input() icon: boolean = false;
  @Input() css?: { [key: string]: string };

  @ContentChild('icon', { static: false }) iconTemplate?: TemplateRef<any>;

  get classes() {
    return {
      'primary': this.style === 'primary',
      'outline': this.style === 'outline'
    };
  }

  get styles() {
    return this.css; 
  }
}
