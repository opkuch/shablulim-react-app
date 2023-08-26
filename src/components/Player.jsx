import { useEffect, useRef, useState } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
export const Player = ({ videoId, imgUrl }) => {
    const assetsPath = 'src/assets/images/inDNegev/'

  const [player, setPlayer] = useState()
  const videoRef = useRef()
  useEffect(() => {
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      fluid: true,
      muted: false,
      responsive: true,
      poster: assetsPath + imgUrl,
      sources: {
        src: `https://customer-z6invrbw5wf9rqup.cloudflarestream.com/${videoId}/manifest/video.m3u8`,
        type: 'application/x-mpegURL',
      },
    }

    const p = videojs(
      videoRef.current,
      videoJsOptions,
      function onPlayerReady() {
        console.log('onPlayerReady')
      }
    )

    setPlayer(p)
    return () => {
      if (player) {
        console.log('dispose')
        player.dispose()
      }
    }
  }, [])
  return (
    <div className="video-player-hls">
      <div data-vjs-player>
        <video
          id="videoPlayerHLS"
          onContextMenu={(e) => e.preventDefault()}
          ref={videoRef}
          className="video-js  vjs-big-play-centered"
        ></video>
      </div>
    </div>
  )
}
