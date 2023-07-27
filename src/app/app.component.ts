import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
    <footer class="font-light text-xs py-12 select-none">Copyright 2023 - <a href="https://twitter.com/alcaidio">Timothy Alcaide</a></footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
