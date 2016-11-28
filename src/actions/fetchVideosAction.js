export default function fetchVideos(keyword) {
  const videos = [{mainVid: "url"}, {sideVids: ["url", "url"]}
  return {type: 'FETCH_VIDEOS', payload: videos}
}
