import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import person1 from "../assets/review/1.jpg"
import person2 from "../assets/review/2.jpg"
import person3 from "../assets/review/3.jpg"
import person4 from "../assets/review/4.jpg"

// Sample testimonials (added more entries)
const testimonials = [
  {
    name: "John Doe",
    role: "Product Manager at TechCorp",
    text: "Rafi delivers clean, scalable React applications with excellent UI and strong attention to detail.",
    avatar: person1,
  },
  {
    name: "Jane Smith",
    role: "Lead Designer at CreativeStudio",
    text: "Working with Rafi was a pleasure. His code quality and problem-solving skills are top-notch.",
    avatar: person2,
  },
  {
    name: "Michael Lee",
    role: "CTO at StartupX",
    text: "Rafi consistently meets deadlines and exceeds expectations, creating production-ready MERN applications.",
    avatar: person3,
  },
  {
    name: "Sara Khan",
    role: "UI/UX Designer at InnovateX",
    text: "Rafi's animations and attention to user experience make every project stand out.",
    avatar: person4,
  },

];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);
  const bubbleRef = useRef(null);

  // GSAP fade/slide animation on testimonial change
  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, [current]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Bubble background animation
  useEffect(() => {
    if (!bubbleRef.current) return;

    const bubbles = bubbleRef.current.querySelectorAll(".bubble");
    bubbles.forEach((bubble) => {
      gsap.fromTo(
        bubble,
        { y: "100%", opacity: 0 },
        {
          y: "-50%",
          opacity: 0.3,
          duration: gsap.utils.random(6, 12),
          repeat: -1,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 3),
        }
      );
    });
  }, []);

  // Generate bubble elements
  const generateBubbles = (count = 20) =>
    Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className="bubble absolute w-3 h-3 bg-[var(--accent)] rounded-full opacity-30 pointer-events-none"
        style={{
          left: `${Math.random() * 95}%`,
          bottom: `${Math.random() * 10}%`,
        }}
      />
    ));

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden bg-[var(--background)]"
    >
      {/* Bubble background */}
      <div ref={bubbleRef} className="absolute inset-0 z-0">
        {generateBubbles(20)}
      </div>

      <h2 className="section-title text-3xl font-bold text-center mb-12 relative z-10">
        What People Say About Me
      </h2>

      <div
        ref={cardRef}
        className="relative z-10 max-w-2xl mx-auto p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-lg flex flex-col items-start space-y-4 transition-all duration-500"
      >
        {/* Avatar and Name */}
        <div className="flex items-center gap-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover border border-[var(--border)]"
          />
          <div className="space-y-1">
            <p className="font-semibold text-[var(--text)]">{t.name}</p>
            <p className="text-sm text-[var(--text-muted)]">{t.role}</p>
          </div>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-[var(--text-muted)] italic text-sm sm:text-base">
          "{t.text}"
        </blockquote>

        {/* Navigation Dots */}
        <div className="flex gap-2 mt-4">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                i === current ? "bg-[var(--accent)]" : "bg-[var(--border)]"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      {/* Optional extra CTA Section */}
      <div className="relative z-10 mt-12 text-center">
        <p className="text-[var(--text-muted)] mb-4">
          Want to work with me or see more projects?
        </p>
        <a
          href="#contact"
          className="btn-primary px-6 py-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
