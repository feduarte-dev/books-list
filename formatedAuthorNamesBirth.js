const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => {
  const arr = [];
  books.forEach((book) => arr.push(`${book.author.name} - ${book.author.birthYear}`));
  return arr;
};

module.exports = { formatedAuthorNamesBirth };
