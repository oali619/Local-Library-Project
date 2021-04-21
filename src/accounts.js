function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  return books.filter((book) =>
    book.borrows.find((borrow) => borrow.id === account.id)
  ).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books.filter((book) =>
    book.borrows.some((borrow) => {
      if (borrow.id !== account.id) return false;
      if (!borrow.returned) {
        return true;
      }
    })
  );
  borrowedBooks.forEach(
    (book) =>
      (book.author = authors.find((author) => book.authorId === author.id))
  );
  return borrowedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
