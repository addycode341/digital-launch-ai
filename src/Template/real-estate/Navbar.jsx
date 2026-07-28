import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";

import realEstateData from "../../data/realEstateData";


function Navbar() {


  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);



  useEffect(()=>{


    const handleScroll = ()=>{

      if(window.scrollY > 50){

        setScrolled(true);

      }
      else{

        setScrolled(false);

      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);





  const menuItems = [
    "Home",
    "Properties",
    "Amenities",
    "Gallery",
    "Contact"
  ];




  return (

    <motion.nav

    initial={{
      y:-100
    }}

    animate={{
      y:0
    }}

    transition={{
      duration:0.6
    }}


    className={`
    fixed
    top-0
    left-0
    w-full
    z-50
    transition-all
    duration-500

    ${
      scrolled
      ?
      "bg-black/80 backdrop-blur-xl border-b border-white/10"
      :
      "bg-transparent"
    }

    `}

    >



      <div

      className="
      max-w-7xl
      mx-auto
      px-6
      py-5
      flex
      items-center
      justify-between
      "

      >




        {/* Logo */}


        <div>


          <h2

          className="
          text-white
          text-2xl
          font-bold
          "

          >

            {realEstateData.businessName}

          </h2>


          <p

          className="
          text-yellow-500
          text-xs
          tracking-widest
          "

          >

            REAL ESTATE

          </p>


        </div>







        {/* Desktop Menu */}


        <div

        className="
        hidden
        lg:flex
        items-center
        gap-8
        "

        >



          {
            menuItems.map((item,index)=>(


              <a

              key={index}

              href={`#${item.toLowerCase()}`}

              className="
              text-gray-300
              hover:text-yellow-500
              transition
              text-sm
              "

              >

                {item}

              </a>


            ))
          }



        </div>







        {/* CTA */}


        <div

        className="
        hidden
        md:flex
        "

        >


          <a

          href={`tel:${realEstateData.contact.phone}`}

          className="
          flex
          items-center
          gap-2
          bg-yellow-500
          text-black
          px-6
          py-3
          rounded-full
          font-semibold
          hover:scale-105
          transition
          "

          >

            <Phone size={18}/>

            Call Now


          </a>


        </div>







        {/* Mobile Button */}


        <button

        onClick={()=>setOpen(!open)}

        className="
        lg:hidden
        text-white
        "

        >

          {
            open
            ?
            <X size={28}/>
            :
            <Menu size={28}/>
          }


        </button>



      </div>







      {/* Mobile Menu */}


      {
        open && (

          <motion.div

          initial={{
            opacity:0,
            height:0
          }}

          animate={{
            opacity:1,
            height:"auto"
          }}

          className="
          lg:hidden
          bg-black/95
          backdrop-blur-xl
          px-6
          pb-6
          "

          >



            {
              menuItems.map((item,index)=>(

                <a

                key={index}

                href={`#${item.toLowerCase()}`}

                onClick={()=>setOpen(false)}

                className="
                block
                py-3
                text-gray-300
                hover:text-yellow-500
                "

                >

                  {item}

                </a>

              ))
            }




            <a

            href={`tel:${realEstateData.contact.phone}`}

            className="
            mt-4
            flex
            justify-center
            items-center
            gap-2
            bg-yellow-500
            text-black
            py-3
            rounded-full
            font-semibold
            "

            >

              <Phone size={18}/>

              Call Now

            </a>



          </motion.div>

        )
      }



    </motion.nav>

  );

}


export default Navbar;