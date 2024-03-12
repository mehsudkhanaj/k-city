import './Videoplayer.css'
import video from '../../assets/video.mp4'
import {useRef} from 'react';
const Videoplayer = ({playerstate,setplayerstate}) => {
    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target===player.current){
            setplayerstate(false)
        }
    }
    
  return (
    <div className={`videoplayer ${playerstate ? '':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer