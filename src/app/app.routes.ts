import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page.component";
import { PostDetailPageComponent } from "./pages/post-detail-page.component";

export const routes: Routes = [
  { path: "", loadComponent: () => HomePageComponent },
  { path: "blog/:id", loadComponent: () => PostDetailPageComponent },
  { path: "**", pathMatch: "full", redirectTo: "" },
];
