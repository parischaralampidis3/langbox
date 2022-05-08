import React from 'react'
import Options from './Options';
import Notifications from './Notifications';
import VideoPlayer from './VideoPlayer';
export const VideoCall = () => {
  return (
    <div>
        <div className='text-center text-3xl font-bold items-center mt-12'>
        <h1>VideoCall</h1>
        </div>


        <VideoPlayer/>
        <Options>
        <Notifications/>
        </Options>

    </div>
  )
}

export default VideoCall;