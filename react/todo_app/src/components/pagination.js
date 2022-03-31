import React from 'react';
import './todo.css'

    const Pagination = ({totalPages, handlePage, goToNextPage, gotoPreviousPage,currentPage}) => {
    const buttonArr = new Array(totalPages).fill(0).map((_, index )=> index + 1)
  
    return(
    <div>
        {
            buttonArr.map(num => {
                return (
               
                    <div className='pagination'>
                    
                    <button onClick={() => gotoPreviousPage(num)} className={`prev ${currentPage === 1 ? 'disabled' : ''}`} >Prev</button>
                    <button  onClick={() => handlePage(num)}>{num}</button>
                    <button onClick={() => goToNextPage(num)} className={`next ${currentPage === totalPages ? 'disabled' : ''}`}>Next</button>
                    
                    </div>
              
                    
                ) 
            })
    }
    </div>
    )
}

export default Pagination;