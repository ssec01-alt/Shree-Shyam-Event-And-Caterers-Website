"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, type FormEvent } from "react";

export default function Contact() {

const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_al3ng5f",
      "template_m9aevib",
      form.current!,
      "ZML9JQxlwbMzi_vZp"
    )
    .then(() => {
      alert("🎉 Thank You! We will contact you soon.");
      form.current?.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("❌ Failed to send enquiry.");
    });
};



return(

<section

id="contact"

style={{

padding:"90px 18px",

background:"#fff"

}}

>

<div
  className="container"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
    gap: "40px",
    alignItems: "start",
  }}
>
<div style={{gridColumn:"1/-1"}} >
<p

style={{

color:"#C89B3C",

letterSpacing:"3px",

fontWeight:"700",

textAlign:"center"

}}

>

CONTACT US

</p>

<h2

style={{

fontSize:"36px",

color:"#7A1F2B",

textAlign:"center",

marginTop:"10px",

marginBottom:"40px"

}}

>

Lets Plan Your Dream Event

</h2>
</div>
<motion.form

ref={form}

onSubmit={sendEmail}

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

style={{
  background:"#fff",
  padding:"35px",
  borderRadius:"30px",
  boxShadow:"0 20px 60px rgba(0,0,0,.10)",
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
  gap:"18px",
  alignItems:"center"
}}

>

<input

name="name"

placeholder="Your Name"

required

style={{

padding:"16px",

borderRadius:"14px",

border:"1px solid #ddd",

fontSize:"16px"

}}

/>

<input

name="phone"

placeholder="Mobile Number"

required

style={{

padding:"16px",

borderRadius:"14px",

border:"1px solid #ddd",

fontSize:"16px"

}}

/>

<input

name="email"

placeholder="Email Address"

style={{

padding:"16px",

borderRadius:"14px",

border:"1px solid #ddd",

fontSize:"16px"

}}

/>

<textarea
  name="message"
  rows={5}
  placeholder="Tell us about your event..."
  style={{
    gridColumn: "1 / -1",
    padding: "18px",
    borderRadius: "16px",
    border: "1px solid #ddd",
    fontSize: "16px",
    resize: "none",
    outline: "none",
  }}
/>
<motion.button
  whileHover={{
    scale: 1.03,
    y: -2,
  }}
  whileTap={{
    scale: 0.97,
  }}
  type="submit"
  style={{
    gridColumn: "1 / -1",
    padding: "18px",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg,#7A1F2B,#A52A3B)",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 15px 35px rgba(122,31,43,.30)",
  }}
>
  Send Enquiry →
</motion.button>
        </motion.form>

        {/* Contact Cards */}

        <div
          style={{
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
  gap:"22px",
  marginTop:"35px",
  alignItems:"stretch"
}}
        >
          <motion.a
          whileHover={{y:-8,
            scale:1.03,
          }}
            href="tel:9829070549"
            style={{
              background: "#7A1F2B",
              color: "#fff",
              padding: "22px",
              borderRadius: "22px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              textDecoration: "none",
            }}
          >
            <FaPhoneAlt size={24} />
            <div>
              <h3 style={{ margin: 0 }}>Call Us</h3>
              <p style={{ margin: "5px 0 0" }}>+91 98290 70549</p>
            </div>
          </motion.a>

          <a
            href="https://wa.me/919829070549"
            target="_blank"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "22px",
              borderRadius: "22px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              textDecoration: "none",
            }}
          >
            <FaWhatsapp size={28} />
            <div>
              <h3 style={{ margin: 0 }}>WhatsApp</h3>
              <p style={{ margin: "5px 0 0" }}>
                Chat With Our Team
              </p>
            </div>
          </a>

          <motion.div
          whileHover={{y:-8,
            scale:1.03,
          }}
            style={{
              background: "#fffaf5",
              padding: "22px",
              borderRadius: "22px",
              display: "flex",
              gap: "15px",
            }}
          >
            <FaMapMarkerAlt
              color="#7A1F2B"
              size={28}
            />

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#7A1F2B",
                }}
              >
                Our Location
              </h3>

              <p
                style={{
                  color: "#666",
                  marginTop: "8px",
                  lineHeight: "28px",
                }}
              >
                Jaipur, Rajasthan
              </p>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}

        <iframe
          src="https://www.google.com/maps?q=Jaipur&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          style={{
            marginTop: "35px",
            border: "none",
            borderRadius: "28px",
            boxShadow:"0 20px 50px rgba(0,0,0,.15)",
            overflow:"hidden",
          }}
        />

      </div>
    </section>
  );
}