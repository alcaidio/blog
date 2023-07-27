import { Routes } from "@angular/router";
import { PostDetailPageComponent } from "./pages/post-detail/post-detail-page.component";
import { postDetailsResolver } from "./services/post-details.resolver";
import { NotFoundPageComponent } from "./pages/not-found-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";

export const ROUTES = {
    404: "not-found"
}

export const routes: Routes = [
  { path: "", loadComponent: () => HomePageComponent },
  {
    path: "blog/:slug",
    loadComponent: () => PostDetailPageComponent,
    resolve: { content: postDetailsResolver },
  },
  { path: ROUTES[404], loadComponent: () => NotFoundPageComponent },
  { path: "**", pathMatch: "full", redirectTo: "" },
  // TODO create a 404 page
];
