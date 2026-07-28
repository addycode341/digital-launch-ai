function Hero({ website }) {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div>

          <p className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 mb-6">
            ✨ AI Generated Website
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {website.hero?.heading}
          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-8">
            {website.hero?.subheading}
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-semibold transition">
              {website.hero?.button || "Get Started"}
            </button>

            <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl transition">
              Learn More
            </button>

          </div>

        </div>

        {/* Right */}
        <div>

          <img
            src={website.hero?.image}
            alt={website.title}
            className="rounded-3xl shadow-2xl w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;