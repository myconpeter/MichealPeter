import { Link, useLocation } from "react-router-dom"

const Breadcrumb = () => {
    const location = useLocation()
    let currentLink =  ''

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLink += `/${crumb}`


        return(
            <div className=" flex" key={crumb}>
                <Link className="mx-3 text-white mt-3 flex underline" to={currentLink}>
                    {crumb}
                    
                </Link>
            </div>
        )
    })
   
  return (
    <div className="flex ">{crumbs}</div>
  )
}

export default Breadcrumb