import React from 'react';
import BookCollection from './BookCollection';

class BookCategories extends React.Component {
  render() {
    const data = this.props.data;
    const bookLists = data.map(el => {
      return (
        <div className="category" key={el.list_id}>
          <div className="title">
            <p>{el.display_name}</p>
            <img src={el.list_image} alt={el.display_name}></img>
          </div>
          <BookCollection data={el.books}></BookCollection>
        </div>
      );
    });

    return <div className="categories-container">{bookLists}</div>;
  }
}

export default BookCategories;
