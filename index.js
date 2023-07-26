let myLibrary = [
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
        read: false
    }
];


function displayLibrary() {
    myLibrary.forEach((libraryBook) => {
        createBook(libraryBook)
    })
}

function createBook(libraryBook) {
    let library = document.querySelector('#library');
    let book = document.createElement('div');
    book.setAttribute('class', 'book');

    let closeForm = document.createElement('form');
    closeForm.setAttribute('action', '');
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
}

function Book(title, author, cover, read) {
    this.title = title
    this.author = author
    this.cover = cover
    this.read = read === 'yes' ? true : false
}

Book.prototype.info = function () {
    return `${this.title}, ${this.author}`
}


function addBookToLibrary() {
    const form = document.querySelector('#add_book');
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const cover = document.querySelector('#cover');
    form.addEventListener('submit', (e) => {
        const read = document.querySelector('input[name="read"]:checked');
        e.preventDefault();
        let newBook = new Book(title.value, author.value, cover.value, read.value)
        myLibrary.push(newBook)
        createBook(newBook)
        console.log(myLibrary)
    })
}

// function deleteBookFromLibrary() {
//     const closeXNodeList = document.querySelectorAll('#x');
//     closeXNodeList.forEach((closeX) => {
//         closeX.addEventListener('click', (e) => {
//             console.log(closeX)
//             //delete book from library array
//             let bookTitle = closeX.nextElementSibling.nextElementSibling.firstChild.textContent;
//             myLibrary.forEach((book, i) => {
//                 if (book.title === bookTitle) {
//                     myLibrary.splice(i, 1)
//                 }
//             })
//             //delete book from html
//             closeX.parentElement.remove()
//         })
//     })
// }

addBookToLibrary()
displayLibrary()
// deleteBookFromLibrary()




