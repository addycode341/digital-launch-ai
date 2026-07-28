function Gallery({ website }) {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {website.galleryImages?.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;