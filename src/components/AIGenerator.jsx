import { motion } from "framer-motion";

function AIGenerator() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">


      {/* Glow */}
      <div
      className="
      absolute
      w-96
      h-96
      bg-blue-600/20
      blur-3xl
      rounded-full
      left-1/2
      -translate-x-1/2
      "
      />


      <div className="relative z-10">


      <div className="text-center mb-16">

        <h2 className="
        text-4xl
        lg:text-5xl
        font-bold
        ">

          Watch AI Build Your Website
          <span className="text-blue-400">
            {" "}🤖
          </span>

        </h2>


        <p className="
        text-gray-400
        mt-4
        text-lg
        ">
          From business details to a complete website in seconds.
        </p>

      </div>





      <div className="
      max-w-6xl
      mx-auto
      grid
      lg:grid-cols-3
      gap-8
      items-center
      ">




      {/* Input Card */}

      <motion.div

      initial={{opacity:0,x:-50}}
      whileInView={{opacity:1,x:0}}

      className="
      p-7
      rounded-3xl
      bg-white/[0.07]
      backdrop-blur-xl
      shadow-xl
      "
      >

        <h3 className="text-xl font-bold mb-6">
          Business Details
        </h3>


        <div className="space-y-4">


          <div className="
          bg-black/20
          p-4
          rounded-xl
          ">
            🏢 Talkify Store
          </div>


          <div className="
          bg-black/20
          p-4
          rounded-xl
          ">
            🛒 Retail Business
          </div>


          <div className="
          bg-black/20
          p-4
          rounded-xl
          ">
            📍 Delhi
          </div>


        </div>


      </motion.div>






      {/* AI Core */}

      <motion.div

      animate={{
        y:[0,-15,0]
      }}

      transition={{
        duration:3,
        repeat:Infinity
      }}

      className="text-center"

      >


        <div
        className="
        mx-auto
        w-32
        h-32
        rounded-full
        bg-blue-600/20
        backdrop-blur-xl
        flex
        items-center
        justify-center
        text-6xl
        shadow-2xl
        "
        >
          🤖
        </div>



        <h3
        className="
        text-2xl
        font-bold
        mt-6
        text-blue-400
        "
        >
          AI Generating...
        </h3>




        <div
        className="
        mt-6
        bg-white/10
        h-3
        rounded-full
        overflow-hidden
        "
        >

          <motion.div

          animate={{
            width:["10%","95%"]
          }}

          transition={{
            duration:3,
            repeat:Infinity
          }}

          className="
          h-full
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          "

          />

        </div>


        <p className="text-gray-400 mt-3">
          Designing • Writing • Optimizing
        </p>


      </motion.div>








      {/* Preview */}

      <motion.div

      initial={{opacity:0,x:50}}
      whileInView={{opacity:1,x:0}}

      className="
      p-7
      rounded-3xl
      bg-white/[0.07]
      backdrop-blur-xl
      shadow-xl
      "

      >

        <h3 className="text-xl font-bold mb-5">
          Website Ready 🚀
        </h3>



        <div
        className="
        bg-black/30
        rounded-2xl
        p-5
        "
        >

          <div className="
          flex
          gap-2
          mb-4
          ">
            <span>🔴</span>
            <span>🟡</span>
            <span>🟢</span>
          </div>


          <h4 className="font-bold text-lg">
            Talkify Store
          </h4>


          <p className="
          text-gray-400
          mt-2
          ">
            Premium products at your doorstep.
          </p>



          <button
          className="
          mt-5
          bg-blue-600
          px-6
          py-2
          rounded-full
          "
          >
            Contact Now
          </button>


        </div>


      </motion.div>





      </div>


      </div>


    </section>
  )
}

export default AIGenerator;