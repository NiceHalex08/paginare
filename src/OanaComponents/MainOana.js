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
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
    const [search, setSearch] = useState('');

    const handleClick = () => {
        axios
          .get(
            'https://jsonplaceholder.typicode.com/posts' + search
          )
          .then((res) => setPosts(res.data))
          .catch((error) => console.log(error));
      };

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

 
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) =>  setCurrentPage(pageNumber);

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
                onChange={(e) => setSearch(e.target.value)}
                />
                <br></br><br></br>
            <button className='buttonS' onClick={() => handleClick()}>
          Search
        </button>
      </div>
      <div className="mainPage">
            <Posts 
                posts={currentPost} 
                loading={loading} 
                currentPage={currentPage}/>
            <PaginationOana
                totalPosts={posts.length}
                postPerPage={postPerPage}
                paginate={paginate}
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