import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
// import CommentsPage from './CommentsPage';
const CommentsPage = lazy(() => import('./CommentsPage'));

import { requestProductsDetailsById } from '../services/api';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await requestProductsDetailsById(productId);

        setProductDetails(data);
      } catch (error) {
        console.log('error: ', error);
      }
    }

    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h1>Product details: {productId}</h1>
      <Link to={backLinkRef.current}>⬅ Go back</Link>
      {productDetails !== null && (
        <div>
          <img src={productDetails.thumbnail} alt={productDetails.title} />
          <h2>Title: {productDetails.title} </h2>
          <p>Brand: {productDetails.brand} </p>
          <p>Price: {productDetails.price} </p>
        </div>
      )}
      <Link to="comments">Comment</Link>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<CommentsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default ProductDetailsPage;
