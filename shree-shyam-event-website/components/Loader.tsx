"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .8 }}
          style={{
            position: "fixed",
            inset: 0,
            background:
              "linear-gradient(135deg,#4A0E18,#7A1F2B,#A52A3B)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 999999,
          }}
        >
          {/* Gold Glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            style={{
              position: "absolute",
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: "#F5D27B30",
              filter: "blur(50px)",
            }}
          />

          <motion.div
            
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={400}
              height={400}
              style={{
                width:"400px",
                height:"400px",
                objectFit:"contain",
              }}
            />
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .5,
            }}
            style={{
              color: "#fff",
              marginTop: "-80px",
              fontSize: "45px",
              textAlign: "center",
              lineHeight: "42px",
            }}
          >
            Shree Shyam
            <br />
            Event & Caterers
          </motion.h1>

          <motion.p
            animate={{
              opacity: [.3, 1, .3],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            style={{
              color: "#F5D27B",
              letterSpacing: "4px",
              marginTop: "18px",
            }}
          >
            LOADING...
          </motion.p>

          {/* Progress */}

          <div
            style={{
              width: "220px",
              height: "5px",
              background: "#ffffff25",
              borderRadius: "30px",
              overflow: "hidden",
              marginTop: "28px",
            }}
          >
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 2.6,
              }}
              style={{
                height: "100%",
                background: "#F5D27B",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
