"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { BiLeftArrow } from "react-icons/bi";
import { MdHeight } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          transition: ".35s",
         background: scroll
  ? "linear-gradient(90deg,#7A1F2B,#8C2232)"
  : "rgba(122,31,43,.60)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div
          className="container"
          style={{
            height: "85px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}

         {/* Premium Logo Area */}

<div
  style={{
    display: "flex",
    alignItems: "center",
gap:"12px",

  }}
>
  <div
    style={{
      position: "relative",
      width: 58,
      height: 58,
    }}
  >
    {/* Glow */}
    
    <Image
      src="/logo.png"
      alt="Shree Shyam Events"
      width={120}
      height={120}
      
      style={{
         display:"block",
        objectFit:"contain",
      marginTop:"-26px",
      marginLeft:"10px",
      }}
    />
  </div>

  <div>
    <h2
      style={{
        margin: 0,
        color: "#fff",
        fontWeight: 800,
        fontSize: "21px",
        lineHeight: 1,
      }}
    >
      SHREE SHYAM
    </h2>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginTop: 5,
      }}
    >
      
      <p
        style={{
          margin: 0,
          color: "#F5D27B",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        EVENT & CATERERS
      </p>
    </div>
  </div>
</div>

          {/* Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,.12)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}

      <div
        style={{
          position: "fixed",
          top: "78px",
          right: open ? "0" : "-100%",
          width: "82%",
          maxWidth: "340px",
          height: "calc(100vh - 78px)",
          background: "rgba(122,31,43,.98)",
          backdropFilter: "blur(18px)",
          transition: "0.35s ease",
          padding: "30px 25px",
          zIndex: 9998,
          boxShadow: "-10px 0 30px rgba(0,0,0,.25)",
        }}
      >
        {[
          "Home",
          "About",
          "Owner",
          "Services",
          "Gallery",
          "Reviews",
          "Contact",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "600",
              padding: "16px 0",
              borderBottom: "1px solid rgba(255,255,255,.08)",
            }}
          >
            {item}
          </a>
        ))}

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <a
            href="tel:9829070549"
            style={{
              background: "#F5D27B",
              color: "#7A1F2B",
              padding: "16px",
              borderRadius: "50px",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919829070549"
            target="_blank"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "16px",
              borderRadius: "50px",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.35)",
            zIndex: 9997,
          }}
        />
      )}
    </>
  );
}