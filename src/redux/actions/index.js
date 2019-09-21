import { UPDATE_VALUE } from './actionTypes'

export const updateValue = () => {
  return {
    type: UPDATE_VALUE,
    payload: value
  }
}
