import { FETCH_VIDEOS } from '../actions/index'

export default function(state = null, action){
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload
  }
  return state
}
