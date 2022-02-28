import React from 'react';

import classes from './product-item.module.css';


 function Product(props : any){
    const {id , name, imageName, price, discountRate} = props;
     
    return (
        <div>
         <div className="col-md-3 col-sm-6">
                     <div className={classes.single_shop_product}>
                         <div className="product-upper">
                           <img src="http://localhost:3000/img/"  alt={imageName}/>
                         </div>
                         <h2>  <a >{name} </a></h2>
                         <div className={classes.product_carousel_price}>
                             <ins>${price}</ins> <del>${price-(discountRate/100)}</del>
                         </div>  
                         
                         <div className={classes.product_option_shop}>
                             <button className={classes.add_to_cart_button} >Add to cart</button>
                         </div>                       
                     </div>
                 </div>
        </div>
    )

}
export default Product;