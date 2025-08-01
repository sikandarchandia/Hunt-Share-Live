import React from "react";

export default function Contact() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      {/* Page Title */}
      <h1 className="text-center  py-3 text-4xl md:text-5xl font-extrabold text-[#8944F5]  tracking-wide drop-shadow-lg">
        Contact Live Hunt
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[30%_70%] gap-12 items-start">
        {/* Left Side Info */}
        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-8 rounded-2xl shadow-lg shadow-[#8944F5]/30 hover:shadow-[#8944F5]/60 transition-all duration-500">
          <h2 className="text-2xl font-bold text-[#8944F5] mb-6">
            Get In Touch
          </h2>
          <p className="text-start">
            We deliver next‑level live streaming — engaging, interactive, and
            unforgettable. Our platform connects creators and viewers in real
            time with a vibrant community
          </p>
          <div className="space-y-4 my-3 text-gray-300">
            <p className="flex items-center gap-2">
              📞 <span className="font-semibold text-white">+92 00000 000</span>
            </p>
            <p className="flex items-center gap-2">
              📧{" "}
              <span className="font-semibold my-2 text-white">
                livehuntshare@gmail.com
              </span>
            </p>
          </div>

          {/* Download APK Button */}
          <a
            href="/downloads/livehunt.apk"
            className="inline-block my-6 bg-[#8944F5] hover:bg-[#7736d4] px-6 py-1 rounded-full shadow-md hover:shadow-[#8944F5]/60 transition-all duration-300 font-medium"
          >
            📥 Download Android App
          </a>
        </div>

        {/* Right Side Form */}
        <form className="space-y-5 bg-[#0c0c0c] p-8 rounded-2xl shadow-lg shadow-[#8944F5]/20">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 ">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-2 py-1 rounded-md focus:ring-2 focus:ring-[#8944F5] focus:outline-none transition duration-300 hover:border-[#8944F5]/50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 ">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-2 py-1 rounded-md focus:ring-2 focus:ring-[#8944F5] focus:outline-none transition duration-300 hover:border-[#8944F5]/50"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-300">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-2 py-1 rounded-md focus:ring-2 focus:ring-[#8944F5] focus:outline-none transition duration-300 hover:border-[#8944F5]/50"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 ">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-2 py-1 rounded-md focus:ring-2 focus:ring-[#8944F5] focus:outline-none transition duration-300 hover:border-[#8944F5]/50"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#8944F5] hover:bg-[#7736d4] text-white px-5 py-1 rounded-full font-semibold shadow-md hover:shadow-[#8944F5]/50 transition-all duration-300 w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
