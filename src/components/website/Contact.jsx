function Contact({ website }) {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="
        bg-slate-950
        text-white
        rounded-3xl
        p-10
        md:p-16
        ">


          <h2 className="
          text-5xl
          font-bold
          text-center
          ">
            Contact Us
          </h2>



          <p className="
          mt-8
          text-center
          text-gray-300
          text-lg
          leading-8
          ">
            {website.contact}
          </p>



          <div className="
          flex
          justify-center
          mt-10
          ">


            <button className="
            bg-blue-600
            px-10
            py-4
            rounded-xl
            hover:bg-blue-500
            ">
              Contact Now
            </button>


          </div>


        </div>


      </div>


    </section>

  );

}


export default Contact;