import React from 'react';
import video from '../assets/Images/video.mp4';

const Video = () => {
  return (
    <div className="w-full mx-auto">
      <video
        src={video}
        controls
        autoPlay={false}
        muted
        loop
        className="w-full h-[594px] object-cover"
      />
    </div>
  );
};

export default Video;
