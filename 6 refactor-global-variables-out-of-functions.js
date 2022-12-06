// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let newbookList = [...bookList];
  newbookList.push(bookName);
  return newbookList;
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let newbookList = [...bookList];
  const book_index = newbookList.indexOf(bookName);
  if (book_index >= 0) {

    newbookList.splice(book_index, 1);
    return newbookList;

    // Change code above this line
    }
}
