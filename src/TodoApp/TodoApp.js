import './TodoApp.css'
import React, {useState, useEffect} from 'react'

export default function TodoApp(){

    const[task, setTask]=useState('');
    
    const[category, setCategory]=useState('📃');
    
    const[tasks,setTasks]=useState([]);
    
    function addTask(){
        setTasks(tasks=>[...tasks, {'title':task, 'category':category}]);
        setTask('');
        // localStorage.setItem('tasks', task);
    }
    useEffect(()=>{
        if(localStorage.getItem('tasks'))
        {
          setTasks(JSON.parse(localStorage.getItem('tasks')));
        }
    }, [])

    function clearTask(){
        setTasks(tasks=>[]);
    }

    return (
      <>
        <div className="container ">
          <h1 className="text-center  p-3 m-3 title">Todo App</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="p-3 addTasks ">
                <h2 className="text-center ">Add Tasks </h2>
                
                <input
                  type="name"
                  className="form-control mt-3"
                  placeholder="Enter your name"
                  onChange={(e)=>{setTask(e.target.value)}}
                  value={task}
                ></input>

                <select className="form-select mt-3" onChange={(e)=>setCategory(e.target.value)}>
                <option value="📃" selected>General📃</option>
                  <option value="📚">Academic📚</option>
                  <option value="🏡">Home 🏡</option>
                  <option value="🧩">Other🧩</option>
                </select>

                <button className="btn btn-success w-100 mt-3 fs-5" 
                onClick={addTask}>
                  Add Task
                </button>

                <button className="btn btn-danger w-100 mt-3 fs-5" 
                onClick={clearTask}>
                  Clear Task
                </button>

              </div>
            </div>

            <div className="col-md-6">
              <div className="TasksList p-3 list">
                <h2 className="text-center ">Tasks List</h2>
                <ol>
                  {tasks.map((task)=>{
                    let cname='type-1';
                    if(task.category==="📚")
                    {
                       cname='type-1'
                    }
                    if(task.category==="🏡")
                    {
                       cname='type-2'
                    }
                    if(task.category==="🧩")
                    {
                       cname='type-3'
                    }
                    return (
                     <div className={`task ${cname}`} key={task.title}>
                       <li key={task} className='ms-3'>{task.category}{task.title}</li>
                     </div>
                    ); 
                  })
                }
                </ol>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}