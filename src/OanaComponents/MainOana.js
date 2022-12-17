import {useState, useEffect } from "react";
import axios from 'axios';
import Posts from './Posts';
import PaginationOana from './PaginationOana';

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
            <h1 className="h1Oana">Search Api</h1>
            <div className='searchOana'>
            <input
                className='inputO'
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            <button className='buttonS' onClick={() => handleClick()}>
          Search
        </button>
      </div>
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
    );
}

export default MainOana;