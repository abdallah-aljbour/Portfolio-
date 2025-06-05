// src/components/sections/Skills/index.tsx
import { useState } from "react";
import "./style.scss";

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "💻",
    color: "frontend",
    skills: [
      { name: "React", level: 95, category: "frontend" },
      { name: "TypeScript", level: 90, category: "frontend" },
      { name: "JavaScript", level: 95, category: "frontend" },
      { name: "HTML5", level: 95, category: "frontend" },
      { name: "CSS3", level: 90, category: "frontend" },
      { name: "SCSS/Sass", level: 90, category: "frontend" },
      { name: "Redux", level: 85, category: "frontend" },
      { name: "Tailwind CSS", level: 85, category: "frontend" },
    ],
  },
  {
    title: "Backend & Database",
    icon: "🔧",
    color: "backend",
    skills: [
      { name: "Node.js", level: 85, category: "backend" },
      { name: "Express.js", level: 85, category: "backend" },
      { name: "PostgreSQL", level: 80, category: "backend" },
      { name: "MongoDB", level: 80, category: "backend" },
      { name: "SQL", level: 85, category: "backend" },
      { name: "NoSQL", level: 80, category: "backend" },
      { name: "REST APIs", level: 90, category: "backend" },
      { name: "JWT Authentication", level: 85, category: "backend" },
    ],
  },
  {
    title: "Architecture & Tools",
    icon: "🏗️",
    color: "tools",
    skills: [
      { name: "Micro Frontends", level: 85, category: "tools" },
      { name: "Single-SPA", level: 85, category: "tools" },
      { name: "Git", level: 90, category: "tools" },
      { name: "Agile/Scrum", level: 85, category: "tools" },
      { name: "Responsive Design", level: 95, category: "tools" },
      { name: "Figma", level: 75, category: "tools" },
      { name: "Payment Integration", level: 80, category: "tools" },
      { name: "Open Banking", level: 75, category: "tools" },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredCategories =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.color === selectedCategory);

  // Calculate statistics
  const totalSkills = skillsData.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );
  const averageLevel =
    skillsData.reduce(
      (acc, cat) =>
        acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0),
      0
    ) / totalSkills;

  const expertSkills = skillsData
    .flatMap((cat) => cat.skills)
    .filter((skill) => skill.level >= 90).length;

  return (
    <section className="skills">
      <div className="skills__container">
        {/* Header */}
        <div className="skills__header">
          <h2 className="skills__title">
            Skills & <span className="skills__highlight">Technologies</span>
          </h2>
          <p className="skills__subtitle">
            A comprehensive overview of my technical expertise and proficiency
            levels across different technologies and tools.
          </p>
        </div>

        {/* Statistics */}
        <div className="skills__stats">
          <div className="stat-card">
            <span className="stat-card__value">{totalSkills}</span>
            <span className="stat-card__label">Technologies</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__value">
              {Math.round(averageLevel)}%
            </span>
            <span className="stat-card__label">Average Proficiency</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__value">{expertSkills}</span>
            <span className="stat-card__label">Expert Level Skills</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="skills__filters">
          <button
            className={`filter-pill ${
              selectedCategory === "all" ? "filter-pill--active" : ""
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All Skills
          </button>
          <button
            className={`filter-pill ${
              selectedCategory === "frontend" ? "filter-pill--active" : ""
            }`}
            onClick={() => setSelectedCategory("frontend")}
          >
            Frontend
          </button>
          <button
            className={`filter-pill ${
              selectedCategory === "backend" ? "filter-pill--active" : ""
            }`}
            onClick={() => setSelectedCategory("backend")}
          >
            Backend
          </button>
          <button
            className={`filter-pill ${
              selectedCategory === "tools" ? "filter-pill--active" : ""
            }`}
            onClick={() => setSelectedCategory("tools")}
          >
            Tools & Architecture
          </button>
        </div>

        {/* Skills Categories */}
        <div className="skills__categories">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-category skill-category--${category.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-category__header">
                <span className="skill-category__icon">{category.icon}</span>
                <h3 className="skill-category__title">{category.title}</h3>
              </div>

              <div className="skill-category__skills">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`skill-item ${
                      hoveredSkill === skill.name ? "skill-item--hovered" : ""
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-item__header">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level">{skill.level}%</span>
                    </div>
                    <div className="skill-item__progress">
                      <div
                        className="skill-item__progress-bar"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-item__progress-glow"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="skills__experience">
          <h3 className="experience__title">My Journey</h3>
          <div className="experience__timeline">
            <div className="timeline-item">
              <div className="timeline-item__marker"></div>
              <div className="timeline-item__content">
                <h4>Frontend Developer</h4>
                <p>Specializing in React & Modern JavaScript</p>
                <span className="timeline-item__date">May 2024 – Present</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item__marker"></div>
              <div className="timeline-item__content">
                <h4>Micro Frontend Architecture</h4>
                <p>Building scalable applications with Single-SPA</p>
                <span className="timeline-item__date">
                  December 2024 – Present
                </span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item__marker"></div>
              <div className="timeline-item__content">
                <h4>Open Banking Projects</h4>
                <p>Working with secure financial APIs and integrations</p>
                <span className="timeline-item__date">2025 – Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="skills__cta">
          <p className="skills__cta-text">
            Looking for someone with these skills? Let's build something amazing
            together!
          </p>
          <a
            href="/Abdallah -Full Stack Web Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="skills__cta-button"
            download="Abdallah-Full-Stack-Web-Developer.pdf"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
