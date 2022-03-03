import './Counter.css'
import React, {useState} from 'react'


export default function Counter(props){
    let [count, setCount]= useState(0);
    
    function inc(){
        setCount(count+1);
    }

    function dec(){
        setCount(count-1);
    }
    return(
        <>
        <div className="container">
        <h2>{props.title}</h2>
        <button className="btn" onClick={inc}> + </button>
        <span className="count">{count}</span>
        <button className="btn" onClick={dec}> - </button>
        </div>
        </>
    );
}