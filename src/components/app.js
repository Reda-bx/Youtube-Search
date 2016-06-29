import React, { Component } from 'react';

import SearchBar from '../containers/search_bar'
import VideosList from '../containers/videos_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideosList />
      </div>
    );
  }
}
