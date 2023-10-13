import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
  return (

    <div className="mt-8 mx-8"> 
        <div className='text-white'>
            <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold">Website Help</h1>
            </div>

            <div className="font-medium">

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, asperiores hic maiores cumque, 
           
            </p>
            </div>
       
        </div>
        <nav className="mt-12 text-center text-xl space-x-9 text-white">


            <NavLink to='faq' className={({ isActive }) => 
          isActive ?"p-2 bg-red-500 rounded-md outline outline-white  outline-2" : "p-2 rounded-md outline outline-red-500  outline-2"}>View the FAQ</NavLink>
            <NavLink to='contact'className={({ isActive }) => 
          isActive ?"p-2 bg-red-500 rounded-md  outline outline-white  outline-2" : "p-2 rounded-md outline outline-red-500  outline-2"}
            >Contact us</NavLink>

        </nav>

        <Outlet />
    
    </div>
    
  )
}

export default HelpLayout