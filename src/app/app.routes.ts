import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { AuthorComponent } from './component/author/author.component';
import { BookComponent } from './component/book/book.component';
import { GenreComponent } from './component/genre/genre.component';
import { authGuard } from './shared/util/route.guards';

export const routes: Routes = [    
    { path: "login", component: LoginComponent }, 
    { path: "books",   component: BookComponent, canActivate: [authGuard] },
    { path: "authors",   component: AuthorComponent, canActivate: [authGuard] },
    { path: "genres",   component: GenreComponent, canActivate: [authGuard] },
    { path: "", component: BookComponent, canActivate: [authGuard] }, 
    { path: "**", redirectTo: "/" }, 
];
