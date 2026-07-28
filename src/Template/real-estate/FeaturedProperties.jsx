import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight
} from "lucide-react";

import realEstateData from "../../data/realEstateData";
import PropertyModal from "./PropertyModal";


function FeaturedProperties() {


  const [selectedProperty, setSelectedProperty] = useState(null);



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

            Featured Properties

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

            Discover Luxury Homes

          </h2>



          <p

          className="
          text-gray-400
          mt-4
          "

          >

            Handpicked properties designed for premium lifestyle.

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
            realEstateData.properties.map((property,index)=>(



              <motion.div


              key={property.id || index}


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
                y:-12
              }}



              className="
              bg-[#151515]
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              group
              "

              >





                {/* Image */}


                <div

                className="
                relative
                h-80
                overflow-hidden
                "

                >


                  <img

                  src={property.image}

                  alt={property.name}

                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                  "

                  />





                  <div

                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-transparent
                  "

                  />





                  {/* Price Badge */}


                  <div

                  className="
                  absolute
                  top-5
                  right-5
                  bg-yellow-500
                  text-black
                  px-5
                  py-2
                  rounded-full
                  font-bold
                  "

                  >

                    {property.price}

                  </div>






                  {/* Location */}


                  <div

                  className="
                  absolute
                  bottom-5
                  left-5
                  flex
                  items-center
                  gap-2
                  text-white
                  "

                  >

                    <MapPin

                    size={18}

                    className="text-yellow-500"

                    />

                    {property.location}


                  </div>



                </div>









                {/* Content */}


                <div

                className="
                p-6
                "

                >



                  <h3

                  className="
                  text-white
                  text-2xl
                  font-bold
                  "

                  >

                    {property.name}

                  </h3>






                  {/* Details */}



                  <div

                  className="
                  flex
                  justify-between
                  mt-6
                  "

                  >



                    <div className="text-center">


                      <BedDouble

                      size={22}

                      className="
                      text-yellow-500
                      mx-auto
                      "

                      />


                      <p

                      className="
                      text-gray-400
                      text-sm
                      mt-2
                      "

                      >

                        {property.beds}

                      </p>


                    </div>







                    <div className="text-center">


                      <Bath

                      size={22}

                      className="
                      text-yellow-500
                      mx-auto
                      "

                      />


                      <p

                      className="
                      text-gray-400
                      text-sm
                      mt-2
                      "

                      >

                        {property.baths}

                      </p>


                    </div>







                    <div className="text-center">


                      <Maximize

                      size={22}

                      className="
                      text-yellow-500
                      mx-auto
                      "

                      />


                      <p

                      className="
                      text-gray-400
                      text-sm
                      mt-2
                      "

                      >

                        {property.area}

                      </p>


                    </div>




                  </div>







                  {/* Button */}



                  <button

                  onClick={() => setSelectedProperty(property)}


                  className="
                  mt-8
                  w-full
                  py-4
                  rounded-full
                  bg-yellow-500
                  text-black
                  font-semibold
                  flex
                  justify-center
                  items-center
                  gap-2
                  hover:scale-105
                  transition
                  "

                  >

                    Book Site Visit


                    <ArrowRight size={18}/>


                  </button>





                </div>



              </motion.div>



            ))
          }



        </div>





      </div>






      {/* Modal */}



      {
        selectedProperty && (

          <PropertyModal

          property={selectedProperty}

          closeModal={() => setSelectedProperty(null)}

          />

        )
      }



    </section>

  );

}


export default FeaturedProperties;