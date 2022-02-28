import classes from './products.module.css';
import axios , {AxiosResponse} from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './productItem';
import Layout from '../Layout/layout';



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
      axios.get('http://localhost:3000/products')
      .then( ( response: AxiosResponse)=>{
        console.log(response.data);
        setData(response.data);
        }
      )
   },[]);


    return (
        <div>
          <Layout>
              
        <main>
        <div className={classes.product_big_title_area}>
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className={classes.product_bit_title } >
                         <h2> Samsung </h2>
                     </div>
                 </div>
             </div>
         </div>
        </div>
        <div className={classes.single_product_area}>
         <div className={classes.zigzag_bottom}></div>
         <div className="container">
             <div className="row">
             { data.map((prod) =>(
                 <Product key={prod.id} 
                  id = {prod.id}
                  name = {prod.name}
                  imageName = {prod.imageName}
                  price = {prod.price}
                  discountRate = {prod.discountRate}

                />
             ))}
                             
             </div>           
             <div className="row">
                 <div className="col-md-12" >
            
 <nav aria-label="Page navigation example">
   <ul className="pagination justify-content-center">
     <li className="page-item disabled">
       <a className="page-link" href="#" >Previous</a>
     </li>
     <li className="page-item"><a className="page-link" href="#">1</a></li>
     <li className="page-item"><a className="page-link" href="#">2</a></li>
     <li className="page-item"><a className="page-link" href="#">3</a></li>
     <li className="page-item">
       <a className="page-link" href="#">Next</a>
     </li>
   </ul>
 </nav>
                      
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