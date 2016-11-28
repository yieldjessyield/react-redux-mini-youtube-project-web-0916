import React, { Component } from 'react';
import './App.css';
import {bindActionCreators} from 'redux';
import {fetchVideos} from './actions'
// import * as actions from './actions/fetchVideosAction';
import {connect} from 'react-redux';

import NewVideos from './NewVideos';
import ShowMainVideo from './ShowMainVideo'
import ShowSideVideos from './ShowSideVideos'




class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onSearchVideos = this.onSearchVideos.bind(this)
  // }

  render() {
   // debugger
    return (
      <div className="App">
          <h2>Handy Youtube Grabber</h2>
            <NewVideos />
            <ShowMainVideo video={this.props.videos.mainVideo} />
            <ShowSideVideos videos={this.props.videos.relatedVideos} />
      </div>
    );
  }
}

// work on this???

function mapStateToProps(state){
  return {videos: state.videos}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchVideos: fetchVideos}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
