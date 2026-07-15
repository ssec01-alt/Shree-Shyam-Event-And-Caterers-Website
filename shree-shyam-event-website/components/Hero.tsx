"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        paddingTop: "120px",
        background: "#f8f3ea",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "94%",
          margin: "0 auto",
          height: "88vh",
          minHeight: "650px",
          overflow: "hidden",
          borderRadius: "28px",
          boxShadow: "0 25px 60px rgba(0,0,0,.20)",
        }}
      >
        {/* Background Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.08)",
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.55))",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "25px",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .2 }}
              style={{
                color: "#F5D27B",
                letterSpacing: "5px",
                fontSize: "15px",
                fontWeight: 600,
                marginBottom: "15px",
              }}
            >
              SINCE 2012
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                scale: .9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: .4,
              }}
              style={{
                color: "#fff",
                fontSize: "48px",
                lineHeight: "1.05",
                margin: 0,
              }}
            >
              SHREE SHYAM
            </motion.h1>

            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .6,
              }}
              style={{
                color: "#F5D27B",
                fontSize: "24px",
                marginTop: "8px",
                lineHeight: "1.2",
                marginBottom: "18px",
              }}
            >
              Event & Caterers
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .8,
              }}
              style={{
                color: "#fff",
                maxWidth: "360px",
                margin: "0 auto",
                lineHeight: "30px",
                fontSize: "17px",
              }}
            >
              Creating unforgettable weddings,
              birthdays, receptions,
              luxury decorations and premium
              catering experiences across Rajasthan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                marginTop: "35px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:9829070549"
               style={{
  background: "linear-gradient(135deg,#B22234,#D94F70)",
  color: "#fff",
  padding: "16px 28px",
  borderRadius: "50px",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textDecoration: "none",
  boxShadow: "0 0 20px rgba(217,79,112,.45)",
  border: "2px solid rgba(255,255,255,.15)",
  transition: "all .35s ease",
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-6px) scale(1.06)";
  e.currentTarget.style.boxShadow =
    "0 0 35px rgba(217,79,112,.8)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow =
    "0 0 20px rgba(217,79,112,.45)";
}}
              >
                📞 Call Now
              </a>

              <a
  href="https://wa.me/919829070549"
  target="_blank"
  style={{
    background: "linear-gradient(135deg,#25D366,#128C7E)",
    color: "#fff",
    padding: "16px 28px",
    borderRadius: "50px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textDecoration: "none",
    boxShadow: "0 0 20px rgba(37,211,102,.45)",
    transition: "all .35s ease",
    border: "2px solid rgba(255,255,255,.15)",
    backdropFilter: "blur(10px)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px) scale(1.06)";
    e.currentTarget.style.boxShadow =
      "0 0 35px rgba(37,211,102,.8)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 0 20px rgba(37,211,102,.45)";
  }}
>
  💬 WhatsApp Us
</a>
            </motion.div>

            {/* Scroll Indicator */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              style={{
                marginTop: "55px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#F5D27B",
                  letterSpacing: "3px",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                SCROLL
              </span>

              <div
                style={{
                  width: "28px",
                  height: "48px",
                  border: "2px solid #F5D27B",
                  borderRadius: "30px",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "8px",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, 14, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                  }}
                  style={{
                    width: "5px",
                    height: "10px",
                    borderRadius: "20px",
                    background: "#F5D27B",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gradient */}

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "140px",
            background:
              "linear-gradient(to top,#00000055,transparent)",
          }}
        />
      </div>
    </section>
  );
}
