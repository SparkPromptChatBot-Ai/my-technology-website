import BackButton from "../../components/BackButton";

export default function AboutPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">
      <div className="py-6 px-6">
        <BackButton
          text="Go Back"
          className="bg-[#2563eb] text-white px-4 py-2 rounded-lg shadow-lg
                     hover:shadow-xl hover:ring-2 hover:ring-[#60a5fa]/50
                     transition-all duration-300"
        />
      </div>
      {/* Rest of your tech page content */}
    </main>
  );
}
