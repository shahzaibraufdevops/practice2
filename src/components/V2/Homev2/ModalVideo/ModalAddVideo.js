import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

import "./PlayButton.css";

const ModalAddVideo = ({ cName }) => {
  const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
        // window.fbq("track", "Video-watched");
    };
    return (
        <div className='' style={{ marginBottom: "" }}>
            <div>
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="9IIZpI4FQyw"
                    onClose={() => setOpen(false)}
                />
                {cName === "balloting" ? (
                    <>
                        <a onClick={() => handleClick()} className="play-btn"></a>
                    </>
                ) : (
                    <>
                        <a onClick={() => handleClick()} className="play-btn"></a>
                    </>
                )}
            </div>
        </div>
    )
}

export default ModalAddVideo
