import React from 'react';

export default function ShowMainVideo(props){
  // debugger
  if(props.video === undefined){
      var src = `https://www.youtube.com/embed/NEKlUtI3P_8`
    } else {
      var src = `https://www.youtube.com/embed/${props.video.id}`
    }
  // debugger

  return (
    <div className="mainVideo">
        <iframe width="770" height="490" src={src} />
      </div>
  )
}
