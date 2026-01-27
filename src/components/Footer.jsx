import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Footer() {
  const bubbleRef = useRef(null);

  useEffect(() => {
    if (!bubbleRef.current) return;
    const bubbles = bubbleRef.current.querySelectorAll(".bubble");

    bubbles.forEach((bubble) => {
      gsap.fromTo(
        bubble,
        { y: "100%", opacity: 0 },
        {
          y: "-50%",
          opacity: 0.2,
          duration: gsap.utils.random(6, 12),
          repeat: -1,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 3),
        }
      );
    });
  }, []);

  // Generate bubbles for animation
  const generateBubbles = (count = 20) =>
    Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className="bubble absolute w-2 h-2 rounded-full pointer-events-none"
        style={{
          backgroundColor: "rgba(79, 70, 229, 0.3)", // Indigo accent
          left: `${Math.random() * 95}%`,
          bottom: `${Math.random() * 10}%`,
        }}
      />
    ));

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden py-12">
      {/* Bubble background */}
      <div ref={bubbleRef} className="absolute inset-0 z-0">
        {generateBubbles(30)}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About */}
        <div>
          <h4 className="text-white font-bold mb-3 text-lg">About Me</h4>
          <p className="text-gray-400 text-sm">
            Full-Stack Web Developer with expertise in React, MERN stack, Tailwind CSS, and performance-driven applications. I build modern, scalable websites and web apps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-3 text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-indigo-500 transition-colors">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-white font-bold mb-3 text-lg">Contact & Social</h4>
          <p className="text-gray-400 text-sm mb-2">Email: <a href="mailto:rafi@example.com" className="hover:text-indigo-500">rafi@example.com</a></p>
          <p className="text-gray-400 text-sm mb-3">Phone: <a href="tel:+880123456789" className="hover:text-indigo-500">+880 1234 567 89</a></p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
            <a href="mailto:rafi@example.com" className="hover:text-indigo-500 transition-colors">Gmail</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rafi Ahmed Rizvee. All rights reserved.
      </div>
    </footer>
  );
}
