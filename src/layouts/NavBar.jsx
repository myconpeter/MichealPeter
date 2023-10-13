import { Outlet, NavLink, Link } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"

const NavBar = () => {
  return (
    <div className="mx-8">
        <div className="m-0 flex flex-row">
            <div  className=" mt-8  font-serif  w-1/2 ">
            <Link to="/" className="font-bold text-white underline decoration-red-500 text-3xl underline-offset-8 hover:text-gray-300" >Job Router</Link>

            </div>

        <div className="text-end space-x-9 text-xl font-serif text-white mt-8 w-1/2  ">
        <NavLink to="/" className={({ isActive }) => 
          isActive ? " p-2 bg-red-500 rounded-md" : ""}>Home</NavLink>
        <NavLink className={({ isActive }) => 
          isActive ? " p-2 bg-red-500 rounded-md" : ""}to="/about">About</NavLink>

        <NavLink className={({ isActive }) => 
          isActive ? " p-2 bg-red-500 rounded-md" : ""}to="/help" >Help</NavLink>

      <NavLink className={({ isActive }) => 
          isActive ? " p-2 bg-red-500 rounded-md" : ""}to="/careers" >Careers</NavLink>
        </div>

        

        
        
    </div>
    <Breadcrumb />

        <main>
        <Outlet />
        </main>
    </div>
    
  )
}

export default NavBar