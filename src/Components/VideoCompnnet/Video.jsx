import React, { useRef, useState } from "react";
import "./Video.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants/index";
const Video = () => {
  const [play, setPlay] = useState(true);
  const VidRef = useRef();
  function handleVideo() {
    setPlay(!play);
    if (play) {
      VidRef.current.play();
    } else {
      VidRef.current.pause();
    }
  }

  return (
    <div className="video-container">
      <video
        src={meal}
        ref={VidRef}
        type="video/mp4"
        controls={false}
        muted
        loop
      ></video>
      <div className="btn-container">
        <div className="btn" onClick={handleVideo}>
          {play ? <BsFillPlayFill /> : <BsPauseFill />}
        </div>
      </div>
    </div>
  );
};

export default Video;
