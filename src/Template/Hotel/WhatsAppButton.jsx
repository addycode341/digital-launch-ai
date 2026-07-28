import {
MessageCircle
} from "lucide-react";




function WhatsAppButton(){


return(


<a

href="https://wa.me/919876543210"

target="_blank"

rel="noreferrer"

className="
fixed
right-6
bottom-6
z-50
w-16
h-16
rounded-full
bg-green-500
text-white
flex
items-center
justify-center
shadow-2xl
hover:scale-110
transition
"

>


<MessageCircle size={32}/>


</a>


)

}


export default WhatsAppButton;