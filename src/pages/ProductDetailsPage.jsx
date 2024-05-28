import { useEffect, useRef, lazy, Suspense } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
const CommentsPage = lazy(() => import('./CommentsPage'));

import { useDispatch, useSelector } from 'react-redux';
import { apiRequestProductDetailsById } from '../redux/productDetails/productDetailsSlice';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');

  const productDetails = useSelector(
    state => state.productDetails.productDetails,
  );
  const isLoading = useSelector(state => state.productDetails.isLoading);
  const isError = useSelector(state => state.productDetails.isError);

  useEffect(() => {
    dispatch(apiRequestProductDetailsById(productId));
  }, [dispatch, productId]);

  return (
    <div>
      <h1>Product details: {productId}</h1>
      <Link to={backLinkRef.current}>⬅ Go back</Link>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
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
