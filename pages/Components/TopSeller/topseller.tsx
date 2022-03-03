
import React from "react";
import  {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import classes from "./topseller.module.css";


interface TopSellers{

  id: number,

  name: string,

  imageName: string,

  price: number,

  discountRate: number,

  review: number
}

export default function TopSaller(){

  const [topseller, setTopSellerList] = useState<TopSellers[]>([]);

  useEffect(() => {
    
    axios.get('http://localhost:3000/top-sellers-products')
    .then((response: AxiosResponse) => {
        console.log(response.data);
        setTopSellerList( response.data );
    });
}, []);
     

    return (
      <div className="col-md-4">
      <div className={classes.product_widget_area}>
        <div className={classes.zigzag_bottom}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={classes.single_product_widget}>
                <h2 className={classes.product_wid_title}>Top Sellers</h2>
                <a className={classes.wid_view_more}>View All</a>
                <div className={classes.single_wid_product}>
                  {topseller.map((top) => (
                    <div key={top.id}>
                       <a href="single-product.html">
                         <img src={"/produts-img/Sony"+ top.imageName} alt={top.imageName} className="product-thumb" />
                        </a> 
                      <h2>
                        <a href="single-product.html">{top.name}</a>
                      </h2>
                      <div className={classes.product_wid_rating} key={top.review}>
                           <i className="fa fa-star"></i>
                     
                      </div>
                      <div className={classes.product_wid_price}>
                        <ins>{top.price}</ins>
                        <del>{top.price-(top.discountRate/100)}</del>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
