import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Author, Book, Genre, User } from "../model/model";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: "root"
})
export class AuthorService extends HttpService<Author> {
    getUrl(): string {
        return "http://localhost:3000/authors";
    }
}

export interface AuthObject {
    status: "success" | "failed";
    error?:string;
}

@Injectable({
    providedIn: "root"
})
export class GenreService extends HttpService<Genre> {
    getUrl(): string {
        return "http://localhost:3000/genres";
    }
}

@Injectable({
    providedIn: "root"
})
export class BookService extends HttpService<Book> {
    getUrl(): string {
        return "http://localhost:3000/books";
    }
}

const USER_TOKEN = "user-token";

@Injectable({
    providedIn: "root"
})
export class UserService extends HttpService<User> {
    public onAuthenticationCompleted:Subject<AuthObject> = new Subject();
    auth!:User | null;

    getUrl(): string {
        return "http://localhost:3000/users";
    }

    isAuthenticated():boolean {
        return localStorage.getItem(USER_TOKEN) != null;
    }

    authenticate(user:User) {
        this.filter({
            email: user.email
        }).subscribe(data => {
            if (data && data.length > 0) {
                let _user = data[0] as User;

                if (user.password == _user.password) {
                    localStorage.setItem(USER_TOKEN, user.email);
                    this.onAuthenticationCompleted.next({
                        status: "success"
                    });
                } else {
                   this.onAuthenticationCompleted.next({
                    status: "failed",
                    error: "Invalid password."
                   });
                   localStorage.removeItem(USER_TOKEN);
                }

                return;
            }
            
            this.onAuthenticationCompleted.next({
                status: "failed",
                error: "Invalid user."
            });
            localStorage.removeItem(USER_TOKEN);
        });
    }

    logout():void {
        localStorage.removeItem(USER_TOKEN);
    }
}