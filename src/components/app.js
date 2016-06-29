import React, { Component } from 'react';

import SearchBar from '../containers/search_bar'
import VideosList from '../containers/videos_list'
import ActiveVideo from '../containers/active_video'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="col-md-12">
          <VideosList />
          <ActiveVideo />
        </div>
      </div>
    );
  }
}
