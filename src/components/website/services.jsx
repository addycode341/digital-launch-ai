import { motion } from "framer-motion";

function Services() {


  const Services = [

    {
      title: "AI Website Creation",
      description:
      "Generate professional business websites using AI in minutes with modern designs and layouts."
    },


    {
      title: "SEO Optimization",
      description:
      "Improve your online visibility with SEO-friendly websites, content structure and ranking strategies."
    },


    {
      title: "Google Business Setup",
      description:
      "Get your business discovered locally with Google Business Profile optimization."
    },


    {
      title: "Website Maintenance",
      description:
      "We handle updates, security, improvements and technical maintenance for your website."
    },


    {
      title: "Analytics Dashboard",
      description:
      "Track visitors, leads and website performance from one simple dashboard."
    },


    {
      title: "WhatsApp Automation",
      description:
      "Connect with customers faster using WhatsApp chat and lead automation."
    }


  ];



  return (

    <section 
    id="services"
    className="
    py-24
    bg-slate-950
    text-white
    "
    >


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        <motion.h2

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.5
        }}

        className="
        text-4xl
        md:text-5xl
        font-bold
        text-center
        "

        >

          Our Services

        </motion.h2>




        <p className="
        text-center
        text-gray-400
        mt-5
        max-w-2xl
        mx-auto
        ">

          Complete digital solutions to help small businesses grow online.

        </p>






        <div className="
        grid
        md:grid-cols-3
        gap-8
        mt-14
        ">


          {
            Services.map((service,index)=>(


              <motion.div


              key={index}


              whileHover={{
                y:-10
              }}


              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-8
              rounded-3xl
              hover:border-blue-500
              transition
              "


              >



                <div className="
                w-14
                h-14
                rounded-2xl
                bg-blue-600
                flex
                items-center
                justify-center
                text-2xl
                mb-6
                ">

                  ✨

                </div>




                <h3 className="
                text-2xl
                font-bold
                ">

                  {service.title}

                </h3>




                <p className="
                mt-4
                text-gray-300
                leading-7
                ">

                  {service.description}

                </p>



              </motion.div>


            ))
          }


        </div>


      </div>


    </section>

  )

}


export default Services;