import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import "./header.style.scss";
import CartIcon from "../cart-icon-component/cart-icon-component";
import CartDropdown from "../cart-dropdown-component/cart-dropdown-component";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectToggleCart } from "../../redux/cart/cart-selector";
import { signOutUser } from "../../redux/user/user-action";
import MenuComponent from '../navbar-component/menu.component'


//get current user value form the redux store
const Header = ({ currentUser, hidden, signOutUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
    
      <Logo className="logo" />
    </Link>
    <div className="options">
      <MenuComponent/>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
    <div className="user-and-cart-icon">
      {currentUser ? (
        <div
          onClick={() => {
            auth.signOut();
            signOutUser();
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin">SIGN IN</Link>
      )}
      <div>
        <CartIcon />
        {hidden ? (
          <div></div>
        ) : (
          <div>
            <CartDropdown />
          </div>
        )}
      </div>
    </div>
  </div>
);
//destructure get currentUser from user nested destructuring
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectToggleCart(state),
});
const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOutUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
