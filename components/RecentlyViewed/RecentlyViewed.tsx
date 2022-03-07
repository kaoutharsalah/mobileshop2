import classes from "./recentlyviewed.module.css";
function RecentlyViewed(){
    return(
    
          <div className="col-md-4">
                <div className={classes.single_product_widget}>
                  <h2 className={classes.product_wid_title}>Recently Viewed</h2>
                  <a className={classes.wid_view_more}>View All</a>
                  <div className={classes.single_wid_product}>
                    <a href="single-product.html">
                      <img
                        src="/img/product-thumb-4.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </a>
                    <h2>
                      <a href="single-product.html">Sony playstation microsoft</a>
                    </h2>
                    <div className={classes.product_wid_rating}>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className={classes.product_wid_price}>
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
                  <div className={classes.single_wid_product}>
                    <a href="single-product.html">
                      <img
                        src="/img/product-thumb-1.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </a>
                    <h2>
                      <a href="single-product.html">Sony Smart Air Condtion</a>
                    </h2>
                    <div className={classes.product_wid_rating}>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className={classes.product_wid_price}>
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
                  <div className={classes.single_wid_product}>
                    <a href="single-product.html">
                      <img
                        src="/img/product-thumb-2.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </a>
                    <h2>
                      <a href="single-product.html">Samsung gallaxy note 4</a>
                    </h2>
                    <div className={classes.product_wid_rating}>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className={classes.product_wid_price}>
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
                </div>
              </div>
             
                

          
    )

}
export default RecentlyViewed;