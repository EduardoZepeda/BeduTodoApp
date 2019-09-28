import { UPDATE_VALUE, SAVE_TODO } from '../actions/actionTypes'

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
    default:
      return state

  }
}
