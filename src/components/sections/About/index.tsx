import "./style.scss";

const AboutMe = () => {
  const skills = [
    "React",
    "TypeScript",
    "SCSS",
    "Single-SPA",
    "Micro Frontends",
    "Node.js",
    "SQL",
    "NoSQL",
    "Agile",
  ];

  return (
    <section className="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">
            About <span className="about__highlight">Me</span>
          </h2>
          <p className="about__description">
            I'm a passionate Frontend Developer with experience in building
            responsive and dynamic interfaces using React, TypeScript, SCSS, and
            Micro Frontends architecture using Single-SPA. I've worked on Open
            Banking projects and collaborated in team-based agile environments.
          </p>
        </div>

        <div className="about__content">
          <div className="about__skills">
            <h3 className="about__skills-title">My Skills</h3>
            <div className="about__skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="about__skill-item">
                  <span className="about__skill-icon">✓</span>
                  <span className="about__skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
