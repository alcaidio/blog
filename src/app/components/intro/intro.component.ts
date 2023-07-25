import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './intro.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent {}
