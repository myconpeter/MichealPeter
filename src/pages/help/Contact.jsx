import { Form, redirect, useActionData } from "react-router-dom"

const Contact = () => {

  const data = useActionData()
  return (
    <div className=" container max-w-sm m-auto   border-black border-1 pt-28" >

    <h1 className='text-xl font-semibold text-white text-center mb-3 font-serif underline '> Contact us</h1>
<Form method="POST" action="/help/contact">
            
      
<div className='fw-full '>

<div className='flex flex-col  my-3' >
<label className='block text-start text-white font-bold '>Email : </label>
<input className='w-full px-5 py-4 mx-0 my-4 border-white border-1 box-border block'
type="email"
name="email" 
required

/>
</div>

<div className='flex flex-col  my-3' >
<label className='block text-start text-white font-bold '>Message : </label>
<textarea className='w-full px-5 py-4 mx-0 my-4 border-white border-1 box-border block'
type="text"
name="message" 

required
>

</textarea>
</div>

<div className='text-center'>
<button className='p-2 bg-red-500 rounded-lg text-white' >Submit</button>

</div>
{data && data.error && <p className="text-white">{data.error}</p>}
</div>


      
        
    </Form>
  
    </div>
  )

}

export default Contact

export const contactAction = async ({ request }) => {
  console.log(request)

const data = await request.formData()

const submission ={
  email: data.get('email'),
  message:data.get('message')
   
}
console.log(submission)

if(submission.message.length < 10) {
  return {error : 'message must be greater than 10'}
}

return redirect('/')

}

