import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Hotel,
  Castle
} from "lucide-react";

import realEstateData from "../../data/realEstateData";


function PropertyTypes(){


  const icons = [
    Building2,
    Home,
    Hotel,
    Castle
  ];



  return (

    <section

    className="
    py-24
    bg-black
    "

    >


      <div

      className="
      max-w-7xl
      mx-auto
      px-6
      "

      >



        {/* Heading */}


        <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        className="
        text-center
        mb-14
        "

        >


          <p

          className="
          text-yellow-500
          uppercase
          tracking-[4px]
          text-sm
          "

          >

            Property Categories

          </p>




          <h2

          className="
          text-white
          text-4xl
          md:text-5xl
          font-bold
          mt-3
          "

          >

            Find Your Perfect Space

          </h2>



          <p

          className="
          text-gray-400
          mt-4
          "

          >

            Choose from premium residential and commercial properties.

          </p>


        </motion.div>







        {/* Cards */}



        <div

        className="
        grid
        md:grid-cols-4
        gap-6
        "

        >



          {
            realEstateData.propertyTypes.map((type,index)=>{


              const Icon = icons[index % icons.length];



              return (


                <motion.div


                key={index}


                initial={{
                  opacity:0,
                  y:50
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  delay:index*0.15
                }}


                whileHover={{
                  y:-10
                }}



                className="
                relative
                overflow-hidden
                rounded-3xl
                bg-[#151515]
                border
                border-white/10
                p-8
                group
                "

                >





                  {/* Glow */}


                  <div

                  className="
                  absolute
                  top-0
                  right-0
                  w-32
                  h-32
                  bg-yellow-500/10
                  blur-3xl
                  "

                  />







                  <div

                  className="
                  relative
                  z-10
                  "

                  >




                    <div

                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-yellow-500/10
                    flex
                    items-center
                    justify-center
                    group-hover:bg-yellow-500
                    transition
                    "

                    >

                      <Icon

                      size={32}

                      className="
                      text-yellow-500
                      group-hover:text-black
                      transition
                      "

                      />


                    </div>







                    <h3

                    className="
                    text-white
                    text-xl
                    font-bold
                    mt-6
                    "

                    >

                      {type.name}

                    </h3>







                    <p

                    className="
                    text-gray-400
                    mt-3
                    text-sm
                    "

                    >

                      {type.description}

                    </p>







                    <div

                    className="
                    mt-6
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-white/5
                    text-yellow-500
                    text-sm
                    "

                    >

                      {type.count}+ Properties

                    </div>



                  </div>




                </motion.div>


              )


            })
          }



        </div>




      </div>


    </section>

  );

}


export default PropertyTypes;