import { useEffect, useState } from 'react';
import axios from 'axios';
import './Container.css';

const Container = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  //schimbat skip in page
  useEffect(() => {
    if (skip >= 0) {
      setLoading(true);
      axios
        .get(`https://dummyjson.com/products?limit=10&skip=${skip}`)
        .then((response) => {
          setProducts(response.data.products);
          setTotal(response.data.total);
          setSkip(response.data.skip);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [skip]);

  const previousPage = () => {
    if (skip > 0 && !loading) {
      setSkip((prevState) => prevState - 10);
    }
  };

  const nextPage = () => {
    if (skip < total - 10 && !loading) {
      setSkip((prevState) => prevState + 10);
    }
  };

  return (
    <div>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Stock</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((value) => (
            <tr key={value.id}>
              <td>{value.title}</td>
              <td>{value.brand}</td>
              <td>{value.category}</td>
              <td>{value.price}</td>
              <td>{value.discountPercentage}</td>
              <td>{value.stock}</td>
              <td>{value.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='paginator'>
        <span>Total number of products: {total}</span>
        <div>
          <button type='button' onClick={previousPage}>
            Previous Page
          </button>
          {/* adaugat un buton in stanga(page-1) */}
          <span>{skip / 10 + 1}</span>
          {/* adaugat un buton in dreapta(page+1) */}

          {/* adaugat un buton cu last page */}
          <button type='button' onClick={nextPage}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};
export default Container;
