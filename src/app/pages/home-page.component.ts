import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { AsyncPipe, NgFor } from "@angular/common";
import { Post, PostService } from "../services/post.service";
import { PostComponent } from "../components/post/post.component";
import { IntroComponent } from "../components/intro/intro.component";

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
