export default function switchVideos(main, sides) {
  //main = string, sides = array of strings
  const videos = [{mainVid: main}, {sideVids: sides}
  return {type: 'SWITCH_VIDEOS', payload: videos}
}
