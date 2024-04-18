import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ProductsList from '../components/ProductList/ProductList';
import SearchForm from '../components/SearchForm/SearchForm';
import { useProductSearch } from '../hooks/useProductSearch';
import RefExample from '../components/RefExample/RefExample';

const SearchPage = () => {
  const { products, isLoading, isError, onSetSearchQuery } = useProductSearch();

  return (
    <div>
      <h1>Search product by brand or name</h1>
      <RefExample />
      <SearchForm onSetSearchQuery={onSetSearchQuery} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {products && <ProductsList products={products} />}
    </div>
  );
};

export default SearchPage;
