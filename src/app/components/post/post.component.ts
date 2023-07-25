import {
  ChangeDetectionStrategy,
  Component,
  Input
} from "@angular/core";
import { NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Post } from "src/app/services/post.service";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: "./post.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input({ required: true }) post: Post | null = null;
  // TODO (no priority) put slug optional and create a slug based on the title
}
