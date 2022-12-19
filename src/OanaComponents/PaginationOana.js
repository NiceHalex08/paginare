import React from 'react';

const PaginationOana = (props) =>{
    const {postsPerPage, totalPosts, paginate, previousPage, nextPage} = props;

    const pageNumbers = [];
    console.log(totalPosts);
    console.log(postsPerPage);
    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
        console.log(i);
    }

    
    return(
        
        <div className='div-pagination'>
            {totalPosts > 1  &&
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
             }
        </div>
               
        
    )
}

export default PaginationOana;

