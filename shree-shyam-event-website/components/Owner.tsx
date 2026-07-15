"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Owner() {
  return (
    <section
      id="owner"
      style={{
        background: "#fff",
        padding: "90px 18px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Owner Image */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          style={{
            position: "relative",
            borderRadius: "30px",
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0,0,0,.18)",
          }}
        >
          <Image
            src="/images/owner.jpg"
            alt="Owner"
            width={600}
            height={750}
            style={{
              width: "100%",
              height: "450px",
              objectFit: "contain",
              borderRadius:"25px",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top,rgba(0,0,0,.55),transparent)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "25px",
              left: "25px",
              color: "#fff",
            }}
          >
            <h3
              style={{
                fontSize: "32px",
                margin: 0,
              }}
            >
              Founder
            </h3>

            <p
              style={{
                marginTop: "8px",
                color: "#F5D27B",
                fontSize: "18px",
              }}
            >
              Shree Shyam Event & Caterers
            </p>
          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              color: "#C89B3C",
              letterSpacing: "3px",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            OUR FOUNDER
          </p>

          <h2
            style={{
              color: "#7A1F2B",
              fontSize: "36px",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Passion Behind Every
            Celebration
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "31px",
              fontSize: "16px",
            }}
          >
            With over 12 years of experience in event
            management and premium catering, our founder
            believes every celebration should feel unique,
            elegant and unforgettable. From intimate family
            functions to grand weddings, every event is
            planned with creativity, dedication and
            perfection.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "15px",
              marginTop: "35px",
            }}
          >
            {[
              {
                title: "12+",
                sub: "Years Experience",
              },
              {
                title: "500+",
                sub: "Successful Events",
              },
              {
                title: "1000+",
                sub: "Happy Families",
              },
              {
                title: "24×7",
                sub: "Customer Support",
              },
            ].map((item) => (
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                key={item.sub}
                style={{
                  background: "#fffaf5",
                  borderRadius: "20px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                }}
              >
                <h3
                  style={{
                    color: "#7A1F2B",
                    fontSize: "32px",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: "8px",
                    color: "#666",
                    fontWeight: 600,
                  }}
                >
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}

          <div
            style={{
              marginTop: "35px",
              background: "#7A1F2B",
              borderRadius: "24px",
              padding: "28px",
              color: "#fff",
            }}
          >
            <p
              style={{
                lineHeight: "30px",
                fontStyle: "italic",
                fontSize: "17px",
              }}
            >
              Our mission is not just to organize an event,
              but to create unforgettable memories that every
              family will cherish forever.
            </p>

            <h3
              style={{
                color: "#F5D27B",
                marginTop: "18px",
                fontSize: "22px",
              }}
            >
              — Founder
            </h3>
          </div>

          {/* Mission */}

          <div
            style={{
              marginTop: "35px",
            }}
          >
            <h3
              style={{
                color: "#7A1F2B",
                marginBottom: "12px",
              }}
            >
              Our Mission
            </h3>

            <p
              style={{
                color: "#555",
                lineHeight: "30px",
              }}
            >
              To deliver premium event management, luxury
              decoration and exceptional catering services
              with complete customer satisfaction while making
              every celebration truly memorable.
            </p>
          </div>

          {/* Signature */}

          <h2
            style={{
              marginTop: "35px",
              color: "#C89B3C",
              fontFamily: "cursive",
              fontSize: "38px",
            }}
          >
            Shree Shyam Event & Caterers
          </h2>

        </motion.div>
      </div>
    </section>
  );
}