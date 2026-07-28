import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send
} from "lucide-react";

import realEstateData from "../../data/realEstateData";


function Contact() {


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
            Contact Us
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

            Book Your Property Visit

          </h2>


          <p

          className="
          text-gray-400
          mt-4
          "

          >

            Our experts are ready to help you find your dream property.

          </p>


        </motion.div>






        <div

        className="
        grid
        md:grid-cols-2
        gap-10
        "

        >



          {/* Contact Info */}


          <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          className="
          space-y-5
          "

          >



            <div

            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            flex
            items-center
            gap-5
            "

            >

              <div

              className="
              w-14
              h-14
              rounded-2xl
              bg-yellow-500/10
              flex
              items-center
              justify-center
              "

              >

                <Phone
                className="text-yellow-500"
                />

              </div>


              <div>

                <p className="text-gray-400 text-sm">
                  Phone
                </p>

                <p className="text-white">
                  {realEstateData.contact.phone}
                </p>

              </div>

            </div>






            <div

            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            flex
            items-center
            gap-5
            "

            >

              <div

              className="
              w-14
              h-14
              rounded-2xl
              bg-yellow-500/10
              flex
              items-center
              justify-center
              "

              >

                <Mail
                className="text-yellow-500"
                />

              </div>


              <div>

                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <p className="text-white">
                  {realEstateData.contact.email}
                </p>

              </div>


            </div>






            <div

            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            flex
            items-center
            gap-5
            "

            >

              <div

              className="
              w-14
              h-14
              rounded-2xl
              bg-yellow-500/10
              flex
              items-center
              justify-center
              "

              >

                <MapPin
                className="text-yellow-500"
                />

              </div>


              <div>

                <p className="text-gray-400 text-sm">
                  Address
                </p>

                <p className="text-white">
                  {realEstateData.contact.address}
                </p>

              </div>


            </div>



          </motion.div>








          {/* Form */}


          <motion.form

          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          "

          >



            <div className="grid gap-5">


              <input

              type="text"

              placeholder="Your Name"

              className="
              w-full
              bg-black/40
              border
              border-white/10
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
              focus:border-yellow-500
              "

              />



              <input

              type="tel"

              placeholder="Phone Number"

              className="
              w-full
              bg-black/40
              border
              border-white/10
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
              focus:border-yellow-500
              "

              />



              <input

              type="email"

              placeholder="Email Address"

              className="
              w-full
              bg-black/40
              border
              border-white/10
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
              focus:border-yellow-500
              "

              />



              <textarea

              rows="4"

              placeholder="Message"

              className="
              w-full
              bg-black/40
              border
              border-white/10
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
              focus:border-yellow-500
              "

              />




              <button

              className="
              flex
              items-center
              justify-center
              gap-2
              bg-yellow-500
              text-black
              font-semibold
              py-4
              rounded-full
              hover:scale-105
              transition
              "

              >

                Send Enquiry

                <Send size={18}/>

              </button>



            </div>


          </motion.form>



        </div>


      </div>


    </section>

  );

}


export default Contact;