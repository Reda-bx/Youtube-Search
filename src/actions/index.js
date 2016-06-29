import axios from 'axios'
import { API_KEY } from '../../config'

export const FETCH_VIDEOS = 'FETCH_VIDEOS'
export const VIDEO_SELECTED = 'VIDEO_SELECTED'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'


export function fetchvideos(term){
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  }
  const request = axios.get(ROOT_URL, { params })

  return {
    type: FETCH_VIDEOS,
    payload: request
  }
}

export function selectVideo(video){
  return {
    type: VIDEO_SELECTED,
    payload: video
  }
}
