import React from "react";
import { Link } from "react-router-dom";
import aboutimage from "../assets/feature img 3.png";

export default function About() {
  const longText =
    "From going live to building your fan base, we’ve designed every feature to make your streaming journey seamless and rewarding. Host multi‑video streams and interact with your audience in real time through in‑stream chat and interactive games. Create your own private or public rooms to connect with viewers or collaborate with other streamers. Show appreciation through virtual gifting and diamonds, which can be easily withdrawn into real earnings. Join or create agencies to grow your influence, with agents helping you manage events, content, and community engagement. Every part of our platform is built to make streaming not just entertaining—but truly rewarding.";

  const shortText = longText.substring(0, 150) + "...";

  return (
    <section className="about-section bg-black text-white py-6 px-6 md:px-20">
      <div className="my-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative group about-image">
          <img
            src={aboutimage}
            alt="About Us"
            className="w-full max-w-[100%] h-auto mx-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Right Content */}
        <div className="about-content space-y-6">
          <h2 className="text-4xl font-extrabold text-[#8944F5]">
            About  Hunt Share Live
          </h2>

          {/* First paragraph */}
          <p className="text-gray-300 leading-relaxed">
            We are passionate about delivering next‑level live streaming
            experiences that are engaging, interactive, and unforgettable. Our
            platform blends cutting‑edge streaming technology with a vibrant
            community to create a space where creators can shine and viewers can
            connect in real‑time.
          </p>

          {/* Second paragraph (150 chars only) */}
          <p className="text-gray-400 leading-relaxed">{shortText}</p>

          {/* Read More navigates to /aboutcompany */}
          <Link
            to="/aboutcompany"
            className="inline-block px-6 py-2 bg-[#8944F5] hover:bg-[#7736d4] rounded-full shadow-md shadow-[#8944F5]/50 hover:shadow-[#8944F5]/80 transition-all duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
