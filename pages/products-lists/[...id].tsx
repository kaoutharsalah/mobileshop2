import classes from "./products.module.css";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Product from "./productItem";
import Layout from "../../components/Layout/layout"
import { connect } from "react-redux";
import { useRouter } from "next/router";
import fetch from "node-fetch";
export function getCategoryName() {
  if (typeof window !== "undefined") {
    var categoryname = localStorage.getItem("categoryName");
  }
  
  return categoryname;
}
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/products-lists`);
  const productslists = await res.json();
  //console.log('productslists', productslists)
  const paths = productslists.map((product) => `/products-lists/${product.id}`);
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/products-lists/${params.id}`);
  const product = await res.json();
  //console.log(product);
  // Pass post data to the page via props
  return { props: { product } };
}

interface Product {
  id: number;
  name: string;
  imageName: string;
  price: number;
  discountRate: number;
  review: number;
}

function Products({ product }) {
  const [] = useState<Product[]>([]);
  const router = useRouter();
  let id = router.query.id;
  //console.log("router", router);

  return (
    <div>
      <Layout>
        
        <main>
          <div className={classes.product_big_title_area}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className={classes.product_bit_title}>
                    <h2> {getCategoryName()} </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
            <div className={classes.single_product_area}>
              <div className={classes.zigzag_bottom}></div>
              <div className="container">
                <div className="row">
                  {product.items.map((product) => (
                    <Product
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      imageName={product.imageName}
                      price={product.price}
                      discountRate={product.discountRate}
                    />
                  ))}
                </div>
                <div className="row">
                  <div className="col-md-12"></div>
                </div>
              </div>
            </div>
          
        </main>
      </Layout>
    </div>
  );
}


export default Products;

