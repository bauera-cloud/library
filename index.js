let myLibrary = [
    {
        title: "The Dark Forest",
        author: "Liu Cixin",
        cover: 'assets/images/the_dark_forest.jpg',
        // isRead: true
    },
    {
        title: "Death's end",
        author: "Liu Cixin",
        cover: 'assets/images/deaths_end.jpg'
    },
];


function displayLibrary() {
    myLibrary.forEach((libraryBook) => {
        let body = document.querySelector('body');
        let book = document.createElement('div');
        book.setAttribute('class', 'book');

        let cover = document.createElement('div');
        cover.setAttribute('class', 'cover');
        let image = document.createElement('img');
        image.setAttribute('src', libraryBook.cover);

        let description = document.createElement('div');
        description.setAttribute('class', 'description');
        let title = document.createElement('p');
        title.setAttribute('class', 'title');
        title.textContent = libraryBook.title;
        let br = document.createElement('br');
        let author = document.createElement('span');
        author.setAttribute('class', 'author');
        author.textContent = libraryBook.author;

        body.appendChild(book);

        book.appendChild(cover);
        cover.appendChild(image);

        book.appendChild(description);
        description.appendChild(title);
        title.appendChild(br);
        title.appendChild(author);
    })

}

function Book(title, author, cover, pages, isRead) {
    this.title = title
    this.author = author
    this.cover = cover
    // this.isRead = isRead === "Yes" ? "read" : "not read yet"
}

Book.prototype.info = function () {
    return `${this.title}, ${this.author}`
}


function addBookToLibrary() {

}

// displayLibrary()




