import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  standalone: true,
  imports: [CommonModule],
  template: ` <p>p{{ content$ | async}}</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailPageComponent {
  private route = inject(ActivatedRoute);

  content$ = this.route.data;
}
