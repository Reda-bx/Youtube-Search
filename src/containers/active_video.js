import React, { Component } from 'react'
import { connect } from 'react-redux'

class ActiveVideo extends Component {
  render(){
    if(! this.props.activeVideo){
      return <div>Notice me Seinsei: select a fucking video please.</div>
    }
    const videoId = this.props.activeVideo.id.videoId
    const url = `https://youtube.com/embed/${videoId}`
    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div><b>{this.props.activeVideo.snippet.title}</b></div>
          <div>{this.props.activeVideo.snippet.description}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activeVideo: state.activeVideo }
}

export default connect(mapStateToProps)(ActiveVideo)
