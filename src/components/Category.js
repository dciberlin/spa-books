import React from 'react';
import Book from './Book';

class Category extends React.Component {
  render() {
    const { display_name, list_image, books } = this.props.data;

    const booksList = books.map(el => (
      <Book data={el} key={el.book_uri}></Book>
    ));

    return (
      <div className="category">
        <div className="header">
          <div className="title">{display_name}</div>
          <div className="img">
            <img src={list_image} alt={display_name}></img>
          </div>
        </div>
        <div className="books-container">{booksList}</div>
      </div>
    );
  }
}

export default Category;
