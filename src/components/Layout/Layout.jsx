import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import css from '../../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn, selectUserData } from '../../redux/auth/selectors';
import { apiLogout } from '../../redux/auth/authSlice';

const geNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={geNavLinkClassName} to="/">
            Home
          </NavLink>
          {isSignedIn ? (
            <>
              <NavLink className={geNavLinkClassName} to="/contacts">
                Contacts
              </NavLink>
              <NavLink className={geNavLinkClassName} to="/mailbox">
                Mailbox
              </NavLink>
              <NavLink className={geNavLinkClassName} to="/products">
                Products
              </NavLink>
              <NavLink className={geNavLinkClassName} to="/search">
                Search
              </NavLink>
              <div>
                <span>Hi, {userData.name}</span>
                <button onClick={onLogout} type="button">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink className={geNavLinkClassName} to="/register">
                Register
              </NavLink>
              <NavLink className={geNavLinkClassName} to="/login">
                Login
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
