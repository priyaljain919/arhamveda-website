import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Mail, Globe, Phone } from "lucide-react";

export default function ContactCTA() {

  const whatsappLink =
    "https://wa.me/918815099150?text=Hi,%20I%20want%20to%20order%20Arhamveda%20Pain%20Relief%20Oil.";

  const flipkartLink =
    "https://dl.flipkart.com/dl/arhamveda-pain-relief-oil-joint-muscle-back-swelling-liquid/p/itm0057666321c6a?pid=BPRHNHAPZXDQGW9H";

  return (

    <section
      style={{
        padding: "120px 0",
        background: "#18392B",
        color: "white",
        overflow: "hidden",
      }}
    >

      <div className="container">

        <motion.div

          initial={{ opacity: 0, y: 25 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.7 }}

          viewport={{ once: true }}

          style={{

            textAlign: "center",

            maxWidth: "900px",

            margin: "auto"

          }}

        >

          <p

            style={{

              color: "#C7A04C",

              fontWeight: "700",

              letterSpacing: "2px",

              marginBottom: "20px"

            }}

          >

            CONTACT ARHAMVEDA

          </p>

          <h2

            style={{

              fontSize: "58px",

              lineHeight: "1.2",

              marginBottom: "30px"

            }}

          >

            Start Your Wellness Journey

            <br />

            with ARHAMVEDA

          </h2>

          <p

            style={{

              color: "#D5D5D5",

              fontSize: "19px",

              lineHeight: "1.9",

              maxWidth: "750px",

              margin: "auto"

            }}

          >

            Inspired by ancient Ayurvedic wisdom and crafted with premium herbal ingredients,

            ARHAMVEDA Pain Relief Oil is designed to become a part of your daily wellness routine.

          </p>

        </motion.div>

        {/* BUTTONS */}

        <motion.div

          initial={{ opacity: 0, y: 25 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

          style={{

            display: "flex",

            justifyContent: "center",

            gap: "25px",

            flexWrap: "wrap",

            marginTop: "55px",

            marginBottom: "80px"

          }}

        >

          <a

            href={flipkartLink}

            target="_blank"

            rel="noreferrer"

            style={{

              display: "flex",

              alignItems: "center",

              gap: "12px",

              padding: "18px 34px",

              borderRadius: "999px",

              background: "#C7A04C",

              color: "#18392B",

              fontWeight: "700",

              fontSize: "18px"

            }}

          >

            <ShoppingBag size={22} />

            Buy on Flipkart

          </a>

          <a

            href={whatsappLink}

            target="_blank"

            rel="noreferrer"

            style={{

              display: "flex",

              alignItems: "center",

              gap: "12px",

              padding: "18px 34px",

              borderRadius: "999px",

              background: "#25D366",

              color: "white",

              fontWeight: "700",

              fontSize: "18px"

            }}

          >

            <MessageCircle size={22} />

            Chat on WhatsApp

          </a>

        </motion.div>

        {/* CONTACT CARDS */}

        <div

          style={{

            display: "grid",

            gridTemplateColumns:

              "repeat(auto-fit,minmax(250px,1fr))",

            gap: "30px"

          }}

        >

          <motion.div

            whileHover={{ y: -8 }}

            style={{

              background: "rgba(255,255,255,0.06)",

              padding: "35px",

              borderRadius: "28px",

              backdropFilter: "blur(10px)"

            }}

          >

            <Phone

              size={36}

              color="#C7A04C"

            />

            <h3

              style={{

                marginTop: "25px",

                marginBottom: "15px"

              }}

            >

              Phone / WhatsApp

            </h3>

            <p

              style={{

                color: "#D5D5D5"

              }}

            >

              +91 88150 99150

            </p>

          </motion.div>

          <motion.div

            whileHover={{ y: -8 }}

            style={{

              background: "rgba(255,255,255,0.06)",

              padding: "35px",

              borderRadius: "28px",

              backdropFilter: "blur(10px)"

            }}

          >

            <Mail

              size={36}

              color="#C7A04C"

            />

            <h3

              style={{

                marginTop: "25px",

                marginBottom: "15px"

              }}

            >

              Email

            </h3>

            <p

              style={{

                color: "#D5D5D5"

              }}

            >

              arhamveda@gmail.com

            </p>

          </motion.div>

          <motion.div

            whileHover={{ y: -8 }}

            style={{

              background: "rgba(255,255,255,0.06)",

              padding: "35px",

              borderRadius: "28px",

              backdropFilter: "blur(10px)"

            }}

          >

            <Globe

              size={36}

              color="#C7A04C"

            />

            <h3

              style={{

                marginTop: "25px",

                marginBottom: "15px"

              }}

            >

              Website

            </h3>

            <p

              style={{

                color: "#D5D5D5"

              }}

            >

              arhamveda.com

            </p>

          </motion.div>

        </div>

      </div>

    </section>

  );

}