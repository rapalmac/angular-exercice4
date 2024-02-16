import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, catchError } from "rxjs";

export abstract class HttpService<Type> {
    http:HttpClient = inject(HttpClient);

    abstract getUrl():string;
    
    add(t:Type):Observable<void> {
        return this.http.post<void>(this.getUrl(), t).pipe(
            catchError(error => {
                throw new Error("Unable to save, failed to comunicate with the server.", error);
            })
        );
    }

    update(id:string, t:Type):Observable<Type> {
        return this.http.put<Type>(`${this.getUrl()}/${id}`, t).pipe(
            catchError(error => {
                throw new Error("Unable to save, failed to comunicate with the server.", error);
            })
        );
    }

    listAll():Observable<Type[]> {
        return this.http.get<Type[]>(this.getUrl()).pipe(
            catchError(error => {
                throw new Error("Unable to retrieve data from the server.", error);
            })
        );
    }

    get(id:string):Observable<Type> {
        return this.http.get<Type>(`${this.getUrl()}/${id}`).pipe(
            catchError(error => {
                throw new Error("Unable to retrieve data from the server.", error);
            })
        )
    }

    filter(params:any):Observable<Type[]> {
        let url = `${this.getUrl()}?` +
            Object.keys(params).map(key => `${key}=${params[key]}`).join("&");

        return this.http.get<Type[]>(url).pipe(
            catchError(error => {
                throw new Error("Unable to retrieve data from the server.", error);
            })
        )
    }
}