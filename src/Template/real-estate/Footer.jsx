import React from "react";

import {
  Phone,
  Mail,
  MapPin
} from "lucide-react";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin
} from "react-icons/fa";

import realEstateData from "../../data/realEstateData";


function Footer() {


  return (

    <footer

      className="
      bg-black
      border-t
      border-white/10
      pt-16
      pb-8
      "

    >


      <div

      className="
      max-w-7xl
      mx-auto
      px-6
      "

      >


        <div

        className="
        grid
        md:grid-cols-4
        gap-10
        "

        >



          {/* Brand Section */}


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
            mt-3
            "

            >

              {realEstateData.tagline}

            </p>




            <p

            className="
            text-gray-400
            mt-5
            text-sm
            leading-relaxed
            "

            >

              {realEstateData.description}

            </p>


          </div>






          {/* Links */}


          <div>


            <h3

            className="
            text-white
            font-semibold
            text-lg
            mb-5
            "

            >

              Quick Links

            </h3>



            <ul

            className="
            space-y-3
            text-gray-400
            "

            >

              <li className="hover:text-yellow-500 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-yellow-500 cursor-pointer transition">
                Properties
              </li>

              <li className="hover:text-yellow-500 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-yellow-500 cursor-pointer transition">
                Contact
              </li>


            </ul>


          </div>







          {/* Contact Info */}


          <div>


            <h3

            className="
            text-white
            font-semibold
            text-lg
            mb-5
            "

            >

              Contact

            </h3>




            <div

            className="
            space-y-4
            text-gray-400
            text-sm
            "

            >


              <p

              className="
              flex
              gap-3
              items-start
              "

              >

                <Phone
                size={18}
                className="text-yellow-500 mt-1"
                />

                {realEstateData.contact.phone}

              </p>





              <p

              className="
              flex
              gap-3
              items-start
              "

              >

                <Mail
                size={18}
                className="text-yellow-500 mt-1"
                />

                {realEstateData.contact.email}

              </p>





              <p

              className="
              flex
              gap-3
              items-start
              "

              >

                <MapPin
                size={18}
                className="text-yellow-500 mt-1"
                />

                {realEstateData.contact.address}

              </p>



            </div>


          </div>








          {/* Social Media */}


          <div>


            <h3

            className="
            text-white
            font-semibold
            text-lg
            mb-5
            "

            >

              Follow Us

            </h3>




            <div

            className="
            flex
            gap-4
            "

            >



              <a

              href={realEstateData.socialLinks.instagram}

              className="
              w-12
              h-12
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              text-white
              hover:bg-yellow-500
              hover:text-black
              transition
              "

              >

                <FaInstagram size={20}/>

              </a>





              <a

              href={realEstateData.socialLinks.facebook}

              className="
              w-12
              h-12
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              text-white
              hover:bg-yellow-500
              hover:text-black
              transition
              "

              >

                <FaFacebook size={20}/>

              </a>





              <a

              href={realEstateData.socialLinks.linkedin}

              className="
              w-12
              h-12
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              text-white
              hover:bg-yellow-500
              hover:text-black
              transition
              "

              >

                <FaLinkedin size={20}/>

              </a>



            </div>



          </div>



        </div>







        {/* Bottom Footer */}


        <div

        className="
        border-t
        border-white/10
        mt-12
        pt-6
        text-center
        text-gray-500
        text-sm
        "

        >

          © {new Date().getFullYear()} {realEstateData.businessName}. All Rights Reserved.


        </div>



      </div>


    </footer>

  );

}


export default Footer;