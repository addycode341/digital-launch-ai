import React from "react";
import { motion } from "framer-motion";
import realEstateData from "../../data/realEstateData";


function Stats() {


  return (

    <section

      className="
      py-24
      bg-black
      relative
      overflow-hidden
      "

    >


      {/* Background Glow */}

      <div

      className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[500px]
      h-[300px]
      bg-yellow-500/10
      blur-[120px]
      "

      />




      <div

      className="
      relative
      z-10
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

            Our Achievements

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

            Numbers That Build Trust

          </h2>


        </motion.div>





        {/* Stats Cards */}


        <div

        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        "

        >


          {
            realEstateData.stats.map((stat,index)=>(


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
                scale:1.05
              }}


              className="
              bg-[#151515]
              border
              border-white/10
              rounded-3xl
              p-8
              text-center
              "

              >



                <motion.h3

                initial={{
                  scale:0.8
                }}

                whileInView={{
                  scale:1
                }}

                transition={{
                  duration:0.5
                }}

                className="
                text-yellow-500
                text-4xl
                md:text-5xl
                font-bold
                "

                >

                  {stat.number}

                </motion.h3>





                <p

                className="
                text-gray-300
                mt-3
                text-sm
                md:text-base
                "

                >

                  {stat.title}

                </p>



              </motion.div>


            ))
          }



        </div>


      </div>


    </section>

  );

}


export default Stats;