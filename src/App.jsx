import React from 'react';
import { useState } from 'react';
import "./App.css";
import ToDoList from './ToDoList';

const App =() => {
    const[inputlist, setInputlist] = useState("");
    const[items, setItems]= useState([]);

    const itemEvent =(event) => {
        setInputlist(event.target.value);
    }
    const listOfIftems =() =>{
        setItems((oldItems) => {
            return [...oldItems, inputlist]
        })
        setInputlist("");
    }
    return(
        <>
        <div className='maindiv'>
            <div className='seconddiv'>
                <br />
                <h1>To Do List</h1>
                <br />
                <input type="text" placeholder='Add a Items' value={inputlist} onChange={itemEvent}/>
                <button onClick={listOfIftems}>+</button>
                <ol>
                    {items.map((itemval)=>{
                       return <ToDoList text={itemval}/>
                    })
                    }
                </ol>
            </div>
        </div>
        </>
    )
} 
export default App;