import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  Sparkles,
  Flower2,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Traditional Ayurvedic Wisdom",
    description:
      "Inspired by time-honored Ayurvedic formulations and herbal traditions.",
  },

  {
    icon: Droplets,
    title: "Lightweight Formula",
    description:
      "Easy-to-apply massage oil with a quick-absorbing, non-greasy feel.",
  },

  {
    icon: Sparkles,
    title: "Refreshing Aroma",
    description:
      "A soothing blend of herbal and essential oils with a pleasant fragrance.",
  },

  {
    icon: Flower2,
    title: "Selected Botanicals",
    description:
      "Crafted with carefully selected herbal oils and botanicals.",
  },

  {
    icon: ShieldCheck,
    title: "Everyday Wellness",
    description:
      "Designed to be a part of your daily wellness and self-care routine.",
  },

  {
    icon: HeartHandshake,
    title: "Active Lifestyle",
    description:
      "Supports an active and comfortable lifestyle inspired by Ayurveda.",
  },
];

export default function Benefits() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "100px 0",
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
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: "#C7A04C",
              letterSpacing: "2px",
              fontWeight: "700",
            }}
          >
            WHY CHOOSE ARHAMVEDA
          </p>

          <h2
            style={{
              fontSize: "48px",
              color: "#18392B",
              marginTop: "15px",
              marginBottom: "20px",
            }}
          >
            Crafted for Everyday Wellness
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "auto",
              color: "#666",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            ARHAMVEDA Pain Relief Oil combines premium herbal oils,
            traditional Ayurvedic inspiration, and modern quality standards
            to create a soothing wellness experience.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                style={{
                  background: "#F8F5EF",
                  borderRadius: "24px",
                  padding: "35px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.05)",
                  transition: "0.3s",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#C7A04C22",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "25px",
                  }}
                >
                  <Icon
                    size={34}
                    color="#18392B"
                  />
                </div>

                <h3
                  style={{
                    color: "#18392B",
                    fontSize: "24px",
                    marginBottom: "15px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.8",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}