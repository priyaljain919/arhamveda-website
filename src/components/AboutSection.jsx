import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "120px 0",
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
            marginBottom: "80px",
          }}
        >
          <p
            style={{
              color: "#C7A04C",
              letterSpacing: "2px",
              fontWeight: "700",
            }}
          >
            ABOUT ARHAMVEDA
          </p>

          <h2
            style={{
              fontSize: "52px",
              color: "#18392B",
              marginTop: "15px",
              marginBottom: "20px",
            }}
          >
            Ancient Wisdom.
            <br />
            Modern Excellence.
          </h2>

          <p
            style={{
              maxWidth: "800px",
              margin: "auto",
              fontSize: "19px",
              lineHeight: "1.9",
              color: "#666",
            }}
          >
            ARHAMVEDA was founded with a simple belief:
            Ayurveda deserves to be experienced in its purest
            and most premium form.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
          }}
        >

          {/* WHY WE STARTED */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              background: "#F8F5EF",
              borderRadius: "30px",
              padding: "45px",
              boxShadow:
                "0 12px 40px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                color: "#18392B",
                fontSize: "32px",
                marginBottom: "25px",
              }}
            >
              Why We Started
            </h3>

            <p
              style={{
                lineHeight: "1.9",
                color: "#555",
                fontSize: "17px",
              }}
            >
              Inspired by ancient Ayurvedic wisdom,
              we set out to create thoughtfully crafted
              wellness products that combine traditional
              practices with modern quality standards.

              <br />
              <br />

              Our mission is to make Ayurveda a part
              of everyday life through products that are
              premium, trustworthy, and accessible.
            </p>
          </motion.div>

          {/* OUR VISION */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              background: "#18392B",
              borderRadius: "30px",
              padding: "45px",
              color: "white",
              boxShadow:
                "0 12px 40px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                color: "#C7A04C",
                fontSize: "32px",
                marginBottom: "25px",
              }}
            >
              Our Vision
            </h3>

            <p
              style={{
                lineHeight: "1.9",
                fontSize: "17px",
              }}
            >
              Our vision is to build a complete Ayurvedic
              wellness ecosystem that people can trust.

              <br />
              <br />

              We are committed to offering carefully
              formulated products made with high-quality
              ingredients, transparent practices, and an
              unwavering commitment to excellence and value.
            </p>
          </motion.div>

        </div>

        {/* WHAT MAKES US DIFFERENT */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            marginTop: "70px",
            background: "#F8F5EF",
            padding: "50px",
            borderRadius: "35px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "#18392B",
              fontSize: "38px",
              marginBottom: "45px",
            }}
          >
            What Makes ARHAMVEDA Different
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "30px",
            }}
          >
            {[
              "Premium Raw Materials",
              "Inspired by Ayurvedic Traditions",
              "Modern Quality Standards",
              "No Compromise on Quality",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "22px",
                  textAlign: "center",
                  boxShadow:
                    "0 8px 30px rgba(0,0,0,0.05)",
                }}
              >
                <h4
                  style={{
                    color: "#18392B",
                    fontSize: "22px",
                  }}
                >
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}