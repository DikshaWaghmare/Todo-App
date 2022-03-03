import './Form.css'
import React, {useState, useEffect} from 'react'
export default function Form2(){

   const[username, setUsername]= useState(" ");
   //const[email, setEmail]= useState(" ");

   function save(){
       localStorage.setItem('username', username);
   }
//load save data on load
   useEffect(()=>{
       setUsername(localStorage.getItem('username'));
   }, []);
//    function load(){
//     setUsername(localStorage.getItem('username'));
//    }

   function del(){
    localStorage.setItem('username', '');
   }

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
                         onChange={(e)=>setUsername( e.target.value)}/>
                         
                         {/* <input type="email" className=" form-control mt-3" placeholder='Enter your email' 
                         onChange={(e)=>setEmail(e.target.value)}/> */}
                         
                         {/* <button className="btn btn-warning w-100 mt-3">Submit</button> */}

                         <button className="btn btn-primary w-40 mt-3 me-3" onClick={save}>Save</button>

                         {/* <button className="btn btn-primary w-40 mt-3 ms-3 me-3" onClick={load}>Load</button> */}

                         <button className="btn btn-danger w-40 mt-3 ms-3 me-3" onClick={del}>Delete</button>
                     </form>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="column2">
                      <h1 className="text-center">Data from User</h1>
                      <div className='p-3'>
                          <h3>UserName:</h3>
                          <h4>👤{username}</h4>
                          {/* <h3>Email:</h3>
                          <h4>✉{email}</h4> */}
                      </div>
                   </div>
                </div>
            </div>
        </div>
        </>
   );
}