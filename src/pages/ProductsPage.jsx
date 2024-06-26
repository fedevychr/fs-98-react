import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ProductsList from '../components/ProductList/ProductList';

import { useProductSearch } from '../hooks/useProductSearch';

const ProductsPage = () => {
  const { products, isLoading, isError } = useProductSearch({
    isSearchPage: false,
  });

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {products && <ProductsList products={products} />}
    </div>
  );
};

export default ProductsPage;
