import React, { useState } from "react";
import {
  X,
  Phone,
  MapPin,
  Send
} from "lucide-react";


function PropertyModal({ property, closeModal }) {


  const [formData,setFormData] = useState({
    name:"",
    phone:"",
    message:""
  });



  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };




  const handleSubmit = (e)=>{

    e.preventDefault();


    console.log({
      property:property.name,
      ...formData
    });


    alert("Your enquiry has been submitted!");

    closeModal();

  };




  return (

    <div

    className="
    fixed
    inset-0
    z-50
    bg-black/70
    backdrop-blur-sm
    flex
    items-center
    justify-center
    px-5
    overflow-y-auto
    "

    >



      <div

      className="
      bg-[#151515]
      border
      border-white/10
      rounded-3xl
      max-w-4xl
      w-full
      overflow-hidden
      relative
      my-10
      "

      >



        <button

        onClick={closeModal}

        className="
        absolute
        right-5
        top-5
        w-10
        h-10
        rounded-full
        bg-white/10
        text-white
        flex
        items-center
        justify-center
        z-10
        "

        >

          <X/>

        </button>






        <div

        className="
        grid
        md:grid-cols-2
        "

        >



          {/* Property Info */}


          <div>


            <img

            src={property.image}

            alt={property.name}

            className="
            h-full
            min-h-[500px]
            w-full
            object-cover
            "

            />

          </div>







          {/* Form */}


          <div

          className="
          p-8
          "

          >



            <h2

            className="
            text-white
            text-3xl
            font-bold
            "

            >

              {property.name}

            </h2>




            <div

            className="
            flex
            items-center
            gap-2
            text-yellow-500
            mt-3
            "

            >

              <MapPin size={18}/>

              {property.location}

            </div>




            <p

            className="
            text-yellow-500
            text-3xl
            font-bold
            mt-5
            "

            >

              {property.price}

            </p>






            <form

            onSubmit={handleSubmit}

            className="
            mt-8
            space-y-4
            "

            >


              <input

              name="name"

              value={formData.name}

              onChange={handleChange}

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
              "

              />




              <input

              name="phone"

              value={formData.phone}

              onChange={handleChange}

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
              "

              />





              <textarea

              name="message"

              value={formData.message}

              onChange={handleChange}

              placeholder="I am interested in this property..."

              rows="4"

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
              "

              />






              <button

              type="submit"

              className="
              w-full
              bg-yellow-500
              text-black
              py-4
              rounded-full
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              hover:scale-105
              transition
              "

              >

                Send Enquiry

                <Send size={18}/>


              </button>



            </form>




          </div>



        </div>


      </div>



    </div>

  );

}


export default PropertyModal;