import React from 'react';
import './VideoHeader.css';
import { ArrowBackIos, CameraAltOutlined } from '@mui/icons-material';


const VideoHeader = () => {

  return (

    <div className='videoHeader'>

        <ArrowBackIos />
        <h3> Reels </h3>
        <CameraAltOutlined />

    </div>

  )

};

export default VideoHeader;