import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const { name, img, seller, stock, price,key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="name">
                <h4><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p className="name"><small>by : {seller} </small></p>
                <br />
                <h3>${price}</h3>
                <br />
                <p className="name"><small>only {stock} left in stock - order soon</small></p>
                
                {props.showAddToCart === true &&
                    <button className="main-button" onClick={()=> props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartPlus} /> Add to cart</button>
                }
                    
            </div>
        </div>
    );
};

export default Product;