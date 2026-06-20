import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Phone,
  Globe,
  ShoppingBag
} from "lucide-react";

export default function Contact() {

  const whatsappLink =
    "https://wa.me/918815099150?text=Hi,%20I%20want%20to%20order%20Arhamveda%20Pain%20Relief%20Oil.";

  const flipkartLink =
    "https://dl.flipkart.com/dl/arhamveda-pain-relief-oil-joint-muscle-back-swelling-liquid/p/itm0057666321c6a?pid=BPRHNHAPZXDQGW9H";

  return (

    <div>

      {/* HERO */}

      <section

        style={{

          background:"#F8F5EF",

          padding:"120px 0"

        }}

      >

        <div

          className="container"

          style={{

            textAlign:"center",

            maxWidth:"900px"

          }}

        >

          <motion.p

            initial={{opacity:0,y:20}}

            animate={{opacity:1,y:0}}

            transition={{duration:0.6}}

            style={{

              color:"#C7A04C",

              fontWeight:"700",

              letterSpacing:"2px"

            }}

          >

            CONTACT ARHAMVEDA

          </motion.p>

          <motion.h1

            initial={{opacity:0,y:25}}

            animate={{opacity:1,y:0}}

            transition={{duration:0.7}}

            style={{

              fontSize:"64px",

              color:"#18392B",

              marginTop:"20px",

              marginBottom:"25px",

              lineHeight:"1.2"

            }}

          >

            Let's Begin Your

            Wellness Journey

          </motion.h1>

          <motion.p

            initial={{opacity:0}}

            animate={{opacity:1}}

            transition={{duration:0.8}}

            style={{

              fontSize:"20px",

              lineHeight:"1.9",

              color:"#666"

            }}

          >

            Have questions about ARHAMVEDA Pain Relief Oil?

            We'd love to hear from you.

            Reach out through WhatsApp, email,

            or use the contact form below.

          </motion.p>

        </div>

      </section>

      {/* CONTACT CARDS */}

      <section

        style={{

          padding:"100px 0",

          background:"#fff"

        }}

      >

        <div

          className="container"

          style={{

            display:"grid",

            gridTemplateColumns:

            "repeat(auto-fit,minmax(250px,1fr))",

            gap:"30px"

          }}

        >

          <motion.div

            whileHover={{y:-8}}

            style={{

              background:"#F8F5EF",

              padding:"40px",

              borderRadius:"30px",

              textAlign:"center"

            }}

          >

            <Phone

              size={38}

              color="#18392B"

            />

            <h3

              style={{

                marginTop:"25px",

                color:"#18392B"

              }}

            >

              Phone / WhatsApp

            </h3>

            <p

              style={{

                color:"#666"

              }}

            >

              +91 88150 99150

            </p>

          </motion.div>

          <motion.div

            whileHover={{y:-8}}

            style={{

              background:"#F8F5EF",

              padding:"40px",

              borderRadius:"30px",

              textAlign:"center"

            }}

          >

            <Mail

              size={38}

              color="#18392B"

            />

            <h3

              style={{

                marginTop:"25px",

                color:"#18392B"

              }}

            >

              Email

            </h3>

            <p

              style={{

                color:"#666"

              }}

            >

              arhamveda@gmail.com

            </p>

          </motion.div>

          <motion.div

            whileHover={{y:-8}}

            style={{

              background:"#F8F5EF",

              padding:"40px",

              borderRadius:"30px",

              textAlign:"center"

            }}

          >

            <Globe

              size={38}

              color="#18392B"

            />

            <h3

              style={{

                marginTop:"25px",

                color:"#18392B"

              }}

            >

              Website

            </h3>

            <p

              style={{

                color:"#666"

              }}

            >

              arhamveda.com

            </p>

          </motion.div>

        </div>

      </section>

      {/* CONTACT FORM */}

      <section

        style={{

          padding:"100px 0",

          background:"#F8F5EF"

        }}

      >

        <div

          className="container"

          style={{

            maxWidth:"750px"

          }}

        >

          <div

            style={{

              background:"#fff",

              padding:"50px",

              borderRadius:"35px",

              boxShadow:

              "0 10px 40px rgba(0,0,0,0.05)"

            }}

          >

            <h2

              style={{

                color:"#18392B",

                marginBottom:"35px",

                textAlign:"center",

                fontSize:"42px"

              }}

            >

              Send Us a Message

            </h2>

            <form
            
  name="contact"
  method="POST"
  data-netlify="true"
>

              <input

                type="text"

                placeholder="Your Name"

                style={{

                  width:"100%",

                  padding:"18px",

                  marginBottom:"20px",

                  borderRadius:"15px",

                  border:"1px solid #ddd",

                  fontSize:"16px"

                }}

              />

              <input

                type="email"

                placeholder="Your Email"

                style={{

                  width:"100%",

                  padding:"18px",

                  marginBottom:"20px",

                  borderRadius:"15px",

                  border:"1px solid #ddd",

                  fontSize:"16px"

                }}

              />

              <textarea

                placeholder="Your Message"

                rows="6"

                style={{

                  width:"100%",

                  padding:"18px",

                  marginBottom:"25px",

                  borderRadius:"15px",

                  border:"1px solid #ddd",

                  fontSize:"16px",

                  resize:"vertical"

                }}

              />

              <button

                type="submit"

                style={{

                  width:"100%",

                  background:"#18392B",

                  color:"#fff",

                  border:"none",

                  padding:"18px",

                  borderRadius:"999px",

                  fontWeight:"700",

                  cursor:"pointer",

                  fontSize:"18px"

                }}

              >

                Send Message

              </button>

            </form>

            <p

              style={{

                textAlign:"center",

                color:"#888",

                marginTop:"20px",

                fontSize:"14px"

              }}

            >

              Messages are currently received via email manually.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section

        style={{

          background:"#18392B",

          color:"white",

          padding:"100px 0"

        }}

      >

        <div

          className="container"

          style={{

            textAlign:"center",

            maxWidth:"850px"

          }}

        >

          <h2

            style={{

              fontSize:"54px",

              marginBottom:"25px"

            }}

          >

            Experience Premium

            Ayurvedic Wellness

          </h2>

          <p

            style={{

              color:"#D5D5D5",

              fontSize:"20px",

              lineHeight:"1.9",

              marginBottom:"45px"

            }}

          >

            Discover ARHAMVEDA Pain Relief Oil —

            inspired by Ayurvedic wisdom and crafted for everyday wellness.

          </p>

          <div

            style={{

              display:"flex",

              justifyContent:"center",

              gap:"20px",

              flexWrap:"wrap"

            }}

          >

            <a

              href={flipkartLink}

              target="_blank"

              rel="noreferrer"

              style={{

                background:"#C7A04C",

                color:"#18392B",

                padding:"18px 35px",

                borderRadius:"999px",

                display:"flex",

                gap:"10px",

                alignItems:"center",

                fontWeight:"700"

              }}

            >

              <ShoppingBag size={22}/>

              Buy on Flipkart

            </a>

            <a

              href={whatsappLink}

              target="_blank"

              rel="noreferrer"

              style={{

                background:"#25D366",

                color:"#fff",

                padding:"18px 35px",

                borderRadius:"999px",

                display:"flex",

                gap:"10px",

                alignItems:"center",

                fontWeight:"700"

              }}

            >

              <MessageCircle size={22}/>

              Chat on WhatsApp

            </a>

          </div>

        </div>

      </section>

    </div>

  );

}