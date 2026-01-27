import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Sample testimonials
const testimonials = [
  {
    name: "John Doe",
    role: "Product Manager at TechCorp",
    text: "Rafi delivers clean, scalable React applications with excellent UI and strong attention to detail.",
    avatar: "/testimonials/john.png",
  },
  {
    name: "Jane Smith",
    role: "Lead Designer at CreativeStudio",
    text: "Working with Rafi was a pleasure. His code quality and problem-solving skills are top-notch.",
    avatar: "/testimonials/jane.png",
  },
  {
    name: "Michael Lee",
    role: "CTO at StartupX",
    text: "Rafi consistently meets deadlines and exceeds expectations, creating production-ready MERN applications.",
    avatar: "/testimonials/michael.png",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);

  // GSAP fade/slide animation on testimonial change
  useEffect(() => {
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

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section relative">
      <h2 className="section-title text-[var(--text)]">Testimonials</h2>

      <div
        ref={cardRef}
        className="max-w-2xl mx-auto mt-6 p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-lg flex flex-col items-start space-y-4 transition-all duration-500"
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
        <blockquote className="text-[var(--text-muted)] italic">{t.text}</blockquote>

        {/* Dots / Indicators */}
        <div className="flex gap-2 mt-4">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i === current ? "bg-[var(--accent)]" : "bg-[var(--border)]"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
