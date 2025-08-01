import React from "react";
import img1 from "../assets/10 Get started.png";
import img2 from "../assets/17 New star.png";
import img3 from "../assets/40 create party.png";
import img4 from "../assets/34 Party event.png";
import img5 from "../assets/14 gifting classic.png";
import img6 from "../assets/81 expplore     all.png";

export default function Allservices() {
  const services = [
    {
      title: "Live Stream",
      description:
        "Go live instantly and connect with your audience in real-time from anywhere. Deliver smooth, high-quality video streaming with minimal delays, ensuring your viewers never miss a moment. Engage them through authentic, interactive experiences such as live Q&A, polls, and shoutouts. Build a loyal fan base by creating memorable broadcasts that keep viewers coming back. Share your passion, grow your community, and turn every live moment into an opportunity to inspire, entertain, and connect deeply.",
      image: img1,
    },
    {
      title: "Multi Video Stream",
      description:
        "Stream from multiple sources at the same time, giving your audience complete freedom to choose how they watch. Switch effortlessly between different camera angles, separate events, or exclusive backstage access for a richer, more immersive viewing experience. Keep your audience engaged and entertained with a variety of perspectives that bring every moment to life. Whether it’s sports, concerts, talk shows, or gaming, multi-stream ensures your viewers stay connected and fully involved in the action from start to finish.",
      image: img2,
    },
    {
      title: "Live Chat Room",
      description:
        "Boost audience engagement with our dynamic, interactive live chat rooms. Viewers can instantly share messages, emojis, stickers, and reactions while watching your stream, creating a fun and social atmosphere. Encourage discussions, answer questions in real time, and make your audience feel seen and valued. Whether it’s cheering during a performance, reacting to a thrilling moment, or simply chatting with others, live chat transforms your stream into an inclusive, energetic community where everyone feels part of the action.",
      image: img3,
    },
    {
      title: "Family Channels",
      description:
        "Create private or public family channels where members can stream, share, and enjoy content together in one secure space. Perfect for friends, teams, or communities, these channels keep everyone connected no matter where they are. Host group events, watch parties, or collaborative streams, and share your favorite moments instantly. Whether it’s celebrating milestones, collaborating on projects, or simply hanging out virtually, family channels make it easy to stay close and create lasting memories with the people who matter most.",
      image: img4,
    },
    {
      title: "Easy & Fast Withdrawals",
      description:
        "Get your earnings quickly and securely with our hassle-free withdrawal system. Enjoy fast, reliable payouts with no unnecessary delays, hidden steps, or complicated procedures. Whether you’re cashing out small amounts or large earnings, our process is designed to be simple, transparent, and convenient. Focus on creating and streaming while we handle the transactions with top-level security, ensuring your hard work always turns into real rewards without stress, so you can keep building your success with confidence.",
      image: img5,
    },
    {
      title: "Profile & Post System",
      description:
        "Showcase your personality, achievements, and unique style with a fully customizable profile page designed to highlight your best moments. Share posts, photos, and updates to keep your audience engaged and connected even when you’re not live. Build your personal brand by presenting your content, milestones, and upcoming events in one place. Engage with fans through comments and interactions, turning casual viewers into loyal supporters. Strengthen your presence during live streams and maintain your influence in-between broadcasts with ease.",
      image: img6,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0a0a0f] to-[#111] py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section with Tilt */}
            <div className="md:w-2/5 relative group perspective">
              <div className="relative transform transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105 rounded-2xl overflow-hidden shadow-lg shadow-[#8944F5]/40">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[350px] object-contain bg-black p-2"
                />
                <div className="absolute inset-0 bg-[#8944F5]/30 opacity-0 group-hover:opacity-100 transition duration-700 ease-out"></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-3/5 space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#8944F5]">
                {service.title}
              </h2>
              <hr />
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
