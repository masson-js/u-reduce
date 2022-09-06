import React from 'react'
import ReactPlayer from 'react-player'

function VideoExamples() {

  const url = 'https://www.youtube.com/watch?v=7sDY4m8KNLc'
  
  return (
    <div className="VideoExamples">
      <ReactPlayer
    url={url}
    config={{
    youtube: {
      playerVars: { showinfo: 1 }
    },
    facebook: {
      appId: '12345'
    }
  }}
/>
    </div>
  );
}

export default VideoExamples;