import { useState, useEffect } from 'react';
import './App.css';
import Video from './components/Video/Video';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';


function App() {

  const [reels, setReels] = useState([]);

  useEffect(() => {
      const colRef = collection(db, 'reels');
         getDocs(colRef)
            .then((snapshot) => {
               setReels(snapshot.docs.map((doc) => doc.data()));
            });
  }, []);

  return (

    <div className="app">

        <div className="appTop">
           <img 
              className='appLogo'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" 
              alt="Instagram logo" 
            />
            <h1> Reels </h1>

        </div>

        <div className="appVideos">

           {reels.map(({url, channel, avatarSrc, song, likes, shares}, index) => {
               return (
                  <Video
                     key={index}
                     channel={channel}
                     avatarSrc={avatarSrc}
                     song={song}
                     url={url}
                     likes={likes}
                     shares={shares}
                  />            
               )
           })}

        </div>

    </div>

  );

};

export default App;
