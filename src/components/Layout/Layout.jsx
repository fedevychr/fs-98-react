import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import css from '../../App.module.css';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from '../../redux/auth/selectors';

const geNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

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
