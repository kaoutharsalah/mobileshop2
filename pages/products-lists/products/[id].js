import Header from "../../../components/Header/header"
import Navbar from "../../../components/Navbar/navbar"
import Footer from "../../../components/Footer/footer"
import RecentlyViewed from "../../../components/RecentlyViewed/RecentlyViewed";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct, removeSelectedProduct} from "../../../store/action/productAction";
import {ProductAction} from "../../../store/action/productAction";


 



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
                                            <a href="">Hawei</a>
                                            <a href="" >{products && products[0] && products[0].name}</a>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="product-images">
                                                    <div className="product-main-img">
                                                        <img src={"/produts-img/" + (products && products[0] && products[0].imageName.split("-")[0]) + "/" + (products && products[0] && products[0].imageName)} alt={products && products[0] && products[0].imageName} />
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