import React from 'react';

const Posts = ({ posts, loading}) => {

    if(loading) {
        return <h2>Loading...</h2>;
    }

    return (<ul className='list-group'>
        {posts.map(post => {
            return <li key={post.id} className='list-group-item'>
                <p>Id: {post.id}</p> 
                <p>Title: {post.title}</p>
                <p>{post.body}</p>
            </li>
        })}
    </ul>
    );
};

export default Posts;