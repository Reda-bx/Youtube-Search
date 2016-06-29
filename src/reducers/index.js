import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos'
import AcitveVideo from './reducer_activeVideo'

const rootReducer = combineReducers({
  videos: VideosReducer,
  activeVideo: AcitveVideo
});

export default rootReducer;
