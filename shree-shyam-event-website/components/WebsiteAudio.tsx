"use client";

import { useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function WebsiteAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [showPopup, setShowPopup] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
    setShowPopup(false);
  };

  const skip = () => {
    setShowPopup(false);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/welcome.mp3"
        onEnded={() => setIsPlaying(false)}
      />

      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "30px",
              width: "90%",
              maxWidth: "420px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#7A1F2B" }}>
              🌸 Welcome to Shree Shyam Event & Caterers
            </h2>

            <p style={{ marginTop: "15px", lineHeight: "28px" }}>
              Experience premium catering, luxury weddings and unforgettable
              celebrations.
            </p>

            <button
              onClick={startExperience}
              style={{
                marginTop: "25px",
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "12px",
                background: "#7A1F2B",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Enter Website
            </button>

           
          </div>
        </div>
      )}
      {!showPopup && (
        <button
          onClick={toggleAudio}
          style={{
            position: "fixed",
            right: "20px",
            top: "90px",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            border: "none",
            background: "#7A1F2B",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,0,0,.3)",
            zIndex: 9999,
          }}
        >
          {isPlaying ? <FaVolumeMute size={22} /> : <FaVolumeUp size={22} />}
        </button>
      )}
    </>
  );
}