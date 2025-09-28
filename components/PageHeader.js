// components/PageHeader.js
export default function PageHeader({ title, silhouette, bgTexture }) {
  return (
    <section className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Texture */}
      <img
        src={bgTexture}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt=""
      />
      {/* Tech Silhouette / overlay */}
      <img
        src={silhouette}
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        alt=""
      />
      {/* Title */}
      <h1 className="relative z-10 text-5xl md:text-6xl font-sans font-bold text-[#60a5fa] tracking-wide drop-shadow-lg">
        {title}
      </h1>
    </section>
  );
}
