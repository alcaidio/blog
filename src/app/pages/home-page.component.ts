import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { AsyncPipe, NgFor } from "@angular/common";
import { PostComponent } from "../components/post.component";
import { Post, PostService } from "../services/post.service";

@Component({
  standalone: true,
  imports: [NgFor, AsyncPipe, PostComponent],
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
