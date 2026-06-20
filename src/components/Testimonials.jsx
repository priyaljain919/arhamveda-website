import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

export default function Testimonials() {

const flipkartLink =
"https://dl.flipkart.com/dl/arhamveda-pain-relief-oil-joint-muscle-back-swelling-liquid/p/itm0057666321c6a?pid=BPRHNHAPZXDQGW9H";

const reviews = [

{
title:"Premium Packaging",
text:
"Beautiful bottle design and premium presentation. The product feels high quality and thoughtfully made."
},

{
title:"Pleasant Aroma",
text:
"The fragrance is refreshing and soothing. It blends nicely with my wellness routine."
},

{
title:"Easy to Apply",
text:
"Lightweight, non-greasy texture that absorbs comfortably and is convenient for everyday use."
}

];

return(

<section

style={{

padding:"120px 0",

background:"#FFFFFF"

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

SOCIAL PROOF

</p>

<h2

style={{

fontSize:"52px",

color:"#18392B",

marginTop:"15px",

marginBottom:"20px"

}}

>

Loved by Customers
<br/>

Across India

</h2>

<div

style={{

display:"flex",

justifyContent:"center",

gap:"6px",

marginBottom:"20px"

}}

>

{

Array.from({length:5}).map((_,i)=>(

<Star

key={i}

size={28}

fill="#C7A04C"

stroke="#C7A04C"

/>

))

}

</div>

<p

style={{

fontSize:"19px",

color:"#666",

maxWidth:"700px",

margin:"auto",

lineHeight:"1.8"

}}

>

ARHAMVEDA is committed to delivering premium Ayurvedic wellness products inspired by ancient wisdom and crafted with modern quality standards.

</p>

</motion.div>

<div

style={{

display:"grid",

gridTemplateColumns:

"repeat(auto-fit,minmax(300px,1fr))",

gap:"30px"

}}

>

{

reviews.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

transition={{

duration:0.6,

delay:index*0.15

}}

viewport={{once:true}}

whileHover={{

y:-8

}}

style={{

background:"#F8F5EF",

padding:"40px",

borderRadius:"28px",

boxShadow:

"0 10px 40px rgba(0,0,0,0.05)"

}}

>

<div

style={{

display:"flex",

gap:"4px",

marginBottom:"20px"

}}

>

{

Array.from({length:5}).map((_,i)=>(

<Star

key={i}

size={18}

fill="#C7A04C"

stroke="#C7A04C"

/>

))

}

</div>

<h3

style={{

fontSize:"24px",

color:"#18392B",

marginBottom:"18px"

}}

>

{item.title}

</h3>

<p

style={{

lineHeight:"1.9",

color:"#666"

}}

>

{item.text}

</p>

<p

style={{

marginTop:"25px",

fontWeight:"600",

color:"#4B238A"

}}

>

Verified Customer

</p>

</motion.div>

))

}

</div>

<motion.div

initial={{opacity:0,y:20}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.7}}

viewport={{once:true}}

style={{

textAlign:"center",

marginTop:"60px"

}}

>

<a

href={flipkartLink}

target="_blank"

rel="noreferrer"

style={{

display:"inline-flex",

alignItems:"center",

gap:"10px",

background:"#18392B",

color:"#fff",

padding:"16px 32px",

borderRadius:"999px",

fontWeight:"600"

}}

>

Read Reviews on Flipkart

<ExternalLink size={20}/>

</a>

</motion.div>

</div>

</section>

)

}