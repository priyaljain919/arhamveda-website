import { Link } from "react-router-dom";

export default function Footer(){

return(

<footer

style={{

background:"#18392B",

color:"white",

padding:"80px 0 40px"

}}

>

<div className="container">

<div

style={{

display:"grid",

gridTemplateColumns:

"2fr 1fr 1fr",

gap:"60px",

marginBottom:"50px"

}}

>

{/* Brand */}

<div>

<img

src="/logo.png"

alt="ARHAMVEDA"

style={{

height:"85px",

marginBottom:"20px"

}}

/>

<p

style={{

maxWidth:"450px",

lineHeight:"1.9",

color:"#d5d5d5"

}}

>

Ancient Ayurvedic Wisdom,

Crafted for Modern Wellness.

Premium Ayurvedic products inspired by traditional herbal practices and modern quality standards.

</p>

</div>

{/* Quick Links */}

<div>

<h3

style={{

marginBottom:"25px",

color:"#C7A04C"

}}

>

Quick Links

</h3>

<div

style={{

display:"flex",

flexDirection:"column",

gap:"14px"

}}

>

<Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/product">Product</Link>

<Link to="/contact">Contact</Link>

</div>

</div>

{/* Contact */}

<div>

<h3

style={{

marginBottom:"25px",

color:"#C7A04C"

}}

>

Contact

</h3>

<p>

+91 88150 99150

</p>

<p>

arhamveda@gmail.com

</p>

<p>

arhamveda.com

</p>

<a

href="https://wa.me/918815099150?text=Hi,%20I%20want%20to%20order%20Arhamveda%20Pain%20Relief%20Oil."

target="_blank"

rel="noreferrer"

style={{

display:"inline-block",

marginTop:"18px",

background:"#25D366",

padding:"12px 22px",

borderRadius:"999px",

color:"white"

}}

>

Chat on WhatsApp

</a>

</div>

</div>

<hr

style={{

border:"none",

borderTop:"1px solid rgba(255,255,255,0.15)",

marginBottom:"30px"

}}

/>

<div

style={{

display:"flex",

justifyContent:"space-between",

flexWrap:"wrap",

gap:"20px",

color:"#d5d5d5"

}}

>

<p>

© 2026 ARHAMVEDA. All Rights Reserved.

</p>

<div

style={{

display:"flex",

gap:"25px"

}}

>

<Link to="/privacy-policy">

Privacy Policy

</Link>

<Link to="/terms">

Terms & Conditions

</Link>

<Link to="/disclaimer">

Disclaimer

</Link>

</div>

</div>

</div>

</footer>

)

}