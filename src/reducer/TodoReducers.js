export const TodoReducer = (state = {todos:[]}, action) => {
     switch (action.type) {
        case "ADD_TO_DO":
            return{
                todos: action.payload
            }

           case "REMOVE_TO_DO":
            return{
                todos: action.payload
            }
         default:
             return state;
     }
};


