import { Outlet, NavLink, Link } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"
import { useEffect, useState } from "react"

const NavBar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() =>{
    if(theme === 'dark'){
      document.documentElement.classList.add("dark")
    } else{
      document.documentElement.classList.remove("dark")

    }
  },[theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className=" dark:bg-black">
      <div className="mx-8">
      <div className="m-0 flex flex-row">
            <div  className=" mt-8  font-serif  w-1/2 ">
            <Link to="/" className="font-bold text-red-500 underline decoration-red-500 text-3xl underline-offset-8 hover:text-gray-300 dark:text-green-500" >Job Router</Link>

            </div>

            <div>
              <button className=" mt-8 rounded-lg p-2 text-white bg-black dark:text-black dark:bg-white" onClick={handleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
            </div>

        <div className="text-end space-x-9 text-xl font-serif text-black dark:text-white mt-8 w-1/2  ">
        <NavLink to="/" className={({ isActive }) => 
          isActive ? " p-2 bg-red-500 dark:bg-green-500 rounded-md" : ""}>Home</NavLink>
        <NavLink className={({ isActive }) => 
          isActive ? " p-2 bg-red-500 dark:bg-green-500 rounded-md" : ""}to="/about">About</NavLink>

        <NavLink className={({ isActive }) => 
          isActive ? " p-2 bg-red-500 dark:bg-green-500 rounded-md" : ""}to="/help" >Help</NavLink>

      <NavLink className={({ isActive }) => 
          isActive ? " p-2 bg-red-500 dark:bg-green-500 rounded-md" : ""}to="/careers" >Careers</NavLink>
        </div>

        

        
        
    </div>
    <Breadcrumb />

        <main>
        <Outlet />
        </main>
      </div>
        
    </div>
    
  )
}

export default NavBar