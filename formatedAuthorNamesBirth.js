const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => {
  const arr = [];
  books.forEach((book) => {
    arr.push(`${book.name} - ${book.genre} - ${book.author.name}`);
  });
  return arr;
};

console.log(formatedAuthorNamesBirth());

module.exports = { formatedAuthorNamesBirth };
