import React, {useState} from 'react';
import './VideoFooter.css';
import {Favorite, FavoriteBorder, ModeComment, MoreHoriz, MusicNote, Send} from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';



const VideoFooter = ({channel, song, likes, shares, avatarSrc}) => {

  const [liked, setLiked] = useState(false);

  return (

    <div className='videoFooter'>

        <div className="videoFooterText">
            <Avatar src={avatarSrc} />
            <h3> {channel} . <Button> Follow </Button> </h3>
        </div>

        <div className="videoFooterScrollText">
            <MusicNote className='videoFooterIcon' />
            <p>{song}</p>
        </div>

        <div className="videoFooterActions">

            <div className="videoFooterActionsLeft">
              <Favorite fontSize='large' />
              <ModeComment fontSize='large' />
              <Send fontSize='large' />
              <MoreHoriz fontSize='large' />
          </div>

          <div className="videoFooterActionsRight">

              <div className="videoFooterStat">

                 {liked ? (
                      <Favorite fontSize='medium' onClick={(e)=>setLiked(false)}/>
                    ) : (
                       <FavoriteBorder fontSize='medium' onClick={(e)=>setLiked(true)}/>
                    )
                 }
                  
                  <p>{liked ? likes + 1 : likes}</p>  

              </div>

              <div className="videoFooterStat">
                  <ModeComment fontSize='medium'/>
                  <p>{shares}</p>
              </div>
            
          </div>  

        </div>

        
    </div>

  )

};

export default VideoFooter;