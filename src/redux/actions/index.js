import { UPDATE_VALUE, SAVE_TODO } from './actionTypes'

export const updateValue = (value) => {
  return {
    type: UPDATE_VALUE,
    payload: value
  }
}

export const saveTodo = () => {
  return {
    type: SAVE_TODO,
    payload: null
  }
}
