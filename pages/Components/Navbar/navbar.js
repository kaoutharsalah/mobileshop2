import { useEffect } from "react";
import classes from "./Navbar.module.css";

import Link from 'next/link'
import { useSelector,  useDispatch } from "react-redux";

import _app from "../../_app"


import Action from "../../../store/action/Action";

function Redirect(id){
  console.log('id', id)
 // e.preventDefault();
  localStorage.setItem('categoryId',id)
  //router.push({pathname: `/${id}`, query: { category: category }});
};
 const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories );

 

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
                <Link href="/index">Home</Link>
              </li>
             
              {categories?.map((category) => (
                <li key={category.productListId}>
              
                  {console.log('category2', category.productListId)}
                  <a onClick={() => Redirect(category['productListId'])}
                    href={"Components/Products/products/" + category.productListId}
             
                  >
                    {category.name}
                  </a>
                  
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