import './AgeCounter.css'

import React, {useState} from "react";

function AgeCounter() {
  
  const [user, setUser] = useState("Saurabh");
  const [age, setAge] = useState(0);
 
  return (
   <>
     <h1>Hello {user}</h1>
     <h2>Your age is {age}</h2>
     <br />
     Enter Name: <input type="text" onChange={(e)=>setUser(e.target.value)} />
      <br /> <br />
     Enter Age: <input type="text" onChange={(e)=>setAge(e.target.value)} />
   </>
  );
}

export default AgeCounter;