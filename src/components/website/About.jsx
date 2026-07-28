function About({ website }) {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-5xl font-bold text-slate-900">
              About Us
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              {website.about}
            </p>

          </div>

          <div>

            <img
              src={website.hero?.image}
              alt={website.title}
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;