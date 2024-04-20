import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';

// import HomePage from './pages/HomePage';
// import MailboxPage from './pages/MailboxPage';
// import ProductsPage from './pages/ProductsPage';
// import ProductDetailsPage from './pages/ProductDetailsPage';
// import SearchPage from './pages/SearchPage';
// import NotFound from './pages/NotFound';

const HomePage = lazy(() => import('./pages/HomePage'));
const MailboxPage = lazy(() => import('./pages/MailboxPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

import css from './App.module.css';
import Loader from './components/Loader/Loader';

/*
Робота з маршрутизацією:
  1. Навчитися змінювати URL-адресу браузера за допомогою
    маршрутизації компонента Link | NavLink. 
  2. Підготувати шаблони компонентів(сторінок) та рендерити
    іїх в залежності від шаблону адреси(pathname) в браузері (Route).


  Компоненти Link | NavLink - ми використовуємо для 
    внутрішньої навігації всередині веб-сторінки.
  Тег <а> - ми використовуємо для посилань на зовнішні
    ресурси(ютуб, інста, тг, гугл посилання і т.п.).
    -- target="_blank" rel="noopener noreferrer" --
*/

const geNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

function App() {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={geNavLinkClassName} to="/">
            Home
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
        </nav>
      </header>
      {/* URL -> localhost:5123/search */}
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mailbox" element={<MailboxPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:productId/*"
              element={<ProductDetailsPage />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
