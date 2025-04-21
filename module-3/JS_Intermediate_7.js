const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
//Exercise A
function getBookTitle(bookId) {
  const book = books.find((b) => b.id === bookId);
  return book ? book.title : "Book not found";
}

console.log(getBookTitle(3));
console.log(getBookTitle(5));

//Exercise B
function getOldBooks() {
  return books.filter((b) => b.year < 1950);
}

console.log(getOldBooks());

//Exercise C
function addGenre() {
  return books.map((b) => ({ ...b, genre: "classic" }));
}

console.log(addGenre());

//Exercise D
function getTitles(authorInitial) {
  return books
    .filter((b) => b.author.startsWith(authorInitial))
    .map((b) => b.title);
}

console.log(getTitles("F"));
console.log(getTitles("H"));

//Exercise E
function latestBook() {
  let latestYear = -Infinity;
  let latestBook = null;

  books.forEach((b) => {
    if (b.year > latestYear) {
      latestYear = b.year;
      latestBook = b;
    }
  });

  return latestBook;
}

console.log(latestBook());
