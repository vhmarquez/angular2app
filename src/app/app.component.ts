import { Component, OnInit } from '@angular/core';

import { Books } from './books';
import { BookService } from './app.service';

export class Cart {
    title: string;
    price: number;
}

const CART: Cart[] = [];

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

  // Timeout
  getBooksTimeOut(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  ngOnInit(): void {
    this.getBooksTimeOut();
  }

  isCartActive: boolean = false;
  cart = CART;
  total: number = 0;

  addToCart(book: Cart): void {
      this.total += book.price;

      this.cart.push({
         title: book.title,
         price: book.price
      })
  }

  removeFromCart(book: Cart): void {
    this.total -= book.price;

    let index = this.cart.indexOf(book);
    this.cart.splice(index, 1)
  }

}
