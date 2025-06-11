// src/components/sections/Projects/index.tsx
import { useState } from "react";
import "./style.scss";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  techStack: string[];
  githubUrl: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Beauty Salon Booking Platform",
    subtitle: "Full-Stack Booking System",
    description: [
      "Developed a comprehensive booking system with role-based access control for customers, salon owners, and administrators",
      "Integrated secure payment processing with Stripe API and implemented real-time availability updates",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Full Stack.",
    ],
    githubUrl: "https://github.com/abdallah-aljbour/beauty-Salon.git",
    featured: true,
  },
  {
    id: 2,
    title: "Future Energy - Eco-Action Tracker",
    subtitle: "Sustainability Meets Fitness",
    description: [
      "Created an innovative platform combining fitness tracking with environmental sustainability metrics",
      "Built features including community challenges, admin dashboard, marketplace, and impact reporting",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Figma",
      "Full Stack",
    ],
    githubUrl: "https://github.com/abdallah-aljbour/EcoTrackerSystem.git",
    featured: true,
  },
  {
    id: 3,
    title: "Jordanian Election Platform",
    subtitle: "Civic Engagement Platform",
    description: [
      "Engineered a secure platform to enhance voter awareness and promote transparency in the electoral process",
      "Implemented role-based features for voters, candidates, and administrators with real-time data updates",
    ],
    techStack: [
      "React",
      "Express",
      "PostgreSQL",
      "JWT Authentication",
      "Full Stack",
    ],
    githubUrl:
      "https://github.com/abdallah-aljbour/Jordan-Election-Project.git",
  },
  {
    id: 4,
    title: "Star Cinema - Event Ticketing",
    subtitle: "Ticketing & Event Management",
    description: [
      "Built a streamlined ticketing platform featuring real-time seat selection and secure payment processing",
      "Developed separate customer portal and admin dashboard for comprehensive event management",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Payment Gateway",
      "Full Stack",
    ],
    githubUrl: "https://github.com/abdallah-aljbour/Cinema-Ticket.git",
  },
  {
    id: 5,
    title: "Audify - Podcast Platform",
    subtitle: "Audio Content Discovery",
    description: [
      "Developed a user-friendly platform for discovering and streaming podcast content across multiple genres",
      "Implemented advanced search functionality and personalized recommendations",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Full Stack"],
    githubUrl: "https://github.com/abdallah-aljbour/Website-Audify.git",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.techStack.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        );

  return (
    <section className="projects">
      <div className="projects__container">
        {/* Header */}
        <div className="projects__header">
          <h2 className="projects__title">
            My <span className="projects__highlight">Projects</span>
          </h2>
          <p className="projects__subtitle">
            Each project is a unique piece of development that showcases my
            passion for creating innovative solutions and clean, efficient code.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="projects__filters">
          <button
            className={`filter-tag ${
              filter === "all" ? "filter-tag--active" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-tag ${
              filter === "react" ? "filter-tag--active" : ""
            }`}
            onClick={() => setFilter("react")}
          >
            React
          </button>
          <button
            className={`filter-tag ${
              filter === "node" ? "filter-tag--active" : ""
            }`}
            onClick={() => setFilter("node")}
          >
            Node.js
          </button>
          <button
            className={`filter-tag ${
              filter === "full" ? "filter-tag--active" : ""
            }`}
            onClick={() => setFilter("full")}
          >
            Full Stack
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${
                project.featured ? "project-card--featured" : ""
              } ${
                hoveredProject === project.id ? "project-card--hovered" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Number */}
              <div className="project-card__number">
                {String(project.id).padStart(2, "0")}
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="project-card__badge">
                  <span>Featured</span>
                </div>
              )}

              {/* Content */}
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>

                <div className="project-card__description">
                  {project.description.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="project-card__tech">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-card__actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <svg
                      className="project-card__icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>View Code</span>
                  </a>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="project-card__bg"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
