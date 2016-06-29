import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectVideo } from '../actions/index'

class VideosList extends Component {
  renderList(){
    return this.props.videos.map(video => {
      const imageUrl = video.snippet.thumbnails.default.url
      return (
        <li
        onClick={() => this.props.selectVideo(video)}
        key={video.id.videoId}
        className="list-group-item">
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object" src={imageUrl}/>
            </div>

            <div className="media-body">
              <div className="media-heading">
                {video.snippet.title}
              </div>
            </div>
          </div>
        </li>
      )
    })
  }
  render(){
    return (
      <div className="col-sm-4">
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}


function mapStateToProps({videos}){
  return { videos }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectVideo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)
