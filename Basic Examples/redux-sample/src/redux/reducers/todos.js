import { ADD_TODO, TOGGLE_TODO } from './actions';

export default function todos(state = [], action) {
    switch (action.type) {

        case ADD_TODO:
            return [
                    ...state.todos, 
                    {
                        text: action.text,
                        completed:false
                    }
                ]

        case TOGGLE_TODO:
            return state.todos.map((todo, index) => {
                if(index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })

        default:
            return state
    }
}