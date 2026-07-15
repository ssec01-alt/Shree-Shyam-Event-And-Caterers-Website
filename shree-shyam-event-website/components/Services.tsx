"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGlassCheers,
  FaBirthdayCake,
  FaUtensils,
  FaHeart,
  FaCamera,
  FaMusic,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHeart />,
    title: "Luxury Weddings",
    desc: "Royal wedding planning with premium decoration, hospitality and unforgettable celebrations.",
    color: "#D4AF37",
  },
  {
    icon: <FaBirthdayCake />,
    title: "Birthday Parties",
    desc: "Creative birthday themes with luxury decoration and exciting entertainment.",
    color: "#FF6B81",
  },
  {
    icon: <FaGlassCheers />,
    title: "Reception Events",
    desc: "Designer reception setups with floral decoration and stunning lighting.",
    color: "#9B5DE5",
  },
  {
    icon: <FaUtensils />,
    title: "Premium Catering",
    desc: "Delicious catering with royal presentation and professional service.",
    color: "#2EC4B6",
  },
  {
    icon: <FaCamera />,
    title: "Photography",
    desc: "Capture every unforgettable moment with cinematic photography.",
    color: "#4D96FF",
  },
  {
    icon: <FaMusic />,
    title: "DJ & Entertainment",
    desc: "Professional DJ, music, dance floor and live entertainment.",
    color: "#FF4D6D",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        padding: "100px 20px",
        background:
          "linear-gradient(180deg,#fffdf8 0%,#faf4eb 50%,#fffdf8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(212,175,55,.08)",
          filter: "blur(90px)",
          top: "-120px",
          left: "-100px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(122,31,43,.08)",
          filter: "blur(80px)",
          bottom: "-80px",
          right: "-80px",
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: "#C89B3C",
            letterSpacing: "4px",
            fontWeight: 700,
            fontSize: "15px",
          }}
        >
          OUR PREMIUM SERVICES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
          style={{
            textAlign: "center",
            color: "#7A1F2B",
            fontSize: "clamp(34px,5vw,52px)",
            lineHeight: 1.2,
            fontWeight: 800,
            marginTop: "12px",
          }}
        >
          Everything You Need
          <br />
          For A Royal Celebration
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 140 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          style={{
            height: "5px",
            margin: "22px auto 60px",
            borderRadius: "50px",
            background:
              "linear-gradient(90deg,#D4AF37,#fff,#D4AF37)",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "32px",
          }}
        >
          {services.map((service, index) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.12,
      duration: 0.6,
    }}
    whileHover={{
      y: -12,
      scale: 1.03,
    }}
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "30px",
      padding: "35px",
      background:
        hovered === index
          ? "linear-gradient(145deg,#fff,#fff8ef)"
          : "linear-gradient(145deg,#fff,#ffffff)",
      border: `1px solid ${service.color}25`,
      boxShadow:
        hovered === index
          ? "0 30px 70px rgba(0,0,0,.18)"
          : "0 18px 45px rgba(0,0,0,.10)",
      transition: ".35s",
    }}
  >
    {/* Top Border */}

    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "5px",
        background: `linear-gradient(90deg,${service.color},#fff,${service.color})`,
      }}
    />

    {/* Shine */}

    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(120deg,transparent,rgba(255,255,255,.45),transparent)",
        transform:
          hovered === index
            ? "translateX(220%)"
            : "translateX(-220%)",
        transition: "1s",
        pointerEvents: "none",
      }}
    />

    <motion.div
      whileHover={{
        rotate: 360,
        scale: 1.15,
      }}
      transition={{ duration: .8 }}
      style={{
        width: "85px",
        height: "85px",
        margin: "0 auto",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "34px",
        color: "#7A1F2B",
        background: `linear-gradient(135deg,${service.color},#fff)`,
        boxShadow:
          hovered === index
            ? `0 0 40px ${service.color}`
            : "0 12px 30px rgba(0,0,0,.15)",
      }}
    >
      {service.icon}
    </motion.div>

    <h3
      style={{
        marginTop: "25px",
        textAlign: "center",
        color: "#7A1F2B",
        fontSize: "25px",
        fontWeight: 700,
      }}
    >
      {service.title}
    </h3>

    <p
      style={{
        textAlign: "center",
        marginTop: "15px",
        color: "#666",
        lineHeight: "30px",
        fontSize: "16px",
      }}
    >
      {service.desc}
    </p>
    <motion.a
      href="#contact"
      whileHover={{
        scale: 1.06,
        x: 5,
      }}
      whileTap={{
        scale: 0.95,
      }}
      style={{
        marginTop: "28px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        width: "100%",
        padding: "15px",
        borderRadius: "50px",
        background: `linear-gradient(135deg,${service.color},#7A1F2B)`,
        color: "#fff",
        fontWeight: 700,
        textDecoration: "none",
        boxShadow:
          hovered === index
            ? "0 18px 40px rgba(122,31,43,.45)"
            : "0 10px 25px rgba(122,31,43,.25)",
      }}
    >
      Book This Service
      <FaArrowRight />
    </motion.a>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "28px",
        paddingTop: "20px",
        borderTop: "1px solid rgba(0,0,0,.08)",
      }}
    >
      <div style={{ textAlign: "center", flex: 1 }}>
        <h4
          style={{
            color: "#7A1F2B",
            margin: 0,
            fontSize: "22px",
          }}
        >
          500+
        </h4>

        <p
          style={{
            margin: "6px 0 0",
            color: "#777",
            fontSize: "13px",
          }}
        >
          Events
        </p>
      </div>

      <div style={{ textAlign: "center", flex: 1 }}>
        <h4
          style={{
            color: "#7A1F2B",
            margin: 0,
            fontSize: "22px",
          }}
        >
          4.9★
        </h4>

        <p
          style={{
            margin: "6px 0 0",
            color: "#777",
            fontSize: "13px",
          }}
        >
          Rating
        </p>
      </div>

      <div style={{ textAlign: "center", flex: 1 }}>
        <h4
          style={{
            color: "#7A1F2B",
            margin: 0,
            fontSize: "22px",
          }}
        >
          24/7
        </h4>

        <p
          style={{
            margin: "6px 0 0",
            color: "#777",
            fontSize: "13px",
          }}
        >
          Support
        </p>
      </div>
    </div>

  </motion.div>
))}
</div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          style={{
            marginTop: "90px",
            borderRadius: "35px",
            padding: "60px 30px",
            textAlign: "center",
            background:
              "linear-gradient(135deg,#7A1F2B,#A52A3B,#C89B3C)",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 30px 70px rgba(122,31,43,.30)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "rgba(255,255,255,.08)",
              top: "-120px",
              right: "-70px",
              filter: "blur(20px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "rgba(255,255,255,.08)",
              bottom: "-80px",
              left: "-40px",
              filter: "blur(20px)",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(32px,5vw,48px)",
              marginBottom: "20px",
              fontWeight: 800,
            }}
          >
            Lets Make Your Event Unforgettable ✨
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              lineHeight: "32px",
              color: "#f8f8f8",
              fontSize: "17px",
            }}
          >
            From intimate family gatherings to grand weddings and
            corporate events, our team delivers premium decoration,
            delicious catering and flawless event management.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "35px",
              padding: "18px 36px",
              borderRadius: "50px",
              background: "#fff",
              color: "#7A1F2B",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 20px 45px rgba(0,0,0,.20)",
            }}
          >
            Get Free Consultation
            <FaArrowRight />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
/* PART 2B */

/* Hero Floating Badge */

<motion.div
  initial={{ opacity: 0, scale: .8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: .4 }}
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "70px",
  }}
>
  <div
    style={{
      background: "#fff",
      borderRadius: "60px",
      padding: "18px 30px",
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      justifyContent: "center",
      boxShadow: "0 18px 45px rgba(0,0,0,.12)",
      border: "1px solid rgba(200,155,60,.25)",
    }}
  >
    {[
      ["12+", "Years Experience"],
      ["500+", "Events"],
      ["1000+", "Happy Clients"],
      ["100%", "Satisfaction"],
    ].map((item) => (
      <div
        key={item[1]}
        style={{
          textAlign: "center",
          minWidth: "120px",
        }}
      >
        <h3
          style={{
            color: "#7A1F2B",
            fontSize: "30px",
            margin: 0,
            fontWeight: 800,
          }}
        >
          {item[0]}
        </h3>

        <p
          style={{
            margin: "8px 0 0",
            color: "#777",
            fontSize: "14px",
          }}
        >
          {item[1]}
        </p>
      </div>
    ))}
  </div>
</motion.div>

/* END OF SERVICES.TSX */
/* SERVICES COMPLETE ✅ */
