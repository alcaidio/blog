import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1 class="text-5xl font-bold underline">
      Hello world!
    </h1>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
