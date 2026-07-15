"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Rahul Sharma",
    image: "/images/clients/1.jpg",
    review:
      "Decoration, catering and management were absolutely amazing. Everything was perfectly organized.",
  },
  {
    name: "Priya Agarwal",
    image: "/images/clients/2.jpg",
    review:
      "Best event management company. Staff was polite and food quality was outstanding.",
  },
  {
    name: "Amit Verma",
    image: "/images/clients/3.jpg",
    review:
      "Our wedding became unforgettable because of Shree Shyam Event & Caterers. Highly recommended.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        background: "#f8f3ea",
        padding: "90px 18px",
      }}
    >
      <div className="container">

        <p
          style={{
            textAlign: "center",
            color: "#C89B3C",
            letterSpacing: "3px",
            fontWeight: 700,
          }}
        >
          HAPPY CLIENTS
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#7A1F2B",
            fontSize: "36px",
            marginTop: "12px",
            marginBottom: "45px",
          }}
        >
          What Our Clients Say
        </h2>

        <div
          style={{
            display: "grid",
            gap: "22px",
          }}
        >
          {reviews.map((item) => (
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              key={item.name}
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "28px",
                boxShadow: "0 18px 40px rgba(0,0,0,.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={65}
                  height={65}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #F5D27B",
                  }}
                />

                <div>
                  <h3
                    style={{
                      margin: 0,
                      color: "#7A1F2B",
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      color: "#F5B301",
                      marginTop: "4px",
                    }}
                  >
                    ⭐⭐⭐⭐⭐
                  </p>
                </div>
              </div>

              <p
                style={{
                  marginTop: "22px",
                  color: "#666",
                  lineHeight: "30px",
                }}
              >
                {item.review}
              </p>
            </motion.div>
          ))}
          </div>

        {/* Premium Rating Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          style={{
            marginTop: "45px",
            borderRadius: "30px",
            padding: "35px 25px",
            background: "linear-gradient(135deg,#7A1F2B,#A52A3B)",
            color: "#fff",
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(122,31,43,.30)",
          }}
        >
          <h2
            style={{
              fontSize: "52px",
              color: "#F5D27B",
              margin: 0,
            }}
          >
            4.9★
          </h2>

          <h3
            style={{
              marginTop: "12px",
              fontSize: "26px",
            }}
          >
            Trusted by Hundreds of Happy Families
          </h3>

          <p
            style={{
              color: "#F8E7B5",
              lineHeight: "30px",
              marginTop: "15px",
            }}
          >
            Every wedding, birthday, reception and catering
            event is handled with dedication, creativity and
            attention to every detail.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30px",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <h2 style={{ color: "#F5D27B", margin: 0 }}>500+</h2>
              <p style={{ marginTop: "6px" }}>Events</p>
            </div>

            <div>
              <h2 style={{ color: "#F5D27B", margin: 0 }}>1000+</h2>
              <p style={{ marginTop: "6px" }}>Happy Clients</p>
            </div>

            <div>
              <h2 style={{ color: "#F5D27B", margin: 0 }}>12+</h2>
              <p style={{ marginTop: "6px" }}>Years Experience</p>
            </div>
          </div>

          <a
            href="#contact"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "16px 34px",
              background: "#F5D27B",
              color: "#7A1F2B",
              borderRadius: "50px",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 12px 30px rgba(245,210,123,.35)",
            }}
          >
            Book Your Event Today →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
