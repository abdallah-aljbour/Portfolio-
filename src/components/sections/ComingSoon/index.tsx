// src/components/sections/ComingSoon/index.tsx
import { useState, useEffect } from "react";
import "./style.scss";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target launch date here
  const launchDate = new Date("2024-02-29T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const sections = [
    {
      title: "About Me",
      description: "My journey, experience, and what drives me",
      status: "in-progress",
      icon: "👤",
    },
    {
      title: "Projects",
      description: "Showcase of my best work and case studies",
      status: "planned",
      icon: "💼",
    },
    {
      title: "Skills & Tech",
      description: "Technologies I work with and my expertise levels",
      status: "planned",
      icon: "⚡",
    },
    {
      title: "Contact",
      description: "Let's connect and work together",
      status: "planned",
      icon: "✉️",
    },
  ];

  return (
    <section className="coming-soon">
      <div className="coming-soon__container">
        <div className="coming-soon__header">
          <h2 className="coming-soon__title">
            More <span className="coming-soon__highlight">Awesome Content</span>{" "}
            Coming Soon
          </h2>
          <p className="coming-soon__subtitle">
            I'm actively working on showcasing my projects and experience. Check
            back soon or follow my progress!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="coming-soon__countdown">
          <div className="countdown__item">
            <span className="countdown__value">{timeLeft.days}</span>
            <span className="countdown__label">Days</span>
          </div>
          <div className="countdown__separator">:</div>
          <div className="countdown__item">
            <span className="countdown__value">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="countdown__label">Hours</span>
          </div>
          <div className="countdown__separator">:</div>
          <div className="countdown__item">
            <span className="countdown__value">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="countdown__label">Minutes</span>
          </div>
          <div className="countdown__separator">:</div>
          <div className="countdown__item">
            <span className="countdown__value">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="countdown__label">Seconds</span>
          </div>
        </div>

        {/* Upcoming Sections */}
        <div className="coming-soon__sections">
          <h3 className="sections__title">What's Coming</h3>
          <div className="sections__grid">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`section-card section-card--${section.status}`}
              >
                <div className="section-card__icon">{section.icon}</div>
                <h4 className="section-card__title">{section.title}</h4>
                <p className="section-card__description">
                  {section.description}
                </p>
                <span
                  className={`section-card__status section-card__status--${section.status}`}
                >
                  {section.status === "in-progress"
                    ? "In Progress"
                    : "Coming Soon"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="coming-soon__cta">
          <p className="cta__text">
            Want to be notified when new content launches?
          </p>
          <div className="cta__actions">
            <a
              href="https://github.com/abdallah-aljbour"
              target="_blank"
              rel="noopener noreferrer"
              className="cta__button cta__button--github"
            >
              Follow on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdalla-aljbour"
              target="_blank"
              rel="noopener noreferrer"
              className="cta__button cta__button--linkedin"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
