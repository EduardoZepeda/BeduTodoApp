import { UPDATE_VALUE } from './actionTypes'

export const updateValue = (value) => {
  return {
    type: UPDATE_VALUE,
    payload: value
  }
}
