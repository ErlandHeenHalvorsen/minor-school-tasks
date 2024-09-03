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
      console.log(`you have borrowed ${this.title}`);
    } else {
      console.log(`sorry, ${this.title} is not available`);
    }
  }

  returnBook() {
    if (!this.available) {
      this.available = true;
      console.log(`you have returned ${this.title}`);
    } else {
      console.log(`${this.title} is already available`);
    }
  }

  isAvailable() {
    return this.available;
  }
}
