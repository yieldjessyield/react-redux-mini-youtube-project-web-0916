import React from 'react';
import { bindActionCreators } from 'redux'
import { switchMainVideo } from './actions';
import { connect } from 'react-redux'


function VideoInfo(props){

  function handleClick(event){
    // debugger
    props.switchMainVideo(this.mainVideo, this.video)
  }

  return (
    <li className="list-group-item">
      <a href="#" onClick={handleClick.bind(props)}>
        <img src={props.video.previewUrl} />
        <p>{props.video.title}</p>
      </a>
    </li>
  );

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({switchMainVideo: switchMainVideo}, dispatch)
}

export default connect(null, mapDispatchToProps)(VideoInfo)
