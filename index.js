let myLibrary = [
    {
        title: "The Dark Forest",
        author: "Liu Cixin",
        cover: 'assets/images/the_dark_forest.jpg',
        read: true
    },
    {
        title: "Death's end",
        author: "Liu Cixin",
        cover: 'assets/images/deaths_end.jpg',
        read: false
    },
];


function displayLibrary() {
    myLibrary.forEach((libraryBook) => {
        let library = document.querySelector('#library');
        let book = document.createElement('div');
        book.setAttribute('class', 'book');

        let cover = document.createElement('div');
        cover.setAttribute('class', 'cover');
        let image = document.createElement('img');
        image.setAttribute('src', libraryBook.cover);

        let description = document.createElement('div');
        description.setAttribute('class', 'description');
        let title = document.createElement('div');
        title.setAttribute('class', 'title');
        title.textContent = libraryBook.title;
        let author_read = document.createElement('div');
        author_read.setAttribute('class', 'author_read');
        let author = document.createElement('span');
        author.setAttribute('class', 'author');
        author.textContent = libraryBook.author;
        let checkMark = document.createElement('span');
        checkMark.setAttribute('class', 'material-symbols-outlined read-checkmark');
        checkMark.textContent = 'check';

        if (!libraryBook.read) {
            checkMark.style.visibility = 'hidden'
        }

        library.appendChild(book);

        book.appendChild(cover);
        cover.appendChild(image);

        book.appendChild(description);
        description.appendChild(title);
        description.append(author_read);
        author_read.appendChild(author);
        author_read.appendChild(checkMark);
    })

}

function Book(title, author, cover, read) {
    this.title = title
    this.author = author
    this.cover = cover
    // this.read = read === "Yes" ? "read" : "not read yet"
}

Book.prototype.info = function () {
    return `${this.title}, ${this.author}`
}


function addBookToLibrary() {

}

displayLibrary()




