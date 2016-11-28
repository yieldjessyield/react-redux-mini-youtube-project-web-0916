
import { combineReducers } from 'redux'

function videos(state = {}, action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      // debugger
      return setUpState(action.payload.data.items)
    case "SWITCH_VIDEOS":
      var relatedVideos = state.relatedVideos.map( video => {
          if(video != action.payload.video){
            return video
          } else {
            return action.payload.mainVideo
          }
      })
      return {
        mainVideo: action.payload.video,
        relatedVideos: relatedVideos
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  videos
})

export default rootReducer

function setUpState(videos){
  var mainVideo = ''
  var relatedVideos = []
  videos.map( (video, idx) => {
    if(idx === 0){
      mainVideo = {
        id: video.id.videoId,
        title: video.snippet.title,
        previewUrl: video.snippet.thumbnails.medium.url
      }
    } else {
      relatedVideos.push({
        id: video.id.videoId,
        title: video.snippet.title,
        previewUrl: video.snippet.thumbnails.medium.url
      })
    }
  })
  return {
    mainVideo: mainVideo,
    relatedVideos: relatedVideos
  }
}
