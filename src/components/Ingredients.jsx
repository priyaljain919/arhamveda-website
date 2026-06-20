import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const ingredients = [

{
name: "Wintergreen Oil",
botanical: "Gaultheria procumbens",
description:
"Traditionally used in herbal wellness preparations for its refreshing aroma."
},

{
name: "Peppermint Oil",
botanical: "Mentha piperita",
description:
"Known for its cooling sensation and invigorating fragrance."
},

{
name: "Eucalyptus Oil",
botanical: "Eucalyptus globulus",
description:
"Popular essential oil valued for its refreshing and soothing aroma."
},

{
name: "Malkangani Oil",
botanical: "Celastrus paniculatus",
description:
"An important herb in traditional Ayurvedic formulations."
},

{
name: "Camphor Oil",
botanical: "Cinnamomum camphora",
description:
"Traditionally used in massage oils for its cooling and aromatic properties."
},

{
name: "Thyme Oil",
botanical: "Thymus vulgaris",
description:
"An aromatic botanical oil valued for its herbal fragrance."
},

{
name: "Clove Oil",
botanical: "Syzygium aromaticum",
description:
"Known for its warm aroma and traditional wellness uses."
},

{
name: "Sesame Oil",
botanical: "Sesamum indicum",
description:
"One of Ayurveda's most widely used carrier oils."
}

];

export default function Ingredients(){

return(

<section

style={{

padding:"110px 0",

background:"#F8F5EF"

}}

>

<div className="container">

<motion.div

initial={{opacity:0,y:25}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.7}}

viewport={{once:true}}

style={{

textAlign:"center",

marginBottom:"70px"

}}

>

<p

style={{

color:"#C7A04C",

fontWeight:"700",

letterSpacing:"2px"

}}

>

PREMIUM BOTANICALS

</p>

<h2

style={{

fontSize:"50px",

color:"#18392B",

marginTop:"15px",

marginBottom:"20px"

}}

>

Carefully Selected Ingredients

</h2>

<p

style={{

maxWidth:"760px",

margin:"auto",

fontSize:"18px",

lineHeight:"1.8",

color:"#666"

}}

>

ARHAMVEDA Pain Relief Oil is crafted with a blend of herbal oils and essential botanicals inspired by traditional Ayurvedic wisdom.

</p>

</motion.div>

<div

style={{

display:"grid",

gridTemplateColumns:

"repeat(auto-fit,minmax(260px,1fr))",

gap:"30px"

}}

>

{

ingredients.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{

duration:0.6,

delay:index*0.08

}}

viewport={{once:true}}

whileHover={{

y:-8

}}

style={{

background:"#fff",

padding:"35px",

borderRadius:"28px",

boxShadow:

"0 10px 40px rgba(0,0,0,0.06)"

}}

>

<div

style={{

width:"65px",

height:"65px",

background:"#C7A04C22",

borderRadius:"50%",

display:"flex",

alignItems:"center",

justifyContent:"center",

marginBottom:"25px"

}}

>

<Leaf

size={32}

color="#18392B"

/>

</div>

<h3

style={{

fontSize:"24px",

color:"#18392B",

marginBottom:"10px"

}}

>

{item.name}

</h3>

<p

style={{

fontStyle:"italic",

color:"#4B238A",

marginBottom:"18px"

}}

>

{item.botanical}

</p>

<p

style={{

lineHeight:"1.8",

color:"#666"

}}

>

{item.description}

</p>

</motion.div>

))

}

</div>

</div>

</section>

)

}