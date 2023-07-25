import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs';
import { ROUTES } from '../app.routes';

export interface Post {
	title: string, 
	slug: string, 
	resume: string 
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http = inject(HttpClient)
  private router = inject(Router)

  posts$ = this.http.get<{posts: Post[]}>('/assets/posts.json').pipe(map(res => res.posts))

  getPostDetails(slug: string) {
    return this.http.get(`/assets/posts/${slug}.md`, { responseType: 'text'}).pipe(catchError(() => this.router.navigateByUrl(ROUTES[404])))
  }
}
