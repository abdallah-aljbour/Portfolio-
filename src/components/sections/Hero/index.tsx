// src/components/sections/Hero/Hero.tsx
import "./index.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Frontend Developer &{" "}
            <span className="hero__highlight">React Expert</span>
          </h1>
          <p className="hero__description">
            I build scalable, responsive web applications with clean code and
            modern technologies. Specialized in React, TypeScript, and micro
            frontend architecture.
          </p>
          <div className="hero__actions">
            <button className="hero__button hero__button--primary">
              Start a Project
            </button>
            <button className="hero__button hero__button--secondary">
              View My Work
            </button>
          </div>
        </div>
        <div className="hero__visual">
          {/* Add your visual element here */}
          <div className="hero__code-preview">
            <span className="hero__code-comment">// Clean, scalable code</span>
            <br />
            <span className="hero__code-keyword">const</span> developer = {"{"}
            <br />
            &nbsp;&nbsp;skills: ['React', 'TypeScript', 'SCSS'],
            <br />
            &nbsp;&nbsp;passion: 'Creating amazing UX'
            <br />
            {"}"};
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
