
import  {useEffect, useState } from 'react';
import axios, {AxiosResponse} from 'axios';
import classes from "./topnew.module.css";


interface TopNew{

  id: number,

  name: string,

   imageName: string,

  price: number,

   discountRate: number,

   review: number



}


function TopNew(){
  const [topnew, setTopNewList] = useState<TopNew[]>([]);

  useEffect(() => {
    
    axios.get('http://localhost:3000/top-new-products')
    .then((response: AxiosResponse) => {
        console.log(response.data);
        setTopNewList( response.data );
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
                  <h2 className={classes.product_wid_title}>Top New</h2>
                  <a className={classes.wid_view_more}>View All</a>
                  <div className={classes.single_wid_product}>
                    {topnew.map((top) => (
                      <div key={top.id}>
                         <a href="single-product.html">
                           <img src={"/produts-img/"+ top.imageName} alt={top.imageName} className="product-thumb" />
                          </a> 
                        <h2>
                          <a href="single-product.html">{top.name}</a>
                        </h2>
                        <div className={classes.product_wid_rating}>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
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
}
export default TopNew;