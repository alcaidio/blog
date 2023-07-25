import {
  ChangeDetectionStrategy,
  Component,
  SecurityContext,
  inject,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import snarkdown from 'snarkdown';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `<section class="p-3 sm:p-5">
    <article [innerHTML]="content$ | async" class="prose"></article>
  </section>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailPageComponent {
  private route = inject(ActivatedRoute);
  private dom = inject(DomSanitizer)
  private sanitizeHtml = (html: string) => this.dom.sanitize(SecurityContext.HTML, html)

  content$ = this.route.data.pipe(map(data => data['content']), map(md => this.sanitizeHtml(snarkdown(md))));
}
