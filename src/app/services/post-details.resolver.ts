import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { PostService } from "./post.service";

export const postDetailsResolver: ResolveFn<string | boolean> = (
  route: ActivatedRouteSnapshot
) => inject(PostService).getPostDetails(route.paramMap.get("slug")!);
