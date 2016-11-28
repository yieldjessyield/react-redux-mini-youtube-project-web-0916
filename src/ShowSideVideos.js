import React from 'react';

export default function ShowSideVideos(props){
  debugger
  if(props.videos === undefined){
      var src = `https://www.youtube.com/embed/NEKlUtI3P_8`
    } else {
      var src = `https://www.youtube.com/embed/${props.videos.mainVideo.id}`
    }
  // debugger

  return (
    <div className="mainVideo">
        <iframe width="770" height="490" src={src} />
      </div>
  )
}
