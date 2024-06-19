const myLibrary = [];

function Book(author, title, pageNum, read) {
    this.author = author;
    this.title = title;
    this.pageNum = pageNum;
    this.read = read;
}

function addBookToLibrary(author, title, pageNum, read) {
    const newBook = new Book(author, title, pageNum, read);
    myLibrary.push(newBook);
}