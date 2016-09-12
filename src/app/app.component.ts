import { Component, OnInit } from '@angular/core';

import { Books } from './books';
import { BookService } from './app.service';

export class Cart {
    title: string;
    price: number;
}

const CART: Cart[] = [];

console.log(CART);

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.min.css'],
  providers: [BookService]
})

export class AppComponent {
  title = 'Book Store';
  books: Books[];

  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  cart = CART;
  total: number = 0;

  onSelect(book: Cart): void {

      this.total += book.price;

      this.cart.push({
         title: book.title,
         price: book.price
      })

  }
}
