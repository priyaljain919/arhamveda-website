import { motion } from "framer-motion";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/918815099150?text=Hi,%20I%20want%20to%20order%20Arhamveda%20Pain%20Relief%20Oil.";

  const flipkartLink =
    "https://dl.flipkart.com/dl/arhamveda-pain-relief-oil-joint-muscle-back-swelling-liquid/p/itm0057666321c6a?pid=BPRHNHAPZXDQGW9H";

  return (
    <section
      style={{
        background: "#F8F5EF",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              color: "#C7A04C",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            AN ANCIENT AYURVEDA
          </p>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.1",
              color: "#18392B",
              marginBottom: "25px",
              fontWeight: "700",
            }}
          >
            Ancient Ayurvedic Wisdom,
            <br />
            Crafted for Modern Wellness.
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "600px",
              marginBottom: "35px",
            }}
          >
            Premium Ayurvedic massage oil inspired by traditional herbal wisdom
            and crafted for your everyday wellness routine.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={flipkartLink}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#18392B",
                color: "#fff",
                padding: "16px 30px",
                borderRadius: "999px",
                fontWeight: "600",
              }}
            >
              Buy on Flipkart
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "16px 30px",
                borderRadius: "999px",
                fontWeight: "600",
              }}
            >
              Chat on WhatsApp
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "50px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3 style={{ color: "#18392B" }}>100%</h3>
              <p>Ayurvedic</p>
            </div>

            <div>
              <h3 style={{ color: "#18392B" }}>50 ml</h3>
              <p>Premium Bottle</p>
            </div>

            <div>
              <h3 style={{ color: "#18392B" }}>Daily</h3>
              <p>Wellness Companion</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            {/* GOLD GLOW */}

            <div
              style={{
                width: "450px",
                height: "450px",
                background:
                  "radial-gradient(circle,#C7A04C33 0%, transparent 70%)",

                position: "absolute",

                top: "50%",

                left: "50%",

                transform: "translate(-50%,-50%)",

                borderRadius: "50%",
              }}
            />

            <img
              src="/product.png"
              alt="ARHAMVEDA Pain Relief Oil"
              style={{
                width: "450px",
                position: "relative",
                zIndex: 10,
                filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.2))",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}