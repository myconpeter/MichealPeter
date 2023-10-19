import { Link, useRouteError } from "react-router-dom"

const CareerError = () => {
    const error = useRouteError()
  return (
    <div className="mt-8">
        <h1 className="text-3xl font-bold font-serif mb-8 text-red-500 dark:text-green-500">This career is not found....</h1>
        <p className="text-red-500 dark:text-green-500 text-xl mb-7">
            {error.message}
        </p>
        <p className="text-red-500 dark:text-green-500 font-semibold text-lg">Click here to go back <Link to='/'>Home</Link></p>
    </div>
  )
}

export default CareerError