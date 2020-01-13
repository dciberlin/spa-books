import React from 'react';

class BookCollection extends React.Component {
  handleClick = e => {
    const url = e.target.dataset.link;
    window.open(url, '_blank');
  };

  render() {
    const book = this.props.data;

    return (
      <div className="book">
        <div className="cover">
          <img src={book.book_image} alt={book.book_image}></img>
        </div>
        <div className="info">
          <div className="titulo">{book.title}</div>
          <div className="author">{book.author}</div>
          <div className="desc">{book.description}</div>
          <div className="links">
            <button
              data-link={book.amazon_product_url}
              onClick={this.handleClick}
            >
              BUY ON AMAZON
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCollection;
