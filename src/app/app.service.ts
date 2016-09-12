import { Injectable } from '@angular/core';

import { Books } from './books';
import { BOOKS } from './books-data';

@Injectable()
export class BookService {
    getBooks(): Promise<Books[]> {
        return Promise.resolve(BOOKS);
    }

    getBooksTimeOut(): Promise<Books[]> {
    return new Promise<Books[]>(resolve =>
        setTimeout(resolve, 2000))
        .then(() => this.getBooks());
    }
}