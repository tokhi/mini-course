import React from 'react'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Audio = (props) => {
    return(
        <div className="pt-4 pb-4">
            
            <AudioPlayer
                autoPlay
                src={props.url}
                onPlay={e => console.log('play')}
                
            />
            {/* <button onClick={props.}>OK...</button> */}
		</div>
    )
}

export default Audio