"use client"
import Youtube from "react-youtube"
import { useState } from "react"
const VideoPlayer = ({ youtubeId }) => {
  let video = undefined
  const [isShow, setIsShow] = useState(true)
  const [error, setError] = useState(false)
  const option = {
    width: "300",
    height: "160"
  }
  const toggleVideo = () => {
    setIsShow(state => !state)
    if (video) video.pauseVideo()
  }
  const handleReady = e => {
    video = e.target
    video.pauseVideo()
  }
  const Player = () => {
    return (<>
      <button onClick={toggleVideo} type="button" className="bg-color-secondary text-color-primary rounded px-2 float-right border-2 border-color-primary">{isShow ? "X" : "Lihat Trailer"}</button>
      <Youtube className={!isShow && "hidden"||""} videoId={youtubeId} onReady={handleReady} onError={() => setError(true)} opts={option} />
    </>)
  }
  return (<div className="fixed bottom-4 right-2">
    {!error && <Player /> ||
      <span className="bg-color-accent text-color-primary rounded px-2 float-right border-2 border-color-primary">Trailer Error</span>}
  </div>
  )

}

export default VideoPlayer