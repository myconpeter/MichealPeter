import { useLoaderData } from "react-router-dom"


const CareerDetail = () => {
   
    const career = useLoaderData()
  return (
    <div className="mt-8">
        <h1 className="text-white text-2xl font-semibold mb-3"> Career details for {career.title}</h1>
        <p className="text-white text-xl mb-3">Starting salary : {career.salary}</p>
        <p className="text-white text-xl mb-3 ">Location : {career.location}</p>
        <div>
          <p className="text-white text-xl mb-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio unde enim obcaecati ut minus maiores, consequuntur exp
            licabo voluptatibus consectetur omnis autem est repellendus, officiis pariatur nobis, exercitationem ducimus nihil porro.
          </p>
        </div>
    </div>
  )
}

export default CareerDetail

export const careerDetailLoader = async ({params}) => {
  const {id} = params
  const res = await fetch('http://localhost:4000/careers/' + id)
if (!res.ok){
  throw Error('THAT CAREER IS NOT FOUND')
}
  return res.json()
}