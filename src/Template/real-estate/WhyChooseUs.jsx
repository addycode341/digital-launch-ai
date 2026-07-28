import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeDollarSign,
  FileCheck,
  Home,
  Users,
  Headphones
} from "lucide-react";

import realEstateData from "../../data/realEstateData";


function WhyChooseUs() {


  const icons = [
    ShieldCheck,
    BadgeDollarSign,
    FileCheck,
    Home,
    Users,
    Headphones
  ];


  return (

    <section
      className="
      py-24
      bg-[#0B0B0B]
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
        mb-16
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

            Why Choose Us

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

            Your Trusted Real Estate Partner

          </h2>



          <p

          className="
          text-gray-400
          mt-4
          max-w-2xl
          mx-auto
          "

          >

            We make your property journey simple, secure and successful.

          </p>


        </motion.div>






        {/* Cards */}



        <div

        className="
        grid
        md:grid-cols-3
        gap-8
        "

        >


          {
            realEstateData.whyChooseUs.map((item,index)=>{


              const Icon = icons[index];


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
                bg-[#151515]
                border
                border-white/10
                rounded-3xl
                p-8
                group
                hover:border-yellow-500/50
                transition
                "

                >



                  {/* Icon */}


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
                  font-semibold
                  mt-6
                  "

                  >

                    {item}

                  </h3>



                  <p

                  className="
                  text-gray-400
                  mt-3
                  text-sm
                  leading-relaxed
                  "

                  >

                    Experience professional real estate services with complete transparency and support.

                  </p>



                </motion.div>

              );


            })
          }


        </div>


      </div>


    </section>

  );

}


export default WhyChooseUs;