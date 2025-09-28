// components/PageHero.js
export default function PageHero({ title, subtitle, bgTexture, silhouette }) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background texture */}
      <img
        src={bgTexture}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt=""
      />
      {/* Tech silhouette / overlay */}
      <img
        src={silhouette}
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        alt=""
      />
      {/* Text content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-sans font-bold text-[#60a5fa] drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-[#3b82f6]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
