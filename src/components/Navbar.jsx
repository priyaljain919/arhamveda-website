import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {

const [open,setOpen] = useState(false);

return(

<nav

style={{

position:"sticky",

top:0,

zIndex:1000,

background:"rgba(248,245,239,0.92)",

backdropFilter:"blur(16px)",

borderBottom:"1px solid rgba(0,0,0,0.05)"

}}

>

<div

className="container"

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"18px 20px"

}}

>

<Link to="/">

<img

src="/logo.png"

alt="ARHAMVEDA"

style={{

height:"70px"

}}

/>

</Link>

{/* Desktop */}

<div

style={{

display:"flex",

gap:"35px",

alignItems:"center"

}}

className="desktop-menu"

>

<Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/product">Product</Link>

<Link to="/contact">Contact</Link>

<a

href="https://wa.me/918815099150?text=Hi,%20I%20want%20to%20order%20Arhamveda%20Pain%20Relief%20Oil."

target="_blank"

rel="noreferrer"

style={{

background:"#18392B",

color:"#fff",

padding:"12px 22px",

borderRadius:"999px",

fontWeight:"600"

}}

>

WhatsApp

</a>

</div>

{/* Mobile */}

<button

onClick={()=>setOpen(!open)}

style={{

background:"transparent",

border:"none",

cursor:"pointer"

}}

>

{

open

?

<X size={32}/>

:

<Menu size={32}/>

}

</button>

</div>

{

open && (

<div

style={{

background:"#fff",

padding:"25px",

display:"flex",

flexDirection:"column",

gap:"22px"

}}

>

<Link to="/" onClick={()=>setOpen(false)}>Home</Link>

<Link to="/about" onClick={()=>setOpen(false)}>About</Link>

<Link to="/product" onClick={()=>setOpen(false)}>Product</Link>

<Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>

<a

href="https://wa.me/918815099150?text=Hi,%20I%20want%20to%20order%20Arhamveda%20Pain%20Relief%20Oil."

target="_blank"

rel="noreferrer"

>

WhatsApp

</a>

</div>

)

}

</nav>

)

}