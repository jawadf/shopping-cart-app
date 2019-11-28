import React from 'react';
import PropTypes from 'prop-types';

 
const Pagination  = ({
    pagesCount,
    currentPage,
    handlePageClick,
    handlePreviousClick,
    handleNextClick
   }) => {

    return (
        <div className="ui pagination menu">
            <a className="item" onClick={(e: any) => handlePreviousClick(e)}  href="#" >
                Previous
            </a>
        {[...Array(pagesCount)].map((page, i) => (
              <a className={i === currentPage ? "active item" : "item"} key={i} onClick={(e: any) => handlePageClick(e, i)} href="#">
                {i + 1}
              </a>
           ))}
            <a className="item" onClick={(e: any) => handleNextClick(e)}  href="#" >
                Next
            </a>
        </div>
    );

};

export default Pagination;

Pagination.propTypes = {
    pagesCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
    handlePreviousClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired
   };