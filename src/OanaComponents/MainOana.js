import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';
import PaginationOana from './PaginationOana';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main1 from '../Main1';

const postPerPage = 6;

//1. apelezi functia din nou inainte de search ca sa ai mereu toata lista
//2. sa ai alt state care sa tina lista initiala si sa ai un state care sa tina lista filtrata

const MainOana = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const fetchPost = async () => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPosts(res.data);
      setFilteredPosts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPost();
  }, [currentPage]);

  const handleClick = () => {
    setLoading(true);
    const res = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(res);
    setLoading(false);
    setCurrentPage(1);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(posts.length / postPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='containerOana'>
      <div className='headerOana'>
        <Header />
      </div>
      <div className='searchOana'>
        <input
          className='inputO'
          type='text'
          value={search}
          placeholder='Search title...'
          onChange={(e) => setSearch(e.target.value)}
        />
        <br></br>
        <br></br>
        <button className='buttonS' onClick={() => handleClick()}>
          Search
        </button>
      </div>
      <div className='mainPage'>
        <Posts posts={currentPosts} loading={loading} />
        <PaginationOana
          totalPosts={filteredPosts.length}
          postPerPage={postPerPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
      <Main1 />
      <div className='footerOana'>
        <Footer />
      </div>
    </div>
  );
};

export default MainOana;
