import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AddTodoAction, RemoveTodoAction } from './actions/TodoAction';

const App = () => {

  const [todo, setTodo] = useState();

     const dispatch = useDispatch();
     const Todo = useSelector((state) => state.Todo);
     const { todos } = Todo;

    

    const handleSubmit=(e)=>{
     e.preventDefault();
     dispatch(AddTodoAction(todo));
   }

   const removeTodoHandler=(t)=>{
     dispatch(RemoveTodoAction(t))

   }


  return <> 
      <div className='App'>
        <h1>To Do redux app</h1>
       
      </div>
       <form onSubmit={handleSubmit}>
            <input placeholder='Enter Todo' style={{
              width:"350px",
              padding:20,
              margin:20,
              borderRadius:10,
              background:"#fff",
              color:"black",
              outline:"none",
              fontSize:20
            }} onChange={(e) => setTodo(e.target.value)} />
            <button style={{
              padding: 12,
              marginLeft:20,
              borderRadius:25,
              cursor:"pointer"
            }} type='submi'>Submit</button>
        </form>
      
        <br/> 
        <br/>

        <ul style={{
          padding:20,
          margin:15
        }}>

          {todos && todos.map((t) => ( 
               <li key={t.id}>
               <span>{t.todo}</span>
                <button style={{
                padding:10,
                marginLeft:10,
                borderRadius:30,
                color:"#fff",
                background:"#f00"
              }} onClick={() => removeTodoHandler(t)}>Delete</button>
           </li>
            ))
          }
         
        </ul>
</>
};

export default App;
