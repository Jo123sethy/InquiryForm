import React from "react";
import "./Page.css";

const About = () => {
  return (
    <div className="page-container">

      {/* INTRO */}
      <section className="section">
        <h1>About MyNestHub</h1>
        <p className="about-text">
          MyNestHub is a next-generation networking platform built to help businesses
          and professionals build meaningful relationships, track leads, and unlock
          real business growth through smart connections.
        </p>
      </section>

      {/* STORY */}
      <section className="section alt">
        <h2>Our Story</h2>
        <p className="about-text">
          Traditional networking often lacks structure and measurable outcomes.
          MyNestHub was created to solve this problem by providing a platform where
          every connection, lead, and interaction contributes to real business value.
        </p>
      </section>

      {/* MISSION / VISION */}
      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>💡 Vision</h3>
            <p>To redefine how professionals connect and grow their networks globally.</p>
          </div>
          <div className="card">
            <h3>🎯 Mission</h3>
            <p>Provide tools that turn networking into measurable business success.</p>
          </div>
          <div className="card">
            <h3>🌍 Values</h3>
            <p>Innovation, transparency, and user-centric solutions.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section alt">
        <h2>What Makes Us Different</h2>
        <div className="grid">
          <div className="card">
            <h3>📊 Data Driven</h3>
            <p>Track your networking ROI with real insights.</p>
          </div>
          <div className="card">
            <h3>🤝 Relationship Focus</h3>
            <p>Focus on meaningful connections, not just numbers.</p>
          </div>
          <div className="card">
            <h3>⚙️ All-in-One Platform</h3>
            <p>Everything from messaging to lead tracking in one place.</p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <h2>Our Journey</h2>
        <ul className="timeline">
          <li><strong>2021:</strong> Platform launched</li>
          <li><strong>2022:</strong> First 1000 users onboarded</li>
          <li><strong>2023:</strong> Advanced networking tools introduced</li>
          <li><strong>2024:</strong> Global expansion</li>
          <li><strong>2025:</strong> AI-driven insights launched</li>
        </ul>
      </section>

    </div>
  );
};

export default About;