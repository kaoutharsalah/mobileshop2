function NavBar({categories}){
    return(
        
        <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar">
              <ul className="nav navbar-nav navbar-expand">
                
                <ul className="nav navbar-nav navbar-expand">
               
    {categories?.map((categorie) => (
      <li key={categorie.name} className="active">
        
        <Link href="/Shop">{categorie.name}</Link>
        

      </li>
    ))}
  </ul>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );

}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/categories')
    const categories = await res.json()
  
    
    
    //console.log('cat',categories)
    
    
  
    return {
      props: {
        categories,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
    //localStorage.setItem('categories','categories');
  
  }
export default NavBar;
//onClick={() =>getCategoriesByName(categorie.name)}