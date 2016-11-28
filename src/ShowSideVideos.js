import React from 'react';
import VideoInfo from './VideoInfo'

export default function ShowSideVideos(props){
  // debugger
  // var starters = [`https://www.youtube.com/embed/KbglBn7qepo`, `https://www.youtube.com/embed/BNDgHWt_jgI`, `https://www.youtube.com/embed/Z2SCRPrCX5c`, `https://www.youtube.com/embed/pbd1sZzzRSo`]
  if(props.videos.relatedVideos === undefined){
      var videos = ""
    } else {
      var videos = props.videos.relatedVideos.map( video => {
      return <VideoInfo mainVideo={props.videos.mainVideo} video={video} />
    })
    }

    // function vidMaker(vids){
    //   let freshVids = []
    //   vids.forEach(function(vid) {
    //     freshVids.pop(`https://www.youtube.com/embed/${vid.id}`)
    //   });
    //   return freshVids
    // }
  // debugger

  return (
      <ul className="relatedVideos">
        {videos}
      </ul>
    );
}
