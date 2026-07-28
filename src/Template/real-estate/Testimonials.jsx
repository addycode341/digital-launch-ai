import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import realEstateData from "../../data/realEstateData";


function Testimonials() {


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

            Client Reviews

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

            What Our Clients Say

          </h2>



          <p

          className="
          text-gray-400
          mt-4
          "

          >

            Thousands of happy families trust our real estate services.

          </p>


        </motion.div>







        {/* Reviews */}


        <div

        className="
        grid
        md:grid-cols-2
        gap-8
        "

        >


          {
            realEstateData.testimonials.map((review,index)=>(


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
                delay:index*0.2
              }}


              whileHover={{
                y:-10
              }}


              className="
              relative
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              "

              >




                {/* Quote Icon */}


                <Quote

                className="
                absolute
                top-6
                right-6
                text-yellow-500/30
                "

                size={50}

                />






                {/* Stars */}


                <div

                className="
                flex
                gap-1
                mb-5
                "

                >

                  {
                    Array.from({
                      length:review.rating
                    }).map((_,i)=>(


                      <Star

                      key={i}

                      size={18}

                      fill="currentColor"

                      className="
                      text-yellow-500
                      "

                      />


                    ))
                  }

                </div>







                {/* Review */}


                <p

                className="
                text-gray-300
                leading-relaxed
                "

                >

                  "{review.review}"

                </p>






                {/* User */}


                <div

                className="
                mt-8
                flex
                items-center
                gap-4
                "

                >


                  <div

                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-gradient-to-br
                  from-yellow-400
                  to-yellow-700
                  flex
                  items-center
                  justify-center
                  text-black
                  font-bold
                  "

                  >

                    {review.name.charAt(0)}

                  </div>



                  <div>


                    <h4

                    className="
                    text-white
                    font-semibold
                    "

                    >

                      {review.name}

                    </h4>


                    <p

                    className="
                    text-gray-500
                    text-sm
                    "

                    >

                      Verified Client

                    </p>


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


export default Testimonials;