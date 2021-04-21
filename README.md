# This is my Local Library Project

## Brief Instructions

### Project: Local Library

Your neighborhood has decided to put together a local library where people can lend and borrow books. One of the most important features to organize this is a dashboard that will show which books are available, which are currently out, and other general statistics about the program.

Others are taking care of the logistics and and design, but they need you to build the algorithms!


This project is designed to test your ability to work with large datasets and build algorithms based on those datasets. Before taking on this module, you should be comfortable with the learning objectives listed below. You will not need to make any edits to HTML or CSS for this project.

### Datasets
There are three datasets that are a part of this project: accounts, authors, and books.

### Accounts
You can view all of the accounts data inside of the public/data/ directory. Each account is an object with the following shape:
```
{
  "id": "5f446f2ecfaf0310387c9603",
  "name": {
    "first": "Esther",
    "last": "Tucker"
  },
  "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
  "age": 25,
  "company": "ZILLACON",
  "email": "esther.tucker@zillacon.me",
  "registered": "Thursday, May 28, 2015 2:51 PM"
} 
```
An account represents a person who is registered with the library. Accounts can take out and return books.

### Authors
You can view all of the authors data inside of the public/data/ directory. Each author is object with the following shape:
```
{
  "id": 0,
  "name": {
    "first": "Lucia",
    "last": "Moreno"
  }
}
```
An author represents someone who wrote one or more books in the library.

Note: Author's IDs are set to be numbers instead of strings, like the other two data sets.

### Books
You can view all of the books data inside of the public/data/ directory. Each book is object with the following shape:
```
{
  "id": "5f4471327864ee880caf5afc",
  "title": "reprehenderit quis laboris adipisicing et",
  "genre": "Poetry",
  "authorId": 20,
  "borrows": [
    {
      "id": "5f446f2e2a4fcd687493a775",
      "returned": false
    },
    {
      "id": "5f446f2ebe8314bcec531cc5",
      "returned": true
    },
    {
      "id": "5f446f2ea508b6a99c3e42c6",
      "returned": true
    }
  ]
}
```

