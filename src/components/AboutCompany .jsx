import React from "react";

export default function AboutCompany() {
  const features = [
    { title: "Live Streaming", desc: "Go live anytime with high‑quality video, real‑time chat, and audience interaction." },
    { title: "Multi‑Video Streams", desc: "Host or join multiple video streams at the same time for more engaging content." },
    { title: "In‑Stream Games", desc: "Play fun games inside the live stream to entertain and engage your viewers." },
    { title: "Private & Public Rooms", desc: "Create rooms for private chats, gifting, and locked discussions." },
    { title: "Gifting & Diamonds", desc: "Send and receive gifts, earn diamonds, and withdraw them into real money." },
    { title: "Social Media Posts", desc: "Post updates like Facebook with likes, comments, and shares." },
    { title: "Followers & Following", desc: "Grow your fan base with a following system and audience tracking." },
    { title: "Coupling System", desc: "Pair up with other streamers to collaborate and grow together." },
    { title: "Agency System", desc: "Join or create agencies to build your career and manage streamers." },
    { title: "Agent System", desc: "Become an agent, manage talent, and earn commissions from their success." },
    { title: "Diamond Sellers", desc: "Dedicated sellers to help users top‑up diamonds securely." },
    { title: "Level & Rewards", desc: "Climb levels, unlock rewards, and enjoy an achievement‑based system." }
  ];

  return (
    <section className="about-company-section">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <h2 className="title">
          About Hunt Share Live
        </h2>

        {/* Short Intro */}
        <div className="intro-text">
          <p>
            Hunt Share Live is a powerful live streaming app where creators and
            fans connect through real‑time video, games, and social interaction.
          </p>
          <p>
            Our platform blends entertainment, social media, and rewards to
            create a fun, engaging, and profitable space for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card">
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
