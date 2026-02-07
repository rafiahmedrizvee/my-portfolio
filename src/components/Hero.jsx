import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import profile from "../assets/profile.png";
import resumePDF from "../assets/Mazharul Alam Rafi_CV_Full Stack Web Developer.pdf"; // Add your PDF in /assets
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope, FaDownload, FaEye } from "react-icons/fa";

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const bubblesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.from(".hero-animate", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.85,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.4,
      });

      // Floating glow animation
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Bubbles animation
      gsap.utils.toArray(".bubble").forEach((bubble) => {
        gsap.fromTo(
          bubble,
          { y: "100%", opacity: 0 },
          {
            y: "-20%",
            opacity: 1,
            duration: gsap.utils.random(6, 12),
            repeat: -1,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 3),
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Generate bubbles
  const bubbleCount = 12;
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => (
    <span
      key={i}
      className="bubble absolute w-4 h-4 bg-[var(--accent)] rounded-full opacity-30"
      style={{
        left: `${Math.random() * 90}%`,
        bottom: `${Math.random() * 10}%`,
      }}
    />
  ));

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center px-4 relative overflow-hidden bg-[var(--background)]"
    >
      {/* Bubbles */}
      <div ref={bubblesRef} className="absolute inset-0 pointer-events-none">
        {bubbles}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">

        {/* LEFT: TEXT & CTA */}
        <div>
          <span className="hero-animate text-sm font-semibold text-[var(--accent)] tracking-wide">
            Full-Stack Web Developer
          </span>

          <h1 className="hero-animate mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight pt-10">
            Hi, I’m <br />
            <span className="text-[var(--accent)]">Rafi Ahmed Rizvee</span>
          </h1>

          <p className="hero-animate mt-6 text-lg text-muted max-w-xl">
            I build modern, scalable, and high-performance web applications
            using React, MERN stack, and clean UI architecture. Currently
            exploring Data Science & Machine Learning.
          </p>

          {/* Buttons */}
          <div className="hero-animate mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            {/* Resume Buttons */}
            <a
              href={resumePDF}
              download
              className="btn-outline flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
           
          </div>

          {/* Social Links */}
          <div className="hero-animate mt-8 flex gap-4 text-[var(--accent)] text-xl">
            <a href="https://www.facebook.com/rizvi.roxas" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="www.linkedin.com/in/mazharul-alam-rafi" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="mailto:mazharulalamrafi@gmail.com" className="hover:text-red-500 transition">
              <FaEnvelope />
            </a>
            <a href="https://github.com/rafiahmedrizvee" target="_blank" rel="noreferrer" className="hover:text-gray-700 transition">
              <FaGithub />
            </a>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="hero-animate mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[var(--card)] p-4 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[var(--accent)]">20+</h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div className="bg-[var(--card)] p-4 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[var(--accent)]">1+</h3>
              <p className="text-sm text-gray-500">Years Exp</p>
            </div>
            <div className="bg-[var(--card)] p-4 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[var(--accent)]">8+</h3>
              <p className="text-sm text-gray-500">Skills</p>
            </div>
            <div className="bg-[var(--card)] p-4 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[var(--accent)]">2+</h3>
              <p className="text-sm text-gray-500">Certifications</p>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          {/* Glow */}
          <div
            ref={glowRef}
            className="absolute -inset-6 rounded-full bg-[var(--accent)] opacity-20 blur-3xl"
          />

          {/* Image Card */}
          <div
            ref={imageRef}
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-xl"
          >
            <img
              src={profile}
              alt="Rafi Ahmed Rizvee - Full Stack Web Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
