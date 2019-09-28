import { UPDATE_VALUE, SAVE_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../actions/actionTypes'

const INITIAL_STATE = {
  value: '',
  todos: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        value: action.payload
      }
    case SAVE_TODO:
      return state.value ? {
        ...state,
        value: '',
        todos: [...state.todos, {value: state.value, completed: false }]
      }: state

    case DELETE_TODO:
      let newTodos = [...state.todos]
      newTodos.splice(action.payload, 1)
      return {
        ...state,
        value: '',
        todos: newTodos
      }

    case TOGGLE_COMPLETED:
      return {
        ...state,
        value: '',
        todos: state.todos.map((todo, i)=>{
          return action.payload === i ? {...todo, completed: !todo.completed}: todo
        })
      }

    default:
      return state

  }
}
