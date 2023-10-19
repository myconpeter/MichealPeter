import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div className="mt-8">
        <h1 className="text-3xl font-bold font-serif mb-8 text-red-500 dark:text-green-500">Error 404 Opps....</h1>
        <p className="text-red-500 dark:text-green-500 text-xl mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quibusdam voluptates fuga itaque molestias
             id ad dolorum iure eligendi, aliquid blanditiis eveniet vitae unde, maiores in accusamus, delectus soluta aperiam?
        </p>
        <p className="text-red-500 dark:text-green-500 font-semibold text-lg">Click here to go back <Link to='/'>Home</Link></p>
    </div>
  )
}

export default Error404