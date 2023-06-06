const { books } = require('./data/library');

const nameAndAge = () => {
  const arr = [];
  books.forEach((book) => {
    const obj = {
      author: book.author.name,
      age: book.releaseYear - book.author.birthYear,
    };
    arr.push(obj);
  }); return arr.sort((a, b) => a.age - b.age);
};

console.log(nameAndAge());

module.exports = { nameAndAge };
