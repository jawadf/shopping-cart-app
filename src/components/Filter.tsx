import React from 'react';
import util from '../utilities/util';

interface IProps {
    products: number[];
    handleAddToCart: () => void;
  }
  
const Filter:  React.FC<IProps>  = (props) => {

    return (
        <div className="row" >
            <div className="col-md-4">
                {props.count} products found.
            </div>
            <div className="col-md-4">
                <label>
                    Order by
                    <select 
                        className="form-control" 
                        value={props.sort}
                        onChange={props.handleChangeSort}
                    >
                        <option value="">Select</option>
                        <option value="lowest">lowest to highest</option>
                        <option value="highest">highest to lowest</option>

                    </select>
                </label>
            </div>
            <div className="col-md-4">
                A
            </div>
        </div>
    );
    
}

export default Filter;
