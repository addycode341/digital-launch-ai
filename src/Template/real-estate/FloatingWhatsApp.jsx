import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import realEstateData from "../../data/realEstateData";


function FloatingWhatsApp() {


  const whatsappLink = `https://wa.me/${realEstateData.contact.whatsapp}?text=Hello, I want to know more about properties.`;



  return (

    <motion.a

      href={whatsappLink}

      target="_blank"

      rel="noreferrer"


      initial={{
        scale:0
      }}


      animate={{
        scale:1
      }}


      transition={{
        duration:0.5
      }}


      whileHover={{
        scale:1.1
      }}


      className="
      fixed
      bottom-6
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-green-500
      flex
      items-center
      justify-center
      shadow-2xl
      "


    >


      {/* Pulse */}


      <span

      className="
      absolute
      inset-0
      rounded-full
      bg-green-500
      animate-ping
      opacity-40
      "

      />



      <MessageCircle

      size={32}

      className="
      text-white
      relative
      z-10
      "

      />



    </motion.a>


  );

}


export default FloatingWhatsApp;