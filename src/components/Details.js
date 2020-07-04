import React from "react";
import StarRating from "./StarRating.js";
import AddToCartButton from "./AddToCartButton.js";

class Details extends React.Component {
  bookId = this.props.bookid;
  book = this.props.books.find((book) => book.id.includes(this.bookId));
  render() {
    const book = this.book;
    console.log(book, "book2");
    //Filter Price
    const filterPrice =
      book.saleInfo.saleability === "NOT_FOR_SALE"
        ? (book.saleInfo.saleability = 20)
        : book.saleInfo.retailPrice.amount;
    console.log(filterPrice, "filterPrice");
    return (
      <section className="detail">
        <div className="container">
          <div className="book-preview">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              className="main-photo"
              alt={book.volumeInfo.title}
            />
            <AddToCartButton onClick={() => this.props.catchItem(book)} />
            <p>Saler : Sara</p>
          </div>
          <div className="book-detail">
            <div className="book-overview">
              <h2 className="book-title">{book.volumeInfo.title}</h2>
              <div>
                <h2 className="book-price">
                  {filterPrice}
                  {book.accessInfo.country}
                  <StarRating />
                </h2>
              </div>
            </div>
            <div className="book-description">
              <p>{book.volumeInfo.description}</p>
            </div>
            <div className="book-info">
              <p id="book-Author">Author: {book.volumeInfo.authors}</p>
              <p id="book-PubYear">
                Pub. Year: {book.volumeInfo.publishedDate}
              </p>
              <p id="book-Pages">Pages: {book.volumeInfo.pageCount}</p>
            </div>
          </div>
        </div>
        <div className="other-options">
          <h3>other options</h3>
        </div>
      </section>
    );
  }
}

export default Details;
