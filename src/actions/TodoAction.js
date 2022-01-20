// Were able to nest two functions with help of redux-thunk
export const AddTodoAction=(todo)=>(dispatch,getState)=> {

    // Global state of Redux

    const {
        Todo: { todos }
    } = getState();

  //   Check if todo is in our global state
     const hasTodo = todos.find((i) => i.todo === todo);

//   And if todo is not in our global state and its not empty string then we call dispatch  with our action type and payload
      if(!hasTodo  && todo !==""){

         dispatch({
             type:"ADD_TO_DO",
             payload:[{ id:todo, todo}, ...todos]
         });
     }
};


export const RemoveTodoAction=(todo)=>(dispatch,getState)=> {

    const {
        Todo: { todos }
    } = getState();
    
        dispatch({
            type:"REMOVE_TO_DO",
            payload:todos.filter((t) => t.id !==todo.id)
        });
    
};

