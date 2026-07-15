"use client";

import { useState, useRef } from "react";

export default function WelcomePopup() {
  const [show, setShow] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    audioRef.current?.play();
    setShow(false);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/welcome.mp3" type="audio/mpeg" />
      </audio>

      {show && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "16px",
              textAlign: "center",
              maxWidth: "420px",
            }}
          >
            <h2 style={{ color: "#7A1F2B" }}>
              🌸 Welcome to Shree Shyam Event & Caterers
            </h2>

            <p>
              Experience premium catering & unforgettable events.
            </p>

            <button
              onClick={handleEnter}
              style={{
                marginTop: "20px",
                padding: "12px 30px",
                border: "none",
                borderRadius: "10px",
                background: "#7A1F2B",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              🔊 Enter Website
            </button>
          </div>
        </div>
      )}
    </>
  );
}