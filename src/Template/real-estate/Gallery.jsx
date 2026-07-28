import React from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import realEstateData from "../../data/realEstateData";


function Gallery() {


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

            Property Gallery

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

            Experience Luxury Living

          </h2>



          <p

          className="
          text-gray-400
          mt-4
          "

          >

            Explore beautiful interiors, architecture and premium spaces.

          </p>


        </motion.div>







        {/* Gallery Grid */}


        <div

        className="
        grid
        md:grid-cols-4
        gap-6
        "

        >


          {
            realEstateData.gallery.map((image,index)=>(


              <motion.div


              key={index}


              initial={{
                opacity:0,
                scale:0.9
              }}


              whileInView={{
                opacity:1,
                scale:1
              }}


              viewport={{
                once:true
              }}


              transition={{
                delay:index*0.15
              }}


              className={`
              relative
              overflow-hidden
              rounded-3xl
              group
              ${
                index===0 || index===3
                ?
                "md:col-span-2 md:row-span-2"
                :
                ""
              }
              `}
              
              >



                <img

                src={image}

                alt="Luxury Property"

                className="
                w-full
                h-full
                min-h-[250px]
                object-cover
                group-hover:scale-110
                transition
                duration-700
                "

                />





                {/* Overlay */}


                <div

                className="
                absolute
                inset-0
                bg-black/50
                opacity-0
                group-hover:opacity-100
                transition
                flex
                items-center
                justify-center
                "

                >


                  <div

                  className="
                  w-14
                  h-14
                  rounded-full
                  bg-yellow-500
                  flex
                  items-center
                  justify-center
                  text-black
                  "

                  >

                    <Maximize2 size={24}/>

                  </div>


                </div>




              </motion.div>


            ))
          }



        </div>



      </div>


    </section>

  );

}


export default Gallery;