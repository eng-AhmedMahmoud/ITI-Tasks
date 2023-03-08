// apply factory pattern to a class` constructor
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  getBookInfo() {
    return `${this.title} by ${this.author} with ISBN ${this.isbn}`;
  }
}

class BookFactory {
  constructor() {
    this.books = [];
  }
  createBook(title, author, isbn) {
    const book = new Book(title, author, isbn);
    this.books.push(book);
    return book;
  }
  getBooks() {
    return this.books;
  }
}

const bookFactory = new BookFactory();
const book1 = bookFactory.createBook("Harry Potter", "JK Rowling", "AB123");
const book2 = bookFactory.createBook(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "CD456"
);
console.log(book1.getBookInfo());
console.log(book2.getBookInfo());