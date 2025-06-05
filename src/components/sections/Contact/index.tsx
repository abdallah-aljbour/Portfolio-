// src/components/sections/Contact/index.tsx
import { useState, useRef, useEffect } from "react";
import "./style.scss";

interface ContactMethod {
  id: string;
  icon: string;
  label: string;
  value: string;
  link: string;
  color: string;
  hoverText: string;
}

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Contact methods configuration
  const contactMethods: ContactMethod[] = [
    {
      id: "whatsapp",
      icon: "💬",
      label: "WhatsApp",
      value: "+962 78 856 5171",
      link: "https://wa.me/962788565171?text=Hi%20Abdallah!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      color: "#25D366",
      hoverText: "Let's chat instantly!",
    },
    {
      id: "email",
      icon: "✉️",
      label: "Email",
      value: "abdullahaljbour01@gmail.com",
      link: "mailto:abdalla.aljbour@example.com?subject=Let's%20Work%20Together!",
      color: "#EA4335",
      hoverText: "Drop me a line!",
    },
    {
      id: "linkedin",
      icon: "💼",
      label: "LinkedIn",
      value: "Abdalla Al-jbour",
      link: "https://www.linkedin.com/in/abdalla-aljbour",
      color: "#0077B5",
      hoverText: "Connect professionally!",
    },
    {
      id: "github",
      icon: "🚀",
      label: "GitHub",
      value: "@abdallah-aljbour",
      link: "https://github.com/abdallah-aljbour",
      color: "#171515",
      hoverText: "Check my code!",
    },
  ];

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Copy to clipboard functionality
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(id);
      setTimeout(() => setCopySuccess(null), 2000);
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    setIsMessageSent(true);
    setTimeout(() => setIsMessageSent(false), 3000);
  };

  // Current time in Jordan
  const jordanTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Amman",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="contact" ref={contactRef}>
      {/* Animated background gradient that follows mouse */}
      <div
        className="contact__gradient"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(0, 102, 255, 0.1) 0%, 
            transparent 50%)`,
        }}
      />

      <div className="contact__container">
        {/* Header with animated text */}
        <div className="contact__header">
          <h2 className="contact__title">
            Let's <span className="contact__highlight">Connect</span> &{" "}
            <span className="contact__highlight-alt">Create</span>
          </h2>
          <p className="contact__subtitle">
            I'm always excited to work on new projects and meet fellow
            developers. Whether you have a project in mind or just want to say
            hi, I'd love to hear from you!
          </p>
          <div className="contact__availability">
            <span className="contact__status contact__status--available">
              <span className="contact__status-dot"></span>
              Available for new projects
            </span>
            <span className="contact__timezone">
              📍 Amman, Jordan • {jordanTime}
            </span>
          </div>
        </div>

        <div className="contact__content">
          {/* Quick Contact Methods */}
          <div className="contact__methods">
            <h3 className="contact__section-title">Quick Connect</h3>
            <div className="contact__cards">
              {contactMethods.map((method) => (
                <div
                  key={method.id}
                  className={`contact-card ${
                    hoveredMethod === method.id ? "contact-card--hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredMethod(method.id)}
                  onMouseLeave={() => setHoveredMethod(null)}
                  style={
                    {
                      "--card-color": method.color,
                    } as React.CSSProperties
                  }
                >
                  <div className="contact-card__content">
                    <span className="contact-card__icon">{method.icon}</span>
                    <h4 className="contact-card__label">{method.label}</h4>
                    <p className="contact-card__value">{method.value}</p>
                    <span className="contact-card__hover-text">
                      {method.hoverText}
                    </span>
                  </div>
                  <div className="contact-card__actions">
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card__link"
                    >
                      <span>Open</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {(method.id === "email" || method.id === "whatsapp") && (
                      <button
                        className="contact-card__copy"
                        onClick={() => copyToClipboard(method.value, method.id)}
                      >
                        {copySuccess === method.id ? (
                          <span className="contact-card__copied">Copied!</span>
                        ) : (
                          <span>Copy</span>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="contact__form-section">
            <h3 className="contact__section-title">Send a Quick Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__grid">
                <div className="contact-form__group">
                  <input
                    type="text"
                    id="name"
                    className="contact-form__input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className="contact-form__label">
                    Your Name
                  </label>
                </div>
                <div className="contact-form__group">
                  <input
                    type="email"
                    id="email"
                    className="contact-form__input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="contact-form__label">
                    Email Address
                  </label>
                </div>
              </div>
              <div className="contact-form__group">
                <textarea
                  id="message"
                  className="contact-form__textarea"
                  placeholder=" "
                  rows={4}
                  required
                ></textarea>
                <label htmlFor="message" className="contact-form__label">
                  Your Message
                </label>
              </div>
              <button
                type="submit"
                className={`contact-form__submit ${
                  isMessageSent ? "contact-form__submit--sent" : ""
                }`}
              >
                {isMessageSent ? (
                  <>
                    <span>Message Sent!</span>
                    <span className="contact-form__success-icon">✓</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="contact-form__arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Fun CTA Section */}
        <div className="contact__cta">
          <div className="contact__cta-content">
            <h3 className="contact__cta-title">
              Prefer a More Direct Approach?
            </h3>
            <p className="contact__cta-text">
              No problem! Feel free to reach out through any channel you're
              comfortable with. I typically respond within 24 hours.
            </p>
            <div className="contact__cta-actions">
              <a
                href="https://wa.me/962791234567?text=Hi%20Abdallah!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="contact__cta-button contact__cta-button--whatsapp"
              >
                <span>💬</span>
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="mailto:abdalla.aljbour@example.com?subject=Let's%20Work%20Together!"
                className="contact__cta-button contact__cta-button--email"
              >
                <span>📧</span>
                <span>Send an Email</span>
              </a>
            </div>
          </div>
          <div className="contact__cta-decoration">
            <div className="contact__cta-emoji">👋</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
