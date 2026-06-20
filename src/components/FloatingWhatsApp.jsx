import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {

const whatsappLink =
"https://wa.me/918815099150?text=Hi,%20I%20want%20to%20order%20Arhamveda%20Pain%20Relief%20Oil.";

return (

<a

href={whatsappLink}

target="_blank"

rel="noreferrer"

style={{

position:"fixed",

right:"30px",

bottom:"30px",

width:"68px",

height:"68px",

borderRadius:"50%",

background:"#25D366",

display:"flex",

justifyContent:"center",

alignItems:"center",

boxShadow:

"0 10px 30px rgba(37,211,102,0.4)",

zIndex:999,

transition:"0.3s"

}}

>

<MessageCircle

size={34}

color="white"

/>

</a>

);

}