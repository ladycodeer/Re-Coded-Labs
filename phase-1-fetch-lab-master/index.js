function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => renderBooks(json))

}

function renderBooks(myBooks) {
  const main = document.querySelector('main');
  myBooks.forEach(book => {
    const h3 = document.createElement('h3');
    h3.innerHTML = book.name;
    main.appendChild(h3);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});