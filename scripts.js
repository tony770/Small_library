const myLibrary = [];

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#bookForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.querySelector('#bookTitle').value;
        const author = document.querySelector('#authorName').value;
        const pageNum = document.querySelector('#pageNum').value;
        const read = document.querySelector('#read').checked;

        const newBook = new Book(title, author, pageNum, read);
        myLibrary.push(newBook);
        displayBook();
        form.reset();
    })
})

function displayBook() {
    const card_container = document.querySelector('.card_container');
    card_container.innerHTML = '';

    myLibrary.forEach((book) => {
        const newDiv = document.createElement('div');
        newDiv.className = 'card';
        
        const newAuthor = document.createElement('h2');
        newAuthor.innerText = `${book.author}`;
        newDiv.appendChild(newAuthor);

        const newTitle = document.createElement('p');
        newTitle.innerText = `${book.title}`;
        newDiv.appendChild(newTitle);

        const newPageNum = document.createElement('p');
        newPageNum.innerText = `${book.pageNum}`;
        newDiv.appendChild(newPageNum);

        const newRead = document.createElement('p');
        newRead.innerText = book.read ? 'Status: Read' : 'Status : Not Read';
        newDiv.appendChild(newRead);

        card_container.appendChild(newDiv);
    });

}

