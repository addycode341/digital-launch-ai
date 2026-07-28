function Features({ website }) {

  return (

    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-5xl font-bold text-center">
          Why Choose Us
        </h2>


        <p className="text-center text-gray-400 mt-5">
          Premium features designed for better experience
        </p>



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">


          {
            website.features?.map((feature,index)=>(


              <div

              key={index}

              className="
              bg-white/10
              backdrop-blur-lg
              border
              border-white/10
              p-8
              rounded-3xl
              hover:scale-105
              transition
              "

              >


                <div className="
                text-4xl
                mb-5
                ">
                  ✨
                </div>


                <h3 className="
                text-xl
                font-bold
                ">
                  {feature}
                </h3>


              </div>


            ))
          }


        </div>


      </div>

    </section>

  );

}


export default Features;