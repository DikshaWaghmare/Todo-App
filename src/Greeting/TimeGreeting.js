import React from 'react'
import './Greeting.css'
export default function TimeGreeting(props){   
    var date=new Date();
    var hour=date.getHours();
    var greeting=" "
    if (hour<12) {
      greeting='Good Morning';
    }
    else if(hour>=12 && hour<=16) {
      greeting='Good Afternoon';
    }
    else if(hour>16 && hour<=20) {
      greeting='Good Evening';
    }
    else if(hour>=12 && hour<=16) {
      greeting='Working Late';
    }
    
    var day=date.getDay();
    var flower;
    if (day===1) {
      flower = 'Monday';
    }
    else if(day===2) {
      flower = 'Tuesday';
    }
    else if(day===3) {
      flower = 'Wednesday';
    }
    else if(day===4) {
      flower = 'Thursday';
    }
    else if(day===5) {
      flower = 'Friday';
    }
    else if(day===6) {
      flower = 'Saturday';
    }
    else if(day===7) {
      flower = 'Sunday';
    }
  return (
    <div className="container">
     <h1>Hello, {props.name} 🙋‍♀️ <br/>
          {greeting}</h1>
     <h2>Today is {flower}</h2>
    </div>
   
  )
}
