export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60 flex flex-col justify-center px-24 md:px-12 sm:px-6 animate-fadeIn">
        <h1 className="text-white text-5xl md:text-4xl font-bold mb-5">
          Save Food. Serve Humanity.
        </h1>
        <p className="text-gray-200 max-w-xl text-lg">
          A smart platform to redistribute surplus food to NGOs and reduce food
          waste efficiently.
        </p>
      </div>
    </section>
  );
}
