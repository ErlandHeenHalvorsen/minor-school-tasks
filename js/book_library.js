class book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.available = true;
  }
  getInfo() {
    return `${this.title} by ${this.author}, ISBN: ${this.isbn}`;
    }

  borrowBook() {
      if (this.available) {
        this.available = false;
  }
}
