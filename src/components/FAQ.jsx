import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [

{
question:"How do I use ARHAMVEDA Pain Relief Oil?",

answer:
"Clean and dry the desired area before application. Apply a small quantity of ARHAMVEDA Pain Relief Oil and gently massage in circular motions until absorbed. Use 2–3 times daily or as directed by your healthcare professional."
},

{
question:"What are the key ingredients?",

answer:
"The formulation includes Wintergreen Oil, Peppermint Oil, Eucalyptus Oil, Malkangani Oil, Camphor Oil, Thyme Oil, Clove Oil, Sesame Oil and other carefully selected herbal ingredients inspired by Ayurvedic traditions."
},

{
question:"Is it suitable for daily use?",

answer:
"Yes. ARHAMVEDA Pain Relief Oil is designed as a lightweight massage oil suitable for everyday wellness and self-care routines."
},

{
question:"How should I store the product?",

answer:
"Store in a cool and dry place away from direct sunlight. Keep out of reach of children."
},

{
question:"Where can I buy ARHAMVEDA Pain Relief Oil?",

answer:
"You can purchase ARHAMVEDA Pain Relief Oil directly from our official Flipkart listing."
},

{
question:"How can I contact ARHAMVEDA?",

answer:
"You can contact us via WhatsApp at +91 88150 99150 or email us at arhamveda@gmail.com."
}

];

export default function FAQ(){

const [open,setOpen] = useState(0);

return(

<section

style={{

padding:"120px 0",

background:"#F8F5EF"

}}

>

<div className="container">

<motion.div

initial={{opacity:0,y:20}}

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

FAQ

</p>

<h2

style={{

fontSize:"52px",

color:"#18392B",

marginTop:"15px",

marginBottom:"20px"

}}

>

Frequently Asked
<br/>

Questions

</h2>

<p

style={{

maxWidth:"700px",

margin:"auto",

fontSize:"18px",

lineHeight:"1.8",

color:"#666"

}}

>

Find answers to common questions about ARHAMVEDA Pain Relief Oil and our commitment to premium Ayurvedic wellness.

</p>

</motion.div>

<div

style={{

maxWidth:"900px",

margin:"auto"

}}

>

{

faqs.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:20}}

whileInView={{opacity:1,y:0}}

transition={{

duration:0.5,

delay:index*0.08

}}

viewport={{once:true}}

style={{

background:"#FFFFFF",

borderRadius:"24px",

marginBottom:"22px",

overflow:"hidden",

boxShadow:

"0 8px 30px rgba(0,0,0,0.05)"

}}

>

<button

onClick={()=>

setOpen(

open===index

?

null

:

index

)

}

style={{

width:"100%",

padding:"28px",

display:"flex",

justifyContent:"space-between",

alignItems:"center",

background:"transparent",

border:"none",

cursor:"pointer",

fontSize:"22px",

fontWeight:"600",

color:"#18392B",

textAlign:"left"

}}

>

{item.question}

{

open===index

?

<Minus size={28}/>

:

<Plus size={28}/>

}

</button>

<AnimatePresence>

{

open===index && (

<motion.div

initial={{

height:0,

opacity:0

}}

animate={{

height:"auto",

opacity:1

}}

exit={{

height:0,

opacity:0

}}

transition={{

duration:0.3

}}

style={{

overflow:"hidden"

}}

>

<p

style={{

padding:

"0 28px 28px 28px",

color:"#666",

lineHeight:"1.9",

fontSize:"17px"

}}

>

{item.answer}

</p>

</motion.div>

)

}

</AnimatePresence>

</motion.div>

))

}

</div>

</div>

</section>

)

}