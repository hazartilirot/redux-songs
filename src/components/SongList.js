import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
                onClick={() => this.props.selectSong(song)}
            >
              <i className="play icon"/>
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
    ))
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}
const mapStateToProps = state => {
  return {songs: state.songs};
}
/*It's the last stage of getting a state passing it on to SongList*/
export default connect(mapStateToProps, {selectSong})(SongList);