import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { AsyncPipe, NgFor } from "@angular/common";
import { PostComponent } from "src/app/components/post/post.component";
import { IntroComponent } from "src/app/components/intro/intro.component";
import { Post, PostService } from "src/app/services/post.service";

@Component({
  standalone: true,
  imports: [NgFor, AsyncPipe, PostComponent, IntroComponent],
  templateUrl: "./home-page.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private postService = inject(PostService)

  posts$ = this.postService.posts$

  trackBySlug(_: number, post: Post) {
    return post.slug
  }
}
