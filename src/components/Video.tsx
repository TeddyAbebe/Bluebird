export function Video() {
  return (
    <section className="py-20 bg-white" id="video">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Take a Tour
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Experience the warmth and comfort of our adult family home
          </p>
        </div>

        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/h8LoKDIrYBE"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-[600px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
