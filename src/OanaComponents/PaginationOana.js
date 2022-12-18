import React from 'react';

const PaginationOana = ({postsPerPage, totalPosts, paginate, previousPage, nextPage}) =>{

    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
        console.log(i);
    }


    return(
        <div className='div-pagination'>
            <ul className='pagination-container'>
                <li onClick={previousPage} className='page-number'>
                    Prev
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} 
                        onClick={() => paginate(number)}
                        className='page-number'>
                    {number}  {console.log(number)}
                    </li>
                ))}
                <li onClick={nextPage} className='page-number'>
                    Next
                </li>
            </ul>
        </div>
        
    )
}

export default PaginationOana;

