import { UPDATE_VALUE } from '../actions/actionTypes'

const INITIAL_STATE = {
  value: '',
  todos: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return{
        ...state,
        value: action.payload
      }
    default:
      return state

  }
}
