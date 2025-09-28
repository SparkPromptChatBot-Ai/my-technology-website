"use client";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";

// Hero Section
function AboutHero() {
  return (
    <section className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden bg-[#f0f4f8]">
      {/* Background tech pattern */}
      <div className="absolute inset-0 bg-[url('/images/tech-grid.png')] bg-center bg-repeat opacity-10"></div>

      {/* Text content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-sans text-[#1f2937] drop-shadow-sm">
          About Our Tech Company
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#2563eb] italic">
          “Innovating solutions for the modern world.”
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="blue">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

// About Page
export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="relative">
      {/* Fixed Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed bottom-8 left-8 px-4 py-2 bg-[#2563eb] text-white rounded-lg
             shadow-lg hover:shadow-xl hover:ring-2 hover:ring-[#60a5fa]/50
             transition-all duration-300 z-50"
      >
        ← Back
      </button>

      <AboutHero />

      {/* Story Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <img
          src="/images/about-detail-tech.png"
          alt="Our Technology"
          className="block w-full rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-sans text-[#1f2937] mb-6 hover:text-[#2563eb] transition-colors duration-300">
            Our Story
          </h2>
          <p className="text-lg text-[#334155] leading-relaxed mb-6">
            We create cutting-edge technology solutions that simplify complex
            challenges. Our team combines innovation, reliability, and user-centric
            design to deliver products that make a real difference.
          </p>
          <Button href="/contact" variant="blue">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-sans text-[#1f2937] mb-6">Our Philosophy</h2>
          <p className="text-lg text-[#334155] leading-relaxed mb-8">
            We believe technology should empower people and businesses. Every solution
            is built with precision, scalability, and security in mind, making modern
            tech accessible, reliable, and impactful.
          </p>
          <Button href="/products" variant="blue">
            Explore Solutions
          </Button>
        </div>
      </section>
    </main>
  );
}
