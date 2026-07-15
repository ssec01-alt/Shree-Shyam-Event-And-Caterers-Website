"use client";

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const links = [
  "https://www.instagram.com/shree_shyam_event_and_cateres?igsh=MWJjam8zOHByczM5aQ==",
  "https://www.facebook.com/share/1Cm2ujzP7D/",
  "https://wa.me/919829070549",
];
  return (
    <footer
      style={{
        background: "#4A0E18",
        color: "#fff",
        padding: "70px 20px 120px",
        position: "relative",
      }}
    >
      <div className="container">

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={400}
            height={400}
            style={{
                width:"400px",
                height:"400px",
                objectFit:"contain",
            }}
          />
        </div>

        <h2
          style={{
            textAlign: "center",
            color: "#F5D27B",
            fontSize: "30px",
            lineHeight: "42px",
            marginTop:"-20px",
           
          }}
        >
          Shree Shyam
          <br />
          Event & Caterers
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#ddd",
            lineHeight: "30px",
            marginTop: "-10px",
          }}
        >
          Making weddings, birthdays, receptions,
          corporate events and premium catering
          unforgettable since 2012.
        </p>

        {/* Social */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            marginTop: "35px",
          }}
        >
        
          {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, i) => (
  <a
    key={i}
    href={links[i]}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      width: "55px",
      height: "55px",
      borderRadius: "50%",
      background: "rgba(255,255,255,.08)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: "blur(12px)",
      color: "#fff",
      textDecoration: "none",
    }}
  >
    <Icon size={22} />
  </a>
))}
        </div>

        <hr
          style={{
            margin: "40px 0",
            borderColor: "#ffffff20",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "center",
            color: "#ddd",
          }}
        >
          <p>📍 Jaipur, Rajasthan</p>

          <p>📞 +91 98290 70549</p>

          <p>✨ Since 2012</p>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "#999",
            fontSize: "14px",
          }}
        >
          © 2026 Shree Shyam Event & Caterers
          <br />
          All Rights Reserved.
        </p>
        {/* Floating Buttons */}

        <a
          href="tel:9829070549"
          style={{
            position: "fixed",
            right: "18px",
            bottom: "100px",
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#7A1F2B,#A52A3B)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            boxShadow: "0 15px 35px rgba(122,31,43,.35)",
            zIndex: 999,
            textDecoration: "none",
          }}
        >
          <FaPhoneAlt size={22} />
        </a>

        <a
          href="https://wa.me/919829070549"
          target="_blank"
          style={{
            position: "fixed",
            right: "18px",
            bottom: "28px",
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            boxShadow: "0 15px 35px rgba(37,211,102,.35)",
            zIndex: 999,
            textDecoration: "none",
          }}
        >
          <FaWhatsapp size={24} />
        </a>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          style={{
            position: "fixed",
            left: "18px",
            bottom: "28px",
            width: "55px",
            height: "55px",
            border: "none",
            borderRadius: "50%",
            background: "#F5D27B",
            color: "#7A1F2B",
            fontSize: "24px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 12px 30px rgba(245,210,123,.35)",
            zIndex: 999,
          }}
        >
          ↑
        </button>

      </div>
    </footer>
  );
}
