export interface User {
    email:string;
    password:string;
}

export interface Author {
    id:string;
    fullname:string;
    country:string;
}

export interface Genre {
    id:string;
    name:string;
    description:string;
}

export interface Book {
    id:string;
    name:string;
    author:Author;
    genre:Genre;
    year:string
}