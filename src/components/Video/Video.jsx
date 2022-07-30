import React, { useRef, useState } from 'react';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoHeader from '../VideoHeader/VideoHeader';
import './Video.css';



const Video = ({channel, avatarSrc, song, url, likes, shares}) => {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const toggleVideoPlayPause = () => {

      if (isVideoPlaying) {
         videoRef.current.pause();
         setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
      
  };

  return (

    <div className='video'>

        <VideoHeader />

        <video
            ref={videoRef}
            onClick={toggleVideoPlayPause}
            className='videoCard' 
            src={url}
            alt='IG reel video'
            loop
        />

        <VideoFooter
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song}
        />

    </div>

  )

};

export default Video;