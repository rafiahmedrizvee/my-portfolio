import { useEffect, useRef } from "react";
import gsap from "gsap";

// Sample projects with images and live/demo links
const projects = [
  {
    title: "Resell Mobile Shop",
    tech: "React, Tailwind, Firebase, Stripe",
    desc: "Full-stack resale marketplace.",
    image: "/projects/resell.png",
    live: "https://resell-shop-demo.netlify.app",
  },
  {
    title: "ClothyFly E-Commerce",
    tech: "React, Tailwind, Framer Motion",
    desc: "Fashion e-commerce UI.",
    image: "/projects/clothyfly.png",
    live: "https://clothyfly-demo.netlify.app",
  },
  {
    title: "Titan Code Portfolio",
    tech: "React, GSAP",
    desc: "High-performance portfolio.",
    image: "/projects/titan.png",
    live: "https://titan-portfolio.netlify.app",
  },
];

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Hover animation for each card
    cardsRef.current.forEach((card) => {
      gsap.set(card, { scale: 1 });
      card.addEventListener("mouseenter", () =>
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power3.out" })
      );
      card.addEventListener("mouseleave", () =>
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power3.out" })
      );
    });

    // Scroll-triggered fade-in for cards
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="projects" className="section relative">
      <h2 className="section-title text-[var(--text)]">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl"
          >
            {/* Project Image */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Content */}
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-[var(--text)]">{p.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">{p.tech}</p>
              <p className="mt-2 text-[var(--text)]">{p.desc}</p>

              {/* Live Link */}
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-[var(--accent)] font-medium hover:underline transition"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
