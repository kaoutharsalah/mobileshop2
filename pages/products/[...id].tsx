import classes from './products.module.css';
import axios , {AxiosResponse} from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './productItem';
import Layout from '../Components/Layout/layout';
import { connect } from 'react-redux'
import { useRouter } from "next/router";


export function getCategoryId(){
  if (typeof window !== 'undefined') {
    var categoryId=localStorage.getItem('categoryId')
  }
  return categoryId
}

interface Product{
    id: number,
    name: string,
    imageName: string,
    price: number,
    discountRate: number,
    review: number

}
export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/products-lists?id=${id}`);
    const myproduct = await res.json();
    return {
        props: {
            myproduct
        }
    }
}

function Products( {props}){


 
  
   const [myproduct ,setproduct]=useState<Product[]>([]);
   const router = useRouter();
    let id = router.query.id;
    console.log('router',router)
  useEffect(()=>{

    getStaticProps()
   },[id]);


    return (
        <div>
          <Layout>
              {console.log('id',id)}
        <main>
        <div className={classes.product_big_title_area}>
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className={classes.product_bit_title } >
                         <h2> {getCategoryId()} </h2>
                     </div>
                 </div>
             </div>
         </div>
        </div>
        <div>
        
        <div className={classes.single_product_area}>
         <div className={classes.zigzag_bottom}></div>
         <div className="container">
             <div className="row">
                
             { myproduct.map((product) =>(
                 <Product key={product.id} 
                  id = {product[0].id}
                  name = {product[0].name}
                  imageName = {product[0].imageName}
                  price = {product[0].price}
                  discountRate= {product[0].discountRate}

                />
             ))}
                             
             </div>           
             <div className="row">
                 <div className="col-md-12" >
                 </div>
             </div>
         </div>
     </div>
     </div>
 
  
     </main>
     </Layout>
     </div>
 
    );
}


export default Products;