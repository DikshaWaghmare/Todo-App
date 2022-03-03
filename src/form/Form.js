import './Form.css'
import React, {useState} from 'react'
export default function Form(){

   const[userData, setUserData]= useState({
       username:'', email:''
   });

   return(
        <>
        <div className="container">
            <div className="title">
            <h1 className="text-center">This is Form</h1>
            </div>
            <div className='row'>
            
                <div className='col-md-6'>
                    <div className="column1">
                     <h2 className="text-center">Input from User</h2>
                     <form className="p-3">
                         <input type="name" className=" form-control mt-3" placeholder='Enter your name' 
                         onChange={(e)=>setUserData({...userData, username: e.target.value})}/>
                         
                         <input type="email" className=" form-control mt-3" placeholder='Enter your email' 
                         onChange={(e)=>setUserData({...userData,email: e.target.value})}/>
                         
                         <button className="btn btn-warning w-100 mt-3">Submit</button>

                     </form>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="column2">
                      <h1 className="text-center">Data from User</h1>
                      <div className='p-3'>
                          <h3>UserName:</h3>
                          <h4>👤{userData.username}</h4>
                          <h3>Email:</h3>
                          <h4>✉{userData.email}</h4>
                      </div>
                   </div>
                </div>
            </div>
        </div>
        </>
   );
}