import {useState, useEffect } from "react";
import axios from 'axios';
import Posts from './Posts';
import PaginationOana from './PaginationOana';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Main1 from "../Main1";

const MainOana = () => {

    const[posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(6);
   

    useEffect(() => {
        const fetchPost = async () =>{
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
            console.log(res.data);
        }

        fetchPost();
    }, [currentPage]);

    const handleClick = () => {
            setLoading(true);
            const res = posts.filter(({title}) => title.toLowerCase().includes(search))
            setPosts(res);
            setLoading(false);
            console.log(res);
            setCurrentPage(1);
   }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) =>  setCurrentPage(pageNumber);
    

    const previousPage = () => {
      if(currentPage !== 1){
        setCurrentPage(currentPage - 1);
      }
    };

    const nextPage = () => {
      if(currentPage !== Math.ceil(posts.length/postPerPage)){
        setCurrentPage(currentPage + 1);
      }
    };
    
    console.log(posts);
    return (
        <div className="containerOana">
            <div className="headerOana">
            <Header/>
            </div>
            <div className='searchOana'>
            <input
                className='inputO'
                type='text'
                value={search}
                placeholder='Search title...'
                onChange={(e) => setSearch(e.target.value)}
                />
                <br></br><br></br>
            <button className='buttonS' onClick={() => handleClick()}>
          Search
        </button>
      </div>
      <div className="mainPage">
            <Posts 
                posts={currentPosts} 
                loading={loading} 
              />
            <PaginationOana
                totalPosts={posts.length}
                postPerPage={postPerPage}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
      />
      </div>
      <Main1/>
      <div className="footerOana">
      <Footer/>
      </div>
        </div>
    );
}

export default MainOana;