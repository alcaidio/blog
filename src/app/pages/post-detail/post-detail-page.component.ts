import {
  ChangeDetectionStrategy,
  Component,
  SecurityContext,
  inject,
} from "@angular/core";
import { AsyncPipe, CommonModule, DOCUMENT, NgStyle } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import {
  Observable,
  animationFrameScheduler,
  distinctUntilChanged,
  fromEvent,
  map,
  observeOn,
} from "rxjs";
import snarkdown from "snarkdown";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgStyle],
  templateUrl: "./post-detail-page.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailPageComponent {
  private route = inject(ActivatedRoute);
  private dom = inject(DomSanitizer);
  private sanitizeHtml = (html: string) =>
    this.dom.sanitize(SecurityContext.HTML, html);

  private document = inject(DOCUMENT);

  content$ = this.route.data.pipe(
    map((data) => data["content"]),
    map((md) => this.sanitizeHtml(snarkdown(md)))
  );

  progress$: Observable<string> = fromEvent(this.document, "scroll").pipe(
    observeOn(animationFrameScheduler),
    map(() => {
      const { scrollTop, scrollHeight, clientHeight } =
        this.document.documentElement;

      const winScroll = this.document.body.scrollTop || scrollTop;
      const height = (scrollHeight - clientHeight);

      return {winScroll, height}
    }),
    map(({winScroll, height}) => Math.round((winScroll / height) * 100) + '%'),
    distinctUntilChanged()
  );

}
