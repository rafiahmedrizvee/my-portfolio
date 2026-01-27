import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resell from "../assets/project/resell.png"
import digital from "../assets/project/digital.png"
import embassy from "../assets/project/embassy.png"
import shop from "../assets/project/clothyfly.png"
import shopsy from "../assets/project/shopsy.png"
import titan from "../assets/project/titan.png"

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Titan Code Portfolio",
    tech: "React, GSAP, Tailwind CSS",
    desc: "High-performance animated portfolio website with smooth scrolling animations.",
    image: titan,
    live: "https://titan-code-website.netlify.app/",
  },
  {
    title: "Resell Mobile Shop",
    tech: "React, Tailwind, Firebase, Stripe",
    desc: "Full-stack resale marketplace with authentication & payments.",
    image: resell,
    live: "https://resellmobileshop.netlify.app/",
  },
  {
    title: "ClothyFly E-Commerce",
    tech: "React, Tailwind, Framer Motion",
    desc: "Modern fashion e-commerce UI with smooth animations.",
    image: shop,
    live: "https://clothyfly-shop.netlify.app/",
  },
  {
    title: "Visa Embassy Website",
    tech: "React, Tailwind CSS",
    desc: "Informative and interactive embassy website with forms.",
    image: embassy,
    live: "https://visa-embassy.netlify.app/",
  },
  {
    title: "Digital Solutions Agency",
    tech: "React, Tailwind, Framer Motion",
    desc: "Corporate agency website with portfolio showcase and animations.",
    image: digital,
    live: "https://digital-solutionsit.netlify.app/",
  },
  {
    title: "Shopsy",
    tech: "React, Redux, Tailwind CSS",
    desc: "Advanced e-commerce site with shopping cart and payment integration.",
    image: shopsy ,
    live: "https://shopsy-shop-25.netlify.app/",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate each project card individually
      gsap.utils.toArray(cardsRef.current).forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Hover effect
      cardsRef.current.forEach((card) => {
        const img = card.querySelector("img");
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, scale: 1.03, duration: 0.4, ease: "power3.out" });
          gsap.to(img, { scale: 1.1, duration: 0.6, ease: "power3.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power3.out" });
          gsap.to(img, { scale: 1, duration: 0.6, ease: "power3.out" });
        });
      });

      // Bubble animation
      if (bubbleRef.current) {
        const bubbles = bubbleRef.current.querySelectorAll(".bubble");
        bubbles.forEach((bubble) => {
          gsap.fromTo(
            bubble,
            { y: "100%", opacity: 0 },
            {
              y: "-20%",
              opacity: 0.3,
              duration: gsap.utils.random(6, 12),
              repeat: -1,
              ease: "sine.inOut",
              delay: gsap.utils.random(0, 3),
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Generate bubble elements
  const generateBubbles = (count = 30) =>
    Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className="bubble absolute w-4 h-4 bg-[var(--accent)] rounded-full opacity-30 pointer-events-none"
        style={{
          left: `${Math.random() * 95}%`,
          bottom: `${Math.random() * 10}%`,
        }}
      />
    ));

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-[var(--background)]"
    >
      {/* Bubble background */}
      <div ref={bubbleRef} className="absolute inset-0 z-0">
        {generateBubbles(30)}
      </div>

      <h2 className="projects-title text-3xl font-bold text-center mb-12 relative z-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((p, i) => (
          <article
            key={p.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-lg cursor-pointer relative transition-all"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">{p.tech}</p>
              <p className="text-[var(--text)] text-sm leading-relaxed">{p.desc}</p>
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-[var(--accent)] font-medium hover:underline"
              >
                Live Demo →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
