function Testimonials({ website }) {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-5xl font-bold text-center text-slate-900">
          What Our Customers Say
        </h2>


        <p className="text-center text-gray-600 mt-5">
          Real experiences from our happy customers
        </p>



        <div className="grid md:grid-cols-3 gap-8 mt-14">


          {
            website.testimonials?.map((item,index)=>(


              <div

              key={index}

              className="
              bg-gray-50
              p-8
              rounded-3xl
              shadow-lg
              hover:-translate-y-2
              transition
              "

              >


                <div className="
                text-5xl
                text-blue-600
                ">
                  "
                </div>


                <p className="
                mt-5
                text-gray-600
                leading-7
                ">

                  {item.review}

                </p>



                <h3 className="
                mt-6
                font-bold
                text-xl
                ">

                  {item.name}

                </h3>


              </div>


            ))
          }



        </div>


      </div>


    </section>

  );

}


export default Testimonials;