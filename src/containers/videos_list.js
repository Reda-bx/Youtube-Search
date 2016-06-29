import React , { Component } from 'react'
import { connect } from 'react-redux'

class VideosList extends Component {
  renderVideos(videoData){
    const imageUrl = videoData.snippet.thumbnails.default.url
    return (
      <li key={videoData.id.videoId} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object"  src={imageUrl}/>
          </div>

          <div className="media-body">
            <div className="media-heading">
              {videoData.snippet.title}
            </div>
          </div>
        </div>
      </li>
    )
  }
  render(){
    return (
      <div className="col-sm-4">
        <ul className="list-group">
          {this.props.videos.map(this.renderVideos)}
        </ul>
      </div>
    )
  }
}


function mapStateToProps({videos}){
  return { videos }
}

export default connect(mapStateToProps)(VideosList)
