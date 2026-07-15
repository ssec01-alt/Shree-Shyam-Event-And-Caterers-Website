"use client";

import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (muted) {
      audioRef.current.muted = false;
      audioRef.current.play();
    } else {
      audioRef.current.muted = true;
    }

    setMuted(!muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        autoPlay
        loop
        playsInline
      >
        <source src="/audio/welcome.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMute}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "none",
          background: "#F5D27B",
          color: "#7A1F2B",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 8px 20px rgba(0,0,0,.3)",
        }}
      >
        {muted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>
    </>
  );
}