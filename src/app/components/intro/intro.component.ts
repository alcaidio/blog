import { ChangeDetectionStrategy, Component } from '@angular/core';
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
