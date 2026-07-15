
/* NEXT COMPONENT : GALLERY.TSX (PART 1A) */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
const gallery = [
  "/images/gallery/gallery1.jpeg",
  "/images/gallery/gallery2.jpeg",
  "/images/gallery/gallery3.jpeg",
  "/images/gallery/gallery4.jpeg",
  "/images/gallery/gallery7.jpeg",
  "/images/gallery/gallery6.jpeg",
  
];
export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: "110px 20px",
        background:
          "linear-gradient(180deg,#fff,#faf6ef,#fff)",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: "#C89B3C",
            letterSpacing: "4px",
            fontWeight: 700,
          }}
        >
          OUR GALLERY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          style={{
            textAlign: "center",
            color: "#7A1F2B",
            fontSize: "clamp(34px,5vw,52px)",
            fontWeight: 800,
            marginTop: "12px",
            marginBottom: "55px",
          }}
        >
          Beautiful Moments
          <br />
          Captured Forever
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          {gallery.map((img, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: .9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      delay: index * .08,
      duration: .5,
    }}
    whileHover={{ y: -10 }}
    style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "28px",
      cursor: "pointer",
      boxShadow: "0 20px 45px rgba(0,0,0,.12)",
    }}
  >
    <Image
      src={img}
      alt={`Gallery ${index + 1}`}
      width={600}
      height={450}
      style={{
        width: "100%",
        height: "340px",
        objectFit: "cover",
        transition: ".6s",
      }}
    />

    <motion.div
      whileHover={{ opacity: 1 }}
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(rgba(122,31,43,.15),rgba(122,31,43,.85))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0,
        transition: ".35s",
      }}
    >
      <motion.div
        whileHover={{
          rotate: 180,
          scale: 1.15,
        }}
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#7A1F2B",
          fontSize: "28px",
        }}
      >
        <FaSearchPlus />
      </motion.div>

      <h3
        style={{
          color: "#fff",
          marginTop: "22px",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        Luxury Event
      </h3>

      <p
        style={{
          color: "#eee",
          marginTop: "10px",
        }}
      >
        Click To View
      </p>
    </motion.div>
  </motion.div>
))}
</div>

        {/* Bottom Premium CTA */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .25 }}
          style={{
            marginTop: "80px",
            borderRadius: "35px",
            padding: "65px 30px",
            textAlign: "center",
            background:
              "linear-gradient(135deg,#7A1F2B,#A52A3B,#C89B3C)",
            color: "#fff",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 30px 70px rgba(122,31,43,.35)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background: "rgba(255,255,255,.08)",
              top: "-120px",
              right: "-80px",
              filter: "blur(15px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "rgba(255,255,255,.08)",
              bottom: "-110px",
              left: "-70px",
              filter: "blur(15px)",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(32px,5vw,50px)",
              fontWeight: 800,
              marginBottom: "20px",
            }}
          >
            Your Dream Event Starts Here ✨
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              lineHeight: "32px",
              color: "#f5f5f5",
              fontSize: "17px",
            }}
          >
            Weddings • Birthday Parties • Reception • Catering • Decoration •
            Corporate Events — We transform every celebration into a memorable
            experience with elegance and perfection.
          </p>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
            whileTap={{
              scale: .95,
            }}
            style={{
              marginTop: "35px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#fff",
              color: "#7A1F2B",
              padding: "18px 38px",
              borderRadius: "50px",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 18px 40px rgba(0,0,0,.20)",
            }}
          >
            Book Your Event Now →
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}