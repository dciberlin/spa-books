import React from 'react';

class Book extends React.Component {
  handleClick = url => {
    window.open(url, '_blank');
  };

  render() {
    const {
      author,
      book_image,
      description,
      title,
      amazon_product_url,
      publisher,
      sunday_review_link
    } = this.props.data;

    return (
      <div className="book">
        <div className="left">
          <div className="img">
            <img src={book_image} alt={title}></img>
          </div>
          <div className="publisher">
            <small>{publisher}</small>
          </div>
        </div>
        <div className="right">
          <p className="title">{title}</p>
          <p className="author">{author}</p>
          <p className="desc">{description}</p>
          <div className="actions">
            <button onClick={() => this.handleClick(amazon_product_url)}>
              AMAZON
            </button>
            {sunday_review_link.length > 0 && (
              <button onClick={() => this.handleClick(sunday_review_link)}>
                REVIEW
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
