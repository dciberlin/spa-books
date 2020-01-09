import React from 'react';
import '../scss/App.scss';
import books from '../data/books';
import BookCategories from './BookCategories';

class App extends React.Component {
  render() {
    const lists = books.results.lists;
    return (
      <div className="app">
        <BookCategories data={lists}></BookCategories>
      </div>
    );
  }
}

export default App;
