import React from 'react'
import ReactPlayer from 'react-player'

import '../Pages/sources.css'

import url from '../storage/list-of-videos'

function VideoExamples() {

  return (
    <>
    {url.map((videos) => (
    <div className="VideoExamples">
      <div className="player-container" alt="Uploading videos...">
        <ReactPlayer
          url={videos}
            config={{
              youtube: {
              playerVars: { showinfo: 1 }
            }
        }}
        />
      </div>
    </div>
    ))
    }
  </>
  )
}

export default VideoExamples;