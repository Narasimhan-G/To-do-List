import React, { useState } from 'react'


function TodoList() {
    const[tasks,setTasks] = useState(['Go for jogging','Walk the Dog','Hit the Gym','Catch the bus']);
    const[newTask,setNewTask] = useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    
    function addNewTask(){
        if(newTask.trim() != ""){
            setTasks((t => [...t,newTask]));
            setNewTask("");
        }
    }
    function handleKeyPress(e){
        if(newTask.trim() != ""){
            if(e.key == "Enter"){
                setTasks((t => [...t,newTask]));
                setNewTask("");
            }
        }        
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((_,idx) => idx != index)
        setTasks(updatedTask);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index - 1]] = [updatedTask[index - 1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index + 1]] = [updatedTask[index + 1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    function handleModeChange(){
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    
  return (
    <div className='list'>
        <h1>TO-DO LIST</h1>
        <button className='modeswitch' onClick={handleModeChange}>Toggle Dark Mode</button>
        <div className='input-container'>
            <input type = "text" 
            placeholder = "Enter a new Task.."
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}></input>
            <button className='add-button' onClick={addNewTask}>Add +</button>
        </div>
        <div className='todolisting'>
            <ul>
                {tasks.map((task,index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='moveUp-button' onClick={() => moveTaskUp(index)}>⬆️</button>
                    <button className='moveDown-button' onClick={() => moveTaskDown(index)}>⬇️</button>                
                </li>)}
            </ul>
        </div>
    </div>
  )
}

export default TodoList