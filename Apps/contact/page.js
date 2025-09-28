"use client";
import { useRouter } from "next/navigation";

// === Hero Section ===
function ContactHero() {
  return (
    <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden bg-[#f0f4f8]">
      {/* Background texture (optional, subtle tech pattern) */}
      <div className="absolute inset-0 bg-[url('/images/tech-grid.png')] bg-center bg-repeat opacity-10"></div>

      {/* Text */}
      <div className="relative z-10 px-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-sans text-[#1f2937]">
          Get in Touch
        </h1>
        <p className="mt-3 text-lg md:text-xl text-[#2563eb]">
          We’d love to hear from you.
        </p>
      </div>
    </section>
  );
}

// === Contact Page ===
export default function ContactPage() {
  const router = useRouter();

  return (
    <main>
      {/* Fixed Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed bottom-8 left-8 px-4 py-2 bg-[#2563eb] text-white rounded-lg
             shadow-lg hover:shadow-xl hover:ring-2 hover:ring-[#60a5fa]/50
             transition-all duration-300 z-50"
      >
        ← Back
      </button>

      <ContactHero />

      {/* Contact Form */}
      <div className="py-20 px-6 max-w-3xl mx-auto">
        <form className="grid gap-6 bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
          <div className="flex flex-col">
            <label className="block text-sm text-gray-700 mb-2">Name</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-sm text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-sm text-gray-700 mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-[#2563eb] text-white rounded-xl hover:bg-[#1e40af] hover:shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
