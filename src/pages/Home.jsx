import React from "react";
import "./Page.css";

const Home = () => {
  return (
    <div className="page-container">

      {/* HERO */}
      <section className="hero">
        <h1>Transform Your Network Into Growth</h1>
        <p>
          MyNestHub is a powerful networking platform designed to help businesses
          connect, track leads, and build meaningful relationships that drive real revenue.
        </p>
        <button className="cta-btn">Start Free Trial</button>
      </section>

      {/* FEATURES */}
      <section className="section">
        <h2>What We Offer</h2>
        <div className="grid">
          <div className="card">
            <h3>🔗 Smart Connections</h3>
            <p>Connect with people you actually do business with and manage relationships efficiently.</p>
          </div>
          <div className="card">
            <h3>📊 Lead Tracking</h3>
            <p>Track, manage, and evaluate leads to maximize your business opportunities.</p>
          </div>
          <div className="card">
            <h3>💬 Communication</h3>
            <p>Direct messaging and group chats to stay connected with your network.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section alt">
        <h2>Why Businesses Choose Us</h2>
        <div className="grid">
          <div className="card">
            <h3>🚀 Growth Focused</h3>
            <p>Turn your connections into measurable business growth.</p>
          </div>
          <div className="card">
            <h3>⚡ Easy to Use</h3>
            <p>Simple interface designed for productivity and efficiency.</p>
          </div>
          <div className="card">
            <h3>🔒 Secure Platform</h3>
            <p>Your data and connections are always protected.</p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <h2>Who Is It For?</h2>
        <div className="grid">
          <div className="card">
            <h3>🏢 Businesses</h3>
            <p>Manage partnerships, clients, and networking groups.</p>
          </div>
          <div className="card">
            <h3>🎯 Entrepreneurs</h3>
            <p>Grow your personal network and track opportunities.</p>
          </div>
          <div className="card">
            <h3>🤝 Communities</h3>
            <p>Build strong and engaging professional communities.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section alt">
        <h2>Our Impact</h2>
        <div className="stats">
          <div><h3>10K+</h3><p>Users</p></div>
          <div><h3>50K+</h3><p>Connections</p></div>
          <div><h3>95%</h3><p>Success Rate</p></div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Start Building Your Network Today</h2>
        <p>Join thousands of professionals already growing with MyNestHub.</p>
        <button className="cta-btn">Get Started</button>
      </section>

    </div>
  );
};

export default Home;