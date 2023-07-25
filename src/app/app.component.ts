import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
    <footer class="font-light text-xs max-w-xl py-12">Copyright 2023 - Timothy Alcaide</footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
