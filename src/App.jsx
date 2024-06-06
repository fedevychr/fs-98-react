import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const MailboxPage = lazy(() => import('./pages/MailboxPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
// TODO: add lazy loading
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import Layout from './components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from './redux/auth/authSlice';

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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />

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
    </Layout>
  );
}

export default App;
