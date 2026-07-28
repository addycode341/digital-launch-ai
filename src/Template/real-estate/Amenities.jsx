import React from "react";
import { motion } from "framer-motion";
import {
  Waves,
  Dumbbell,
  ShieldCheck,
  Car,
  Trees,
  Zap,
  Users,
  Baby
} from "lucide-react";

import realEstateData from "../../data/realEstateData";


function Amenities() {


  const icons = [
    Waves,
    Dumbbell,
    Users,
    ShieldCheck,
    Trees,
    Car,
    Zap,
    Baby
  ];



  return (

    <section
      className="
      py-24
      bg-[#111111]
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
            Premium Amenities
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

            Everything For A Luxury Lifestyle

          </h2>


          <p
          className="
          text-gray-400
          mt-4
          "
          >

            Modern facilities designed for comfort and convenience.

          </p>


        </motion.div>





        {/* Amenities Grid */}


        <div

        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        "

        >


          {
            realEstateData.amenities.map((item,index)=>{


              const Icon = icons[index];


              return (

                <motion.div

                key={index}

                initial={{
                  opacity:0,
                  scale:0.8
                }}

                whileInView={{
                  opacity:1,
                  scale:1
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*0.1
                }}

                whileHover={{
                  y:-8
                }}

                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-6
                text-center
                group
                hover:border-yellow-500/50
                transition
                "

                >



                  <div

                  className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-yellow-500/10
                  flex
                  items-center
                  justify-center
                  group-hover:bg-yellow-500
                  transition
                  "

                  >

                    <Icon

                    size={30}

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
                  mt-5
                  font-semibold
                  "

                  >

                    {item}

                  </h3>



                </motion.div>


              );


            })
          }


        </div>



      </div>


    </section>

  );

}


export default Amenities;