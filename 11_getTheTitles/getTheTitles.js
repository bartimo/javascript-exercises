/*
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  */

const getTheTitles = function(bookObj) {
    return titles = bookObj.map(book => {return book.title});
    
   /* loop method
    let titles = [];
    for(i = 0; i < bookObj.length; i++) {
        titles.push(bookObj[i].title);
    }
    return titles
    */
};

//console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
