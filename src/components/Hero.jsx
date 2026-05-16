// Hero.jsx

import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="light-orb"></div>
      <div className="hero-text">
        <p className="mini-text">your intelligent companion ✦</p>

        <h1>
          Your life,
          <br />
          quietly organized.
        </h1>

        <p className="hero-description">
          An intelligent assistant for focus,
          memory, planning, and everyday chaos.
        </p>

        <button className="hero-button" onClick={() => navigate("/chat")}>
          Try Veyra
        </button>
      </div>


      <div className="hero-panel">

        <div className="panel-top">
          <p>Today’s Focus</p>
          <span>✦</span>
        </div>

        <div className="task-list">
          <p>• DSA Practice</p>
          <p>• Build Landing Page</p>
          <p>• Mock Interview Prep</p>
        </div>

        <div className="focus-section">
          <div className="focus-circle">
            <span>72%</span>
          </div>

          <div className="focus-text">
            <p>Focus streak</p>
            <h3>6 days</h3>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero