import React from 'react';
import { connect } from 'react-redux';
import util from '../utilities/util';
import { filterProducts, sortProducts } from '../actions/productActions';


 interface IProps {
     count: number;
     handleChangeSort: any;
     handleChangeSize: any;
     sort: number;
     size: number;

   }
  
const Filter:  React.FC<IProps> = (props) => {

    return (
        <div className="row" >
            <div className="col-md-4">
                {props.filterProducts.length} products found.
            </div>
            <div className="col-md-4">
                <label>
                    Order by
                    <select 
                        className="form-control" 
                        value={props.sort}
                        onChange={(e) => props.sortProducts(props.filterProducts, e.target.value)}
                    >
                        <option value="">Select</option>
                        <option value="lowest">lowest to highest</option>
                        <option value="highest">highest to lowest</option>

                    </select>
                </label>
            </div>
            <div className="col-md-4">
                <label>
                    Filter size
                    <select 
                        className="form-control" 
                        value={props.size}
                        onChange={(e) => props.filterProducts(props.products, e.target.value)}
                    >
                        <option value="">ALL</option>
                        <option value="x">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </label>
            </div>
        </div>
    );
    
}

const mapStateToProps = (state) => {
    return {
        products: state.products.items,
        filteredProducts: state.products.items,
        size: state.products.size,
        sort: state.products.sort
    };
};

export default connect(mapStateToProps, { filterProducts, sortProducts })(Filter);
