import {  Outlet } from "react-router-dom"

const Careers = () => {
  return (
    <div className='mt-8'>
        <h2 className='text-white font-bold text-2xl'>Careers</h2>
        <p className='text-white  text-lg mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nobis 
            lorem porro, eaque obcaecati sunt!
        </p>
    <Outlet />

    </div>
  )
}

export default Careers