import  Modal  from './Modal'
import React ,{useState} from 'react'


export const Portal = () => {
    const[open,setOpen]=useState(false)
   
    
  return (
      <>
      <div className='cl'>
      
       <h1>Hello!!</h1>
       <button className='btn' onClick={()=>{
           setOpen(true);
       }}>Open</button>
       { open && <Modal closeModal={setOpen}/>}
       </div>
      
       
      </>
   
    
  )
}
