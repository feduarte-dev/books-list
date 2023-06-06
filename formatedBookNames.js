const { books } = require('./data/library');

const formatedBookNames = () => {
  const arr = [];
  books.forEach((book) => {
    arr.push(`${book.name} - ${book.genre} - ${book.author.name}`);
  });
  return arr;
};

module.exports = { formatedBookNames };
