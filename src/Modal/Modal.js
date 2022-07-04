import React from 'react'
import "./Modal.css"

function Modal({closeModal}) {
  const Change =(e)=>{
    console.log("Welcome");
  }

    
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={()=> closeModal(false)}id='clbtn'>X</button>
            <div className='title'>
            <h1>Are you sure you want to continue?</h1>
            </div>
            
           <div>
               <p>hi this is my modal pop up.... </p>
           </div>
            <div className='footer'>
                <button onClick={()=> closeModal(false)}id='cancelbtn'>NO</button>
                <button type='submit' onClick={(e)=>(Change(e))}>Yes</button>
        
           
            </div>
        </div>
        
    </div>
    
    
  )
}

export default Modal