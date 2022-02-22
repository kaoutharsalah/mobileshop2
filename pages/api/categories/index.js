
<ul className="nav navbar-nav navbar-expand">
                 
      {categories.map((categorie) => (
        <li key={categorie.name} className="active">
          <Link href={`/categories/${categorie.name}`}>{categorie.name}</Link>
        </li>
      ))}
    </ul>