import { ADD_TODO, DELETE_TODO } from '../actions'

export default function todos(todos = [], action) {
    switch(action.type) {
        //add new todo to array
        case ADD_TODO:
            return [
                ...todos,
                action.text
            ]
        //remove todo from array
        case DELETE_TODO:
            const todoArray = todos.filter(item => {
                return item !== action.text
            })
            return todoArray

        default:
            return todos
    }
}