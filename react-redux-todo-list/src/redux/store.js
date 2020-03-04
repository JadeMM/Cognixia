import { combineReducers, createStore } from 'redux'
import todos from './reducers/todos'

const reducers = combineReducers({
    todos
})

const store = createStore(reducers)

export default store