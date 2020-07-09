import React, {  useEffect } from 'react';
//import data from '../data';
import {Link} from 'react-router-dom';

import {useSelector,useDispatch} from 'react-redux';
import {listProducts} from '../actions/productActions';
const HomeScreen = (props) => {
    const category = props.match.params.id ? props.match.params.id : '';

    const  productList = useSelector(state=>state.productList);
    const { products,loading,error} = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts(category));
        return () => {
            //
        };
    },[category]);

    return  loading? <div>Loading....</div> :
    error? <div>{error}</div>:
    <ul className="products">
        {
            products.map(product =>
                <li key={product._id}>
                    <div className="product">
                        <Link to={'/product/'+ product._id }>
                            <img className="product-image" alt="products" src={product.img} />
                        </Link>
                        <div className="product-name">
                            {product.title}
                        </div>
                        <div className="product-brand">{product.company}</div>
                        <div className="product-price">{product.price}</div>
                    </div>
                </li>)
        }
    </ul>

}
export default HomeScreen;