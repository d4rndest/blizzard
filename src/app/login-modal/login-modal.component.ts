import { Component, Input, Output, EventEmitter, OnChanges,  OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent implements OnChanges, OnDestroy {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      if (this.isOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  }

  ngOnDestroy(): void {
    document.body.classList.remove('no-scroll');
  }

  close() {
    this.closeModal.emit();
  }
}
