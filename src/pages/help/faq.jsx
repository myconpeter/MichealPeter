import { useState } from "react"
const Faq = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) =>{
    console.log(i)

    if (selected === i) {
      return setSelected(null)

    }

    setSelected(i)
  }
  

  return (
    <div className='mt-8'>
        <div>
            <h2 className='text-2xl font-bold text-red-500 dark:text-green-500'>Frequently Asked Question</h2>
        </div>

        {data.map((item)=>(
          <div className='mt-10 ml-4 bg-gray-400 dark:bg-gray-700 p-5 rounded-lg' key={item.id}>

        <div className="flex text-lg font-medium text-red-500 dark:text-green-500 justify-between items-center cursor-pointer" onClick={()=> toggle(item.id)}>
        <h3 className=''>{item.title}</h3>

        <span>{selected === item.id ? '-' : '+'}</span>

        </div>
       
         

          <p className={selected === item.id ? 'text-black dark:text-white text-lg mt-5' : 'text-white text-lg mt-5 overflow-hidden max-h-0'}>{item.description} </p>

        </div>
        ))}        
        
    </div>
  )
}



const data = [
  {
    id : 1,
    title : "Lorem ipsum dolor sit amet consectetur.",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, soluta sapiente, labore aperiam voluptatibus harum laborum magni rerum atque iure quo asperiores aliquid numquam quibeatae ex ab velit obcaecati."
  },

  {
    id : 2,
    title : "Lorem ipsum dolor sit amet consectetur.",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, soluta sapiente, labore aperiam voluptatibus harum laborum magni rerum atque iure quo asperiores aliquid numquam quibeatae ex ab velit obcaecati."
  },

  {
    id : 3,
    title : "Lorem ipsum dolor sit amet consectetur.",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, soluta sapiente, labore aperiam voluptatibus harum laborum magni rerum atque iure quo asperiores aliquid numquam quibeatae ex ab velit obcaecati."
  },

  {
    id : 4,
    title : "Lorem ipsum dolor sit amet consectetur.",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, soluta sapiente, labore aperiam voluptatibus harum laborum magni rerum atque iure quo asperiores aliquid numquam quibeatae ex ab velit obcaecati."
  },
  {
    id : 5,
    title : "Lorem ipsum dolor sit amet consectetur. ",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, soluta sapiente, labore aperiam voluptatibus harum laborum magni rerum atque iure quo asperiores aliquid numquam quibeatae ex ab velit obcaecati."
  },
  {
    id : 6,
    title : "Lorem ipsum dolor sit amet consectetur. ",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, soluta sapiente, labore aperiam voluptatibus harum laborum magni rerum atque iure quo asperiores aliquid numquam quibeatae ex ab velit obcaecati."
  }
]

export default Faq