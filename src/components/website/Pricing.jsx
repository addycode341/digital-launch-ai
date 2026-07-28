function Pricing({ website }) {

  return (

    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-5xl font-bold text-center">
          Pricing Plans
        </h2>


        <p className="text-center text-gray-400 mt-5">
          Choose the plan that fits your business
        </p>



        <div className="grid md:grid-cols-3 gap-8 mt-14">


          {
            website.pricing?.map((plan,index)=>(


              <div

              key={index}

              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              hover:scale-105
              transition
              "

              >


                <h3 className="
                text-2xl
                font-bold
                ">
                  {plan.plan}
                </h3>


                <div className="
                text-4xl
                font-bold
                mt-5
                text-blue-400
                ">
                  {plan.price}
                </div>



                <ul className="
                mt-8
                space-y-4
                ">


                {
                  plan.features?.map((item,i)=>(

                    <li key={i}
                    className="text-gray-300"
                    >
                      ✓ {item}
                    </li>

                  ))
                }


                </ul>



                <button className="
                mt-8
                w-full
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                ">

                  Choose Plan

                </button>



              </div>


            ))
          }



        </div>


      </div>

    </section>

  );

}


export default Pricing;