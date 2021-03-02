/*SelectSong represents an Action creator in Redux. It'll return an action in
* the schema: Action creator -> Action -> Dispatch -> Reducers -> State
* One thing to remember is a type's property is required, payload is optional*/
export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}