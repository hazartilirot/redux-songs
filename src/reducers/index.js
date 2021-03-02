import {combineReducers} from "redux";

const songsReducer = () => {
  return [
    {title: 'No scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All Starts', duration: '3:15'},
    {title: 'I want it that way', duration: '1:45'}
  ]
}
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED')
    return action.payload
  
  return selectedSong;
}
/*MIND key names can completely be different from reducers names. As a result
* we'll get them as state properties*/
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})