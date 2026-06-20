import { motion } from "framer-motion";
import { Award, Leaf, ShieldCheck, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div>

      {/* HERO */}

      <section
        style={{
          background: "#F8F5EF",
          padding: "120px 0",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "950px",
            textAlign: "center",
          }}
        >

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              color: "#C7A04C",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            ABOUT ARHAMVEDA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: "64px",
              lineHeight: "1.15",
              color: "#18392B",
              marginTop: "20px",
              marginBottom: "35px",
            }}
          >
            Ancient Ayurvedic Wisdom,
            <br />
            Crafted for Modern Wellness.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "20px",
              lineHeight: "1.9",
              color: "#666",
            }}
          >
            ARHAMVEDA was founded with a simple belief:
            Ayurveda deserves to be experienced in its purest and most premium form.

            We are committed to creating thoughtfully crafted wellness products inspired by traditional Ayurvedic wisdom and backed by modern quality standards.
          </motion.p>

        </div>
      </section>

      {/* WHY WE STARTED */}

      <section
        style={{
          background: "#FFFFFF",
          padding: "100px 0",
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

          <div>

            <p
              style={{
                color: "#C7A04C",
                fontWeight: "700",
                letterSpacing: "2px",
              }}
            >
              WHY WE STARTED
            </p>

            <h2
              style={{
                fontSize: "48px",
                color: "#18392B",
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              Premium Ayurveda
              for Everyday Life
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "18px",
                lineHeight: "2",
              }}
            >
              Inspired by ancient Ayurvedic traditions,
              we set out to create products that combine
              heritage, authenticity, and uncompromising quality.

              <br />
              <br />

              Our goal is to make wellness a part of everyday life through premium products people can trust.
            </p>

          </div>

          <motion.div

            initial={{ opacity: 0, scale: 0.9 }}

            whileInView={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.8 }}

            viewport={{ once: true }}

            style={{

              background:"#F8F5EF",

              padding:"50px",

              borderRadius:"35px"

            }}

          >

            <img

              src="/logo.png"

              alt="ARHAMVEDA"

              style={{

                width:"260px",

                display:"block",

                margin:"auto"

              }}

            />

          </motion.div>

        </div>

      </section>

      {/* VALUES */}

      <section

        style={{

          background:"#F8F5EF",

          padding:"110px 0"

        }}

      >

        <div className="container">

          <div

            style={{

              textAlign:"center",

              marginBottom:"70px"

            }}

          >

            <p

              style={{

                color:"#C7A04C",

                letterSpacing:"2px",

                fontWeight:"700"

              }}

            >

              OUR VALUES

            </p>

            <h2

              style={{

                fontSize:"52px",

                color:"#18392B",

                marginTop:"15px"

              }}

            >

              What Makes

              ARHAMVEDA Different

            </h2>

          </div>

          <div

            style={{

              display:"grid",

              gridTemplateColumns:

              "repeat(auto-fit,minmax(250px,1fr))",

              gap:"30px"

            }}

          >

            {

              [

                {

                  icon:<Leaf size={36}/>,

                  title:"Ayurvedic Heritage",

                  desc:

                  "Inspired by centuries of Ayurvedic wisdom and herbal traditions."

                },

                {

                  icon:<Award size={36}/>,

                  title:"Premium Quality",

                  desc:

                  "Carefully selected ingredients and strict quality standards."

                },

                {

                  icon:<ShieldCheck size={36}/>,

                  title:"Trusted Formulations",

                  desc:

                  "Crafted with transparency, authenticity and consistency."

                },

                {

                  icon:<Sparkles size={36}/>,

                  title:"Modern Wellness",

                  desc:

                  "Designed to fit seamlessly into today's lifestyle."

                }

              ]

              .map((item,index)=>(

                <motion.div

                  key={index}

                  whileHover={{y:-8}}

                  style={{

                    background:"#fff",

                    padding:"40px",

                    borderRadius:"28px",

                    boxShadow:

                    "0 10px 40px rgba(0,0,0,0.05)"

                  }}

                >

                  <div

                    style={{

                      color:"#18392B",

                      marginBottom:"25px"

                    }}

                  >

                    {item.icon}

                  </div>

                  <h3

                    style={{

                      color:"#18392B",

                      marginBottom:"18px"

                    }}

                  >

                    {item.title}

                  </h3>

                  <p

                    style={{

                      color:"#666",

                      lineHeight:"1.8"

                    }}

                  >

                    {item.desc}

                  </p>

                </motion.div>

              ))

            }

          </div>

        </div>

      </section>

      {/* VISION */}

      <section

        style={{

          padding:"120px 0",

          background:"#18392B",

          color:"white"

        }}

      >

        <div

          className="container"

          style={{

            maxWidth:"900px",

            textAlign:"center"

          }}

        >

          <p

            style={{

              color:"#C7A04C",

              fontWeight:"700",

              letterSpacing:"2px"

            }}

          >

            OUR VISION

          </p>

          <h2

            style={{

              fontSize:"56px",

              marginTop:"20px",

              marginBottom:"35px"

            }}

          >

            Building a Trusted

            Ayurvedic Wellness Ecosystem

          </h2>

          <p

            style={{

              fontSize:"20px",

              lineHeight:"2",

              color:"#d5d5d5"

            }}

          >

            Our vision is to create a complete Ayurvedic wellness ecosystem

            built on trust, premium quality, transparency, and value.

            We aspire to become a brand that people choose not just for products,

            but for a lifelong wellness journey inspired by Ayurveda.

          </p>

        </div>

      </section>

    </div>
  );
}