const { findAccountById } = require("./accounts");

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => {
    return book.borrows.every((borrow) => {
      return borrow.returned;
    });
  });
  const borrowed = books.filter((book) => {
    return book.borrows.some((borrow) => !borrow.returned);
  });
  let result = [];
  result.push(borrowed);
  result.push(returned);
  return result;
}

function getBorrowersForBook(book, accounts) {
  const transactions = book.borrows;
  const result = transactions.map((transaction) => {
    const accountDeets = findAccountById(accounts, transaction.id);
    const answer = {
      ...transaction,
      ...accountDeets,
    };
    return answer;
  });
  result.splice(10);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
