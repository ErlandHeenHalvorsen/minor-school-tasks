class book {
  #title;
  #author;
  #isbn;
  #available;
  constructor(title, author, isbn) {
    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
    this.#available = true;
  }
  getInfo() {
    return `${this.#title} by ${this.#author}, ISBN: ${this.#isbn}`;
  }

  borrowBook() {
    if (this.#available) {
      this.#available = false;
      console.log(`you have borrowed ${this.#title}`);
    } else {
      console.log(`sorry, ${this.#title} is not available`);
    }
  }

  returnBook() {
    if (!this.#available) {
      this.#available = true;
      console.log(`you have returned ${this.#title}`);
    } else {
      console.log(`${this.#title} is already available`);
    }
  }

  isAvailable() {
    return this.#available;
  }
}

class eBook extends book {
  #fileSize;
  constructor(title, author, isbn, fileSize) {
    super(title, author, isbn);
    this.#fileSize = fileSize;
  }
  getInfo() {
    return `${super.getInfo()}, fileSize: ${this.#fileSize} MB`;
  }
}

class printedBook extends book {
  #numPages;
  constructor(title, author, isbn, numPages) {
    super(title, author, isbn);
    this.#numPages = numPages;
  }
  getInfo() {
    return `${super.getInfo()}, Pages: ${this.#numPages} `;
  }
}

class LibraryMember {
  #name;
  #memberId;
  #borrowedBooks;
  constructor(name, memberId) {
    this.#name = name;
    this.#memberId = memberId;
    this.borrowedBook = [];
  }
  borrowedBooks(book) {
    if (book.isAvailable()) {
      book.borrowBook();
      this.#borrowedBooks.push(book);
    } else {
      console.log(`${book.getInfo()} is not available`);
    }
  }

  returnBook(book) {
    const index = this.#borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.#borrowedBooks.splice(index, 1);
      book.returnBook();
    } else {
      console.log(`${book.getInfo()} is not borrowed`);
    }
  }

  getBorrowedBooks() {
    return this.#borrowedBooks.map((book) => book.getTitle());
  }
  getMemberId() {
    return this.#memberId;
  }
}

class Library {
  #books;
  #members;
  constructor() {
    this.#books = [];
    this.#members = [];
  }
  addBook(book) {
    this.#books.push(book);
  }
  addMember(member) {
    this.#members.push(member);
  }
  findBookByTitle(title) {
    return this.#books.find((book) => book.getTitle() === title);
  }
  findMemberById(id) {
    return this.#members.find((member) => member.getMemberId() === id);
  }

  borrowBook(title, memberId) {
    const member = this.findMemberById(memberId);
    const book = this.findBookByTitle(title);
    if (book && member) {
      member.borrowBook(book);
    } else {
      console.log("Book or member not found");
    }
  }

  returnBook(title, memberId) {
    const member = this.findMemberById(member);
    const book = this.findBookByTitle(title);
    if (book && member) {
      member.returnBook(book);
    } else {
      console.log("Book or member not found");
    }
  }

  getAvailableBooks() {
    return this.#books
      .filter((book) => book.isAvailable())
      .map((book) => book.getTitle());
  }
}
