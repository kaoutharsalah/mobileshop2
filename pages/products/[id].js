import Header from "../../components/Header/header"
import Navbar from "../../components/Navbar/navbar"
import Footer from "../../components/Footer/footer"
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct, removeSelectedProduct} from "../../store/action/productAction";
import {ProductAction} from "../../store/action/productAction";
/*export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/products/`);
    const products = await res.json();
    //console.log('productslists', productslists)
    const paths = products.map((product) => `/products/${product.id}`);
    return { paths, fallback: false };
  }
  export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/products/${params.id}`);
    const data = await res.json();
    const dispatch = useDispatch();
    dispatch(selectedProduct(data));
    return { props: { data } };
  }*/

 



function Product() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productsReducer.products);
    const router = useRouter();
    const  productId  = router.query.id;
    useEffect(() => {

        dispatch(ProductAction(productId));
      }, [dispatch, products]);
      console.log("product",products)
    //const router = useRouter();
   
    
    //let product = useSelector((state) => state.product);
    const {id , name, imageName, price, discountRate ,description} =  products;

   // const dispatch = useDispatch();
   /*const fetchProductDetail = async (id) => {
     const response = await axios
       .get(`http://localhost:3000/products/${id}`)
       .catch((err) => {
         console.log("Err: ", err);
       });
     dispatch(selectedProduct(response.data));
   };*/
 
   /*useEffect(() => {
 
     if (productId && productId !== "") fetchProductDetail(productId);
     return () => {
       dispatch(removeSelectedProduct());
     };
   }, [productId]);*/
    return (
        <div><>
           
            <div>
              <Header/>
                </div>
                <Navbar/>
                <div>
                    <div className="single-product-area">
                        <div className="zigzag-bottom" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                   <RecentlyViewed/>
                                    <div className="single-sidebar">
                                        <h2 className="sidebar-title">Others brands</h2>
                                        <ul>
                                            <li>
                                                <a href="">Sony</a>
                                            </li>
                                            <li>
                                                <a href="">Samsung</a>
                                            </li>
                                            <li>
                                                <a href="">LG</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="product-content-right">
                                        <div className="product-breadcroumb">
                                            <Link href="/">Home</Link>
                                            <a href="">Category Name</a>
                                            <a href="">{products && products[0] && products[0].name}</a>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="product-images">
                                                    <div className="product-main-img">
                                                        <img src="/img/product-2.jpg" alt="" />
                                                    </div>
                                                    <div className="product-gallery">
                                                        <img src="/img/product-thumb-1.jpg" alt="" />
                                                        <img src="/img/product-thumb-2.jpg" alt="" />
                                                        <img src="/img/product-thumb-3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="product-inner">
                                                    <h2 className="product-name">{name}</h2>
                                                    <div className="product-inner-price">
                                                        <ins>${products && products[0] && products[0].price}</ins> <del>${products && products[0] && products[0].price-(products && products[0] && products[0].discountRate/100)}</del>
                                                    </div>
                                                    <form action="" className="cart">
                                                        <div className="quantity">
                                                            <input
                                                                type="number"
                                                                size={4}
                                                                className="input-text qty text"
                                                                title="Qty"
                                                                defaultValue={1}
                                                                name="quantity"
                                                                min={1}
                                                                step={1}
                                                            />
                                                        </div>
                                                        <button className="add_to_cart_button" type="submit">
                                                            Add to cart
                                                        </button>
                                                    </form>
                                                    <div className="product-inner-category">
                                                        <h2>Product Description</h2>
                                                        <p>
                                                        {products && products[0] && products[0].description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <Footer/>
                    {/* End footer top area */}
                </div>

         
        </>

        </div>
    );
}
export default Product;