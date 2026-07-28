import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search,
  MapPin,
  PlayCircle
} from "lucide-react";

import realEstateData from "../../data/realEstateData";


function Hero() {


  return (

    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      "
    >


      {/* Background Image */}

      <img

      src={realEstateData.hero.image}

      alt="Luxury Property"

      className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      "

      />



      {/* Overlay */}

      <div

      className="
      absolute
      inset-0
      bg-black/70
      "

      />



      <div

      className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black
      via-black/70
      to-transparent
      "

      />






      <div

      className="
      relative
      z-10
      max-w-7xl
      mx-auto
      px-6
      pt-20
      w-full
      "

      >



        <div

        className="
        grid
        lg:grid-cols-2
        gap-10
        items-center
        "

        >



          {/* Left Content */}


          <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          >



            <p

            className="
            text-yellow-500
            tracking-[5px]
            uppercase
            text-sm
            mb-5
            "

            >

              Premium Real Estate

            </p>





            <h1

            className="
            text-white
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            "

            >

              {realEstateData.hero.title}

            </h1>





            <p

            className="
            text-gray-300
            text-lg
            mt-6
            max-w-xl
            "

            >

              {realEstateData.hero.subtitle}

            </p>





            {/* Buttons */}


            <div

            className="
            flex
            gap-4
            flex-wrap
            mt-10
            "

            >


              <button

              className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-full
              bg-yellow-500
              text-black
              font-semibold
              hover:scale-105
              transition
              "

              >

                Explore Properties

                <ArrowRight size={20}/>

              </button>




              <button

              className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-full
              border
              border-white/30
              text-white
              hover:bg-white/10
              transition
              "

              >

                <PlayCircle size={20}/>

                Virtual Tour

              </button>



            </div>




            {/* Search Box */}


            <div

            className="
            mt-12
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-2xl
            p-4
            max-w-xl
            "

            >


              <div

              className="
              flex
              items-center
              gap-3
              "

              >

                <MapPin
                className="text-yellow-500"
                />


                <input

                placeholder="Search location or property type"

                className="
                bg-transparent
                outline-none
                text-white
                w-full
                placeholder:text-gray-400
                "

                />


                <button

                className="
                bg-yellow-500
                text-black
                p-3
                rounded-xl
                "

                >

                  <Search size={20}/>

                </button>


              </div>


            </div>




          </motion.div>








          {/* Floating Card */}


          <motion.div

          initial={{
            opacity:0,
            x:80
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:1
          }}

          className="
          hidden
          lg:block
          "

          >



            <div

            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            p-8
            "

            >


              <p

              className="
              text-gray-300
              "

              >

                Featured Property

              </p>



              <h3

              className="
              text-white
              text-3xl
              font-bold
              mt-3
              "

              >

                Luxury Modern Villa

              </h3>



              <div

              className="
              flex
              items-center
              gap-2
              text-yellow-500
              mt-4
              "

              >

                <MapPin size={18}/>

                Gurgaon

              </div>



              <h2

              className="
              text-yellow-500
              text-4xl
              font-bold
              mt-6
              "

              >

                ₹2.5 Cr

              </h2>



            </div>



          </motion.div>



        </div>


      </div>


    </section>

  );

}


export default Hero;