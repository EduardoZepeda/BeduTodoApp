import { UPDATE_VALUE, SAVE_TODO, DELETE_TODO, TOGGLE_COMPLETED } from './actionTypes'

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

export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    payload: index
  }
}

export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  }
}
