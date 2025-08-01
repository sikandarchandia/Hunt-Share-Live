import React, { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("streaming");

  const tabs = [
    { id: "streaming", label: "Streaming Features" },
    { id: "social", label: "Social Features" },
    { id: "monetization", label: "Monetization" },
    { id: "management", label: "Management Tools" },
  ];

  const services = {
    streaming: [
      {
        title: "Live Streaming",
        desc: "Stream in high-definition, interact with your audience in real-time through instant chat, and create an immersive experience with effects and on-screen overlays.",
      },
      {
        title: "Multi‑Video Stream",
        desc: "Host up to four video feeds simultaneously, allowing for multiple camera angles, guest co-hosts, or collaborative content in one dynamic session.",
      },
      {
        title: "In‑Stream Games",
        desc: "Boost viewer engagement by playing interactive games live. Let fans participate directly and reward them with in-game prizes and badges.",
      },
      {
        title: "Private & Public Rooms",
        desc: "Create dedicated spaces for intimate fan interactions or open up public rooms to reach new audiences across the globe.",
      },
    ],
    social: [
      {
        title: "Post & Share",
        desc: "Share updates like on Facebook with images, videos, likes, and comments.",
      },
      {
        title: "Followers & Following",
        desc: "Grow your fan base and stay connected with your community.",
      },
      {
        title: "Coupling System",
        desc: "Pair up with other streamers for collabs and shared audiences.",
      },
      {
        title: "Community Interaction",
        desc: "Engage directly through polls, comments, and fan chats.",
      },
    ],
    monetization: [
      {
        title: "Gifting & Diamonds",
        desc: "Earn diamonds from gifts and convert them into real income.",
      },
      {
        title: "Diamond Sellers",
        desc: "Authorized sellers for safe and easy diamond purchases.",
      },
      {
        title: "Premium Rooms",
        desc: "Charge entry for special rooms with exclusive content.",
      },
      {
        title: "Reward System",
        desc: "Unlock achievements and earn bonuses through streaming milestones.",
      },
    ],
    management: [
      {
        title: "Agency System",
        desc: "Join or create agencies to build your brand and manage talents.",
      },
      {
        title: "Agent Management",
        desc: "Agents help manage streamers, events, and promotions.",
      },
      {
        title: "Analytics Dashboard",
        desc: "Track your growth, earnings, and audience engagement.",
      },
      {
        title: "Event Hosting",
        desc: "Organize and promote special live events on the platform.",
      },
    ],
  };

  return (
    <section className="services-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="services-title">Our Services</h2>

        {/* Tabs Navigation */}
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards */}
        <div className="services-grid">
          {services[activeTab].map((service, idx) => (
            <div key={idx} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
