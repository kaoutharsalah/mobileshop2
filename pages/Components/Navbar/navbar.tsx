import classes from "./navbar.module.css";

function Navbar(){
return(
    <div className={classes.mainmenu_area}>
    <div className="container">
      <div className="row">
        <div className={classes.navbar}>
          <ul className={classes.navbar_nav }>
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="shop.html">Samsung</a>
            </li>
            <li>
              <a href="shop.html">Apple</a>
            </li>
            <li>
              <a href="shop.html">LG</a>
            </li>
            <li>
              <a href="shop.html">Sony</a>
            </li>
            <li>
              <a href="shop.html">Huawei</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
}
export default Navbar;