"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "12+", title: "Years Experience" },
  { number: "500+", title: "Events Managed" },
  { number: "1000+", title: "Happy Clients" },
  { number: "100%", title: "Client Satisfaction" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#fffaf5",
        padding: "80px 20px",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* VIDEO */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "30px",
            boxShadow: "0 20px 50px rgba(0,0,0,.25)",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "520px",
              objectFit: "cover",
              display: "block",
            }}
          >
            <source src="/videos/about.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,.45)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                textAlign: "center",
                maxWidth: "750px",
                color: "#fff",
              }}
            >
              <p
                style={{
                  color: "#FFD166",
                  letterSpacing: "4px",
                  marginBottom: "15px",
                  fontWeight: 700,
                }}
              >
                PREMIUM EVENT PLANNING
              </p>

              <h2
                style={{
                  fontSize: "48px",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                  fontWeight: 700,
                }}
              >
                Every Celebration Deserves
                <br />
                Perfection ✨
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.8,
                  color: "#eee",
                }}
              >
                Luxury Weddings • Birthday Parties • Reception • Catering •
                Corporate Events • Decoration
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT */}

        <div style={{ marginTop: "70px" }}>
          <p
            style={{
              color: "#B8860B",
              letterSpacing: "3px",
              fontWeight: 700,
            }}
          >
            ABOUT SHREE SHYAM EVENT & CATERERS
          </p>

          <h2
            style={{
              color: "#7A1F2B",
              fontSize: "42px",
              margin: "15px 0",
            }}
          >
            Creating Grand Celebrations
            <br />
            Since 2012
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: 1.9,
              fontSize: "17px",
            }}
          >
            We specialize in creating unforgettable weddings, birthdays,
            receptions, corporate events and premium catering experiences.
            Every event is designed with creativity, elegance and perfection
            to leave lifelong memories.
          </p>

          {/* STATS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "20px",
              marginTop: "45px",
            }}
          >
            {stats.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "#fff",
                  borderRadius: "25px",
                  padding: "30px",
                  textAlign: "center",
                  boxShadow: "0 15px 35px rgba(0,0,0,.08)",
                }}
              >
                <h2
                  style={{
                    color: "#7A1F2B",
                    fontSize: "40px",
                    marginBottom: "10px",
                  }}
                >
                  {item.number}
                </h2>

                <p
                  style={{
                    color: "#666",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}

          <motion.a
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="#services"
            style={{
              display: "inline-block",
              marginTop: "45px",
              padding: "16px 34px",
              borderRadius: "50px",
              textDecoration: "none",
              background:
                "linear-gradient(135deg,#7A1F2B,#C44569)",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 15px 30px rgba(122,31,43,.35)",
            }}
          >
            Explore Our Services →
          </motion.a>
        </div>
      </div>
    </section>
  );
}