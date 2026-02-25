import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import profile from "../assets/profile.png";
import resumePDF from "../assets/Mazharul Alam Rafi_CV_Full Stack Web Developer.pdf";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // FIXED animation (prevents opacity bug)
      gsap.fromTo(
        ".hero-animate",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center px-4 pt-24 relative overflow-hidden bg-[var(--background)]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <div>
          <span className="hero-animate block text-sm font-semibold text-[var(--accent)] tracking-wide opacity-100">
            MERN Stack Web Developer & AI Engineer
          </span>

          <h1 className="hero-animate mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I’m <br />
            <span className="text-[var(--accent)]">
              Rafi Ahmed Rizvee
            </span>
          </h1>

          <p className="hero-animate mt-6 text-lg text-muted max-w-xl">
            I build responsive, scalable web applications using the MERN stack
            and explore AI-driven solutions to create smarter digital experiences.
            Passionate about performance, clean code, and modern UI.
          </p>

          {/* BUTTONS */}
          <div className="hero-animate mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>

            <a
              href={resumePDF}
              download
              className="btn-outline flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-animate mt-8 flex gap-4 text-[var(--accent)] text-xl">
            <a
              href="https://www.facebook.com/rizvi.roxas"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/mazharul-alam-rafi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:mazharulalamrafi@gmail.com"
              className="hover:text-red-500 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/rafiahmedrizvee"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-700 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* STATS */}
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

        {/* RIGHT IMAGE */}
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
              alt="Rafi Ahmed Rizvee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}