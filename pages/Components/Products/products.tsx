import classes from './products.module.css';
import axios , {AxiosResponse} from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './productItem';
import Layout from '../Layout/layout';

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
function Products(){

   const [data ,setData]=useState<Product[]>([]);
   useEffect(()=>{
  
      axios.get(`http://localhost:3000/products-lists?id=${getCategoryId()}`)
      .then( ( response: AxiosResponse)=>{
        console.log(response.data);
        setData(response.data);
        }
      )
   },[getCategoryId()]);


    return (
        <div>
          <Layout>
              
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
             { data.map((product) =>(
                 <Product key={product.id} 
                  id = {product.id}
                  name = {product.name}
                  imageName = {product.imageName}
                  price = {product.price}

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