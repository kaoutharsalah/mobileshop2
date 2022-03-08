import { useEffect } from "react";
import classes from "./Navbar.module.css";
import { useState } from 'react';

import Link from 'next/link'
import { useSelector,  useDispatch } from "react-redux";

import _app from "../../pages/_app"

import  {Action} from "../../store/action/Action";
import { useRouter } from "next/router";

function catgname(e,name,productListId,router){
  //console.log('id', id)
 
 e.preventDefault();
 console.log('name',name)
  localStorage.setItem('categoryName',name)
 
  router.push({pathname: "/products-lists/"+productListId});
};
 const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories );
  const router = useRouter();
 

  useEffect(() => {

    dispatch(Action());
  }, [dispatch]);

 
  return (

      
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar">
            <ul className="nav navbar-nav navbar-expand">
              <li key="home">
                <Link href="/">Home</Link>
              </li>
             
              {categories?.map((category) => (
                <li key={category.productListId}>
              
                  <Link
                    href={"/products-lists/" + category.productListId}
             
                  >
                     <a onClick={(e) =>  catgname(e,category.name,category.productListId,router)}>{category.name}</a>
                 
                  </Link>
                 
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;