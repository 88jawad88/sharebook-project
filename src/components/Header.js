import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Header extends React.Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    const { orderBook, isSignedIn, userName } = this.props;
    if (
      this.props.location.pathname === "/sign-in" ||
      this.props.location.pathname === "/sign-up"
    ) {
      return null;
    }
    return (
      <header className="section-header ">
        <div className="container">
          <div className="web-title">
            <NavLink exact to="/">
              ShareBook
            </NavLink>
          </div>
          <div
            className={
              this.state.clicked
                ? "group-header-items is-active"
                : "group-header-items"
            }
          >
            <button className="navbar-burger" onClick={this.handleClick}>
              <span class="nav-icon"></span>
            </button>
            {isSignedIn === true ? (
              <div>welcome {userName}</div>
            ) : (
              <div className="icon">
                <NavLink exact to="/sign-in">
                  sign in
                </NavLink>
                <NavLink exact to="/sign-up">
                  sign up
                </NavLink>
              </div>
            )}
            <ul className="navbar-menu">
              <li>
                <NavLink
                  exact
                  to="/"
                  className="navebar-item"
                  activeClassName="active"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/books"
                  className="navebar-item"
                  activeClassName="active"
                >
                  books
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/seller"
                  className="navebar-item"
                  activeClassName="active"
                >
                  Sell
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/contact"
                  className="navebar-item"
                  activeClassName="active"
                >
                  contact
                </NavLink>
              </li>
            </ul>
            <div className="cart-icon">
              <NavLink exact to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="style-num-cart">{orderBook.length}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
