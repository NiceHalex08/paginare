import React from 'react';

const PaginationOana = (props) =>{
    const { postsPerPage, totalPosts, paginate} = props; 
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
        console.log(i);
    }


    return(
        <div>
            <ul className='paginationOana'>
                {pageNumbers.map((number) => (
                    <li key={number} className='itemPage'>
                        <button onClick={() => paginate(number)} className='pageLink'>
                            {number} {console.log(number)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default PaginationOana;

