import "./index.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hello, I’m a <span className="highlight">Frontend Developer</span>
        </h1>
        <p>
          I build responsive, interactive web apps using React, SCSS, and micro
          frontends.
        </p>
        <button>Contact Me</button>
      </div>
    </section>
  );
};

export default HeroSection;
