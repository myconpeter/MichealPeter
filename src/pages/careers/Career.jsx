import { useLoaderData, Link  } from "react-router-dom"


const Career = () => {
  const careers = useLoaderData()

  return (
    <div className='mt-8'>
        {careers.map(career =>(
          <div className="p-3  bg-purple-700 rounded-lg my-4">
            <Link to={ career.id.toString()} key={career.id}>
              
            <p className="text-white text-xl space-x-4 hover:text-rose-500">{career.title}</p>
            <p className="text-white text-md space-x-4">Based in : {career.location}</p>
            
          </Link>
          </div>

          
          
        )
        )}
    </div>
  )
}

export default Career

// loaders spinners .....

export const careerLoader = async () =>{
  const res = await fetch('http://localhost:4000/careers')
  if (!res.ok) {
    throw Error('the server is down')
  }

  return res.json()
}