const userSelectsNewBook = document.querySelector('#add_book');
userSelectsNewBook.addEventListener('submit', addBook);

function Book(title, author, cover, read) {
    this.title = title
    this.author = author
    this.cover = cover
    this.read = read === 'yes' ? true : false
}

Book.prototype.info = function () {
    return `${this.title}, ${this.author}`
}

//pretend database
let myLibrary = [
    {
        title: "Three Body Problem",
        author: "Liu Cixin",
        cover: 'assets/images/three_body_problem.jpg',
        read: true
    },
    {
        title: "The Dark Forest",
        author: "Liu Cixin",
        cover: 'assets/images/the_dark_forest.jpg',
        read: true
    },
    {
        title: "Death's End",
        author: "Liu Cixin",
        cover: 'assets/images/deaths_end.jpg',
        read: true
    }
];

function displayLibraryInDB(libraryArr) {
    libraryArr.forEach((libraryBook, index) => {
        addBookToPage(libraryBook, index)
    })
}

function addBook(e) {
    let newBook = createBook(e)
    let newBookIndex = myLibrary.length;
    addBookToPage(newBook, newBookIndex)
    addBookToLibrary(newBook)
}

function addBookToPage(libraryBook, index) {
    let library = document.querySelector('#library');
    let book = document.createElement('div');
    book.setAttribute('class', 'book');
    book.setAttribute('data-attribute', index)

    let closeForm = document.createElement('form');
    closeForm.setAttribute('action', '');
    closeForm.setAttribute('id', 'deleteBookForm');
    closeForm.setAttribute('class', 'deleteForm');
    let closeX = document.createElement('button');
    closeX.setAttribute('class', 'material-symbols-outlined');
    closeX.setAttribute('id', 'x');
    closeX.textContent = 'close';

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

    book.appendChild(closeForm);
    closeForm.appendChild(closeX)

    book.appendChild(cover);
    cover.appendChild(image);

    book.appendChild(description);
    description.appendChild(title);
    description.append(author_read);
    author_read.appendChild(author);
    author_read.appendChild(checkMark);

    //allows the ability to delete the newly created book.
    closeForm.addEventListener('submit', deleteBook)
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

function createBook(e) {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const cover = document.querySelector('#cover');
    const read = document.querySelector('input[name="read"]:checked');
    e.preventDefault();
    let newBook = new Book(title.value, author.value, cover.value, read.value)
    return newBook
}

function deleteBook(event) {
    event.preventDefault()
    let book = event.target.parentNode;
    let bookIndex = book.dataset.attribute;
    deleteBookFromPage(book)
    deleteBookFromLibrary(bookIndex)
    console.log(myLibrary)
}

function deleteBookFromPage(book) {
    book.remove()
    changeBookAttributeNumbers()
}

function deleteBookFromLibrary(bookIndex) {
    myLibrary.splice(bookIndex, 1)
}

function changeBookAttributeNumbers() {
    //select remaining books. Change dataset.attribute to the index in the remaining books array.
    let libraryBooks = document.querySelectorAll('.book');
    libraryBooks.forEach((book, i) => book.dataset.attribute = i);
}

displayLibraryInDB(myLibrary)
