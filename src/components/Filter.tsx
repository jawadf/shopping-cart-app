import React from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../actions/productActions';
import { AppState } from '../reducers/index';
import { IFilterProps } from '../types';
  
const Filter:  React.FC = (props: any) => {
 
    return (
        <div className="filter" >
            <div className="filter-count">
                {props.filteredProducts.length} products found.
            </div>
            <div className="filter-sort">
                     <label>Order by</label>
                     <select
                         className="ui selection dropdown" 
                         value={props.sort}
                         onChange={(e) => props.sortProducts(props.filteredProducts, e.target.value)}
                     >
                         <i className="dropdown icon">&nbsp;</i>
                         <option value="">none</option>
                         <option value="lowest">lowest to highest</option>
                         <option value="highest">highest to lowest</option>

                     </select>
                
            </div>
            <div className="filter-size">
                <label> Filter size</label>
                    <select 
                        className="ui selection dropdown" 
                        value={props.size}
                        onChange={(e) => props.filterProducts(props.products, e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="x">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
               
            </div>
        </div>
    );
    
}

const mapStateToProps = (state: any) => {
    return {
        products: state.products.items,
        filteredProducts: state.products.items,
        size: state.products.size,
        sort: state.products.sort
    };
};

export default connect(mapStateToProps, { filterProducts, sortProducts })(Filter);
