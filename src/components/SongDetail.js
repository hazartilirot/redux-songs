import React from 'react'
import {connect} from 'react-redux'
/*Don't fuss lad, it's just destructuring passed as an argument*/
const SongDetail = ({song}) => {
  /*MIND optional chaining! A state returns null in pristine condition*/
  return (
      <div>
        <h3>Playing...</h3>
        <div>Title: {song?.title}</div>
        <div>Duration: {song?.duration}</div>
      </div>
  )
}
const mapStateToProps = state => {
  return {song: state.selectedSong}
}
/*The following method wires up the component with a state placed in a store*/
export default connect(mapStateToProps)(SongDetail);