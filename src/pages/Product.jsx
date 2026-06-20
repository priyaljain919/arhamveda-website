import { motion } from "framer-motion";
import {
    ShoppingBag,
    MessageCircle,
    Leaf,
    Droplets,
    Flower2
} from "lucide-react";

export default function Product() {

    const whatsappLink =
        "https://wa.me/918815099150?text=Hi,%20I%20want%20to%20order%20Arhamveda%20Pain%20Relief%20Oil.";

    const flipkartLink =
        "https://dl.flipkart.com/dl/arhamveda-pain-relief-oil-joint-muscle-back-swelling-liquid/p/itm0057666321c6a?pid=BPRHNHAPZXDQGW9H";

    return (

        <div>

            {/* HERO */}

            <section

                style={{

                    padding: "100px 0",

                    background: "#F8F5EF"

                }}

            >

                <div

                    className="container"

                    style={{

                        display: "grid",

                        gridTemplateColumns: "1fr 1fr",

                        gap: "80px",

                        alignItems: "center"

                    }}

                >

                    <motion.div

                        initial={{ opacity: 0, x: -40 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.8 }}

                    >

                        <img

                            src="/product.png"

                            alt="ARHAMVEDA Pain Relief Oil"

                            style={{

                                width: "100%",

                                maxWidth: "430px",

                                display: "block",

                                margin: "auto",

                                filter:

                                    "drop-shadow(0 25px 40px rgba(0,0,0,0.18))"

                            }}

                        />

                    </motion.div>

                    <motion.div

                        initial={{ opacity: 0, x: 40 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.8 }}

                    >

                        <p

                            style={{

                                color: "#C7A04C",

                                fontWeight: "700",

                                letterSpacing: "2px"

                            }}

                        >

                            ARHAMVEDA

                        </p>

                        <h1

                            style={{

                                fontSize: "60px",

                                lineHeight: "1.1",

                                color: "#18392B",

                                marginTop: "15px",

                                marginBottom: "25px"

                            }}

                        >

                            Pain Relief Oil

                        </h1>

                        <p

                            style={{

                                fontSize: "20px",

                                lineHeight: "1.9",

                                color: "#555"

                            }}

                        >

                            ARHAMVEDA Pain Relief Oil is a premium Ayurvedic massage oil crafted using a blend of traditional herbs and essential oils inspired by ancient Ayurvedic wisdom.

                            Its lightweight formula absorbs comfortably into the skin and features a soothing aroma, making it an ideal companion for your daily wellness routine and active lifestyle.

                        </p>

                        <div

                            style={{

                                display: "flex",

                                gap: "20px",

                                marginTop: "40px",

                                flexWrap: "wrap"

                            }}

                        >

                            <a

                                href={flipkartLink}

                                target="_blank"

                                rel="noreferrer"

                                style={{

                                    background: "#18392B",

                                    color: "white",

                                    padding: "18px 32px",

                                    borderRadius: "999px",

                                    display: "flex",

                                    alignItems: "center",

                                    gap: "12px",

                                    fontWeight: "700"

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

                                    background: "#25D366",

                                    color: "white",

                                    padding: "18px 32px",

                                    borderRadius: "999px",

                                    display: "flex",

                                    alignItems: "center",

                                    gap: "12px",

                                    fontWeight: "700"

                                }}

                            >

                                <MessageCircle size={22} />

                                Chat on WhatsApp

                            </a>

                        </div>

                        <div

                            style={{

                                display: "flex",

                                gap: "50px",

                                marginTop: "45px"

                            }}

                        >

                            <div>

                                <h2>50 ml</h2>

                                <p>Net Quantity</p>

                            </div>

                            <div>

                                <h2>Premium</h2>

                                <p>Ayurvedic Formula</p>

                            </div>

                            <div>

                                <h2>Daily</h2>

                                <p>Wellness Companion</p>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* BENEFITS */}

            <section

                style={{

                    padding: "100px 0",

                    background: "#fff"

                }}

            >

                <div className="container">

                    <h2

                        style={{

                            textAlign: "center",

                            fontSize: "48px",

                            color: "#18392B",

                            marginBottom: "60px"

                        }}

                    >

                        Key Benefits

                    </h2>

                    <div

                        style={{

                            display: "grid",

                            gridTemplateColumns:

                                "repeat(auto-fit,minmax(300px,1fr))",

                            gap: "30px"

                        }}

                    >

                        {

                            [

                                {

                                    icon: <Leaf size={32} />,

                                    title: "Traditional Ayurvedic Inspiration",

                                    desc: "Inspired by time-honored Ayurvedic formulations."

                                },

                                {

                                    icon: <Droplets size={32} />,

                                    title: "Lightweight Formula",

                                    desc: "Quick absorbing and easy to apply."

                                },

                                {

                                    icon: <Flower2 size={32} />,

                                    title: "Refreshing Aroma",

                                    desc: "A soothing blend of herbal and essential oils."

                                }

                            ].map((item, index) => (

                                <div

                                    key={index}

                                    style={{

                                        background: "#F8F5EF",

                                        padding: "35px",

                                        borderRadius: "25px"

                                    }}

                                >

                                    <div

                                        style={{

                                            color: "#18392B"

                                        }}

                                    >

                                        {item.icon}

                                    </div>

                                    <h3

                                        style={{

                                            marginTop: "20px",

                                            marginBottom: "15px",

                                            color: "#18392B"

                                        }}

                                    >

                                        {item.title}

                                    </h3>

                                    <p

                                        style={{

                                            lineHeight: "1.8",

                                            color: "#666"

                                        }}

                                    >

                                        {item.desc}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                </div>

            </section>

            {/* INGREDIENTS */}

            <section

                style={{

                    padding: "100px 0",

                    background: "#F8F5EF"

                }}

            >

                <div className="container">

                    <h2

                        style={{

                            textAlign: "center",

                            fontSize: "48px",

                            color: "#18392B",

                            marginBottom: "60px"

                        }}

                    >

                        Key Ingredients

                    </h2>

                    <div

                        style={{

                            display: "grid",

                            gridTemplateColumns:

                                "repeat(auto-fit,minmax(250px,1fr))",

                            gap: "25px"

                        }}

                    >

                        {

                            [

                                "Wintergreen Oil",

                                "Peppermint Oil",

                                "Eucalyptus Oil",

                                "Malkangani Oil",

                                "Camphor Oil",

                                "Thyme Oil",

                                "Clove Oil",

                                "Sesame Oil"

                            ].map((item, index) => (

                                <div

                                    key={index}

                                    style={{

                                        background: "#fff",

                                        padding: "28px",

                                        borderRadius: "22px",

                                        textAlign: "center"

                                    }}

                                >

                                    <h3

                                        style={{

                                            color: "#18392B"

                                        }}

                                    >

                                        {item}

                                    </h3>

                                </div>

                            ))

                        }

                    </div>

                </div>

            </section>

            {/* DIRECTIONS */}

            <section

                style={{

                    padding: "100px 0",

                    background: "#fff"

                }}

            >

                <div

                    className="container"

                    style={{

                        maxWidth: "900px"

                    }}

                >

                    <h2

                        style={{

                            textAlign: "center",

                            fontSize: "48px",

                            color: "#18392B",

                            marginBottom: "50px"

                        }}

                    >

                        Directions for Use

                    </h2>

                    <ol

                        style={{

                            fontSize: "18px",

                            lineHeight: "2",

                            color: "#555"

                        }}

                    >

                        <li>

                            Clean and dry the desired area before application.

                        </li>

                        <li>

                            Apply a small quantity of ARHAMVEDA Pain Relief Oil.

                        </li>

                        <li>

                            Massage gently in circular motions until absorbed.

                        </li>

                        <li>

                            Use 2–3 times daily or as directed by your healthcare professional.

                        </li>

                    </ol>

                </div>

            </section>

        </div>

    );

}