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
        <div className="ui pagination menu my-pagination">
            <a className="item" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handlePreviousClick(e)}  href="#" >
                <i className="angle left icon" />
            </a>
        {[...Array(pagesCount)].map((page, i) => (
              <a className={i === currentPage ? "active item" : "item"} key={i} onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handlePageClick(e, i)} href="#">
                {i + 1}
              </a>
           ))}
            <a className="item" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleNextClick(e)}  href="#" >
                <i className="angle right icon"/>
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