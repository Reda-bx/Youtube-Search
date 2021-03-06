import { FETCH_VIDEOS, VIDEO_SELECTED } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload.data.items
  }
  return state
}
