import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-[360px] md:h-[420px] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/tech-hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero content */}
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            TechNova Solutions
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow">
            Innovative • Modern • Scalable Technology
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/products" variant="blue">
              Explore Products
            </Button>
            <Button href="/about" variant="light">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0b3d91] hover:text-[#1e90ff] transition-colors duration-300">
              Our Solutions
            </h2>
            <p className="mt-6 text-lg text-[#333]">
              Cutting-edge software and hardware designed for modern businesses.
            </p>
            <div className="mt-6">
              <Button href="/products" variant="blue">
                Browse Solutions
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/product-mockup.png"
              alt="Tech Product"
              className="block w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/about-tech.jpg"
              alt="About TechNova"
              className="block w-full rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold hover:text-[#1e90ff]">About Us</h2>
            <p className="mt-6 text-lg leading-relaxed">
              TechNova Solutions provides innovative technology platforms for businesses of all sizes, focused on efficiency, scalability, and user experience.
            </p>
            <div className="mt-6">
              <Button href="/about" variant="light">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0b3d91]">Key Features</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <img
                src="/images/cloud.png"
                alt="Cloud"
                className="mx-auto mb-4"
              />
              <h4 className="font-semibold text-[#0b3d91]">Cloud Integration</h4>
              <p className="text-[#333] mt-2">Seamless cloud connectivity.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <img
                src="/images/security.png"
                alt="Security"
                className="mx-auto mb-4"
              />
              <h4 className="font-semibold text-[#0b3d91]">Enhanced Security</h4>
              <p className="text-[#333] mt-2">Protects your data end-to-end.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <img
                src="/images/ai.png"
                alt="AI"
                className="mx-auto mb-4"
              />
              <h4 className="font-semibold text-[#0b3d91]">AI-Powered</h4>
              <p className="text-[#333] mt-2">Smart automation for better decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#e6f0fa]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0b3d91]">
            What Our Clients Say
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <blockquote className="bg-white p-6 rounded-2xl shadow italic text-[#333]">
              “TechNova improved our workflow dramatically.”{" "}
              <cite className="block mt-4 font-semibold text-[#0b3d91]">
                — Alex
              </cite>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-2xl shadow italic text-[#333]">
              “Reliable, fast, and modern.”{" "}
              <cite className="block mt-4 font-semibold text-[#0b3d91]">
                — Jordan
              </cite>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-2xl shadow italic text-[#333]">
              “Our team productivity skyrocketed.”{" "}
              <cite className="block mt-4 font-semibold text-[#0b3d91]">
                — Taylor
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#f0f4f8] text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0b3d91] hover:text-[#1e90ff]">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg text-[#333] max-w-2xl mx-auto">
            Interested in our solutions? Contact us and let's innovate together.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="blue">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
