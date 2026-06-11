import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";

import profile from "../assets/images/profile.png";

import aiResume from "../assets/resume/MAZHARUL_ALAM_RAFI_AI Engineer_Resume.pdf";
import mernResume from "../assets/resume/MAZHARUL_ALAM_RAFI_Mern Stack Developer.pdf";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef();
  const imageRef = useRef();
  const cursorGlow = useRef();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 40,
        opacity: 0,
      });

      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        delay: 0.2,
      });

      gsap.from(".hero-text", {
        y: 30,
        opacity: 0,
        delay: 0.4,
      });

      gsap.from(".hero-btn", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.6,
      });

      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        rotate: -5,
        duration: 1.2,
      });

      gsap.to(imageRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const moveGlow = (e) => {
      if (!cursorGlow.current) return;

      gsap.to(cursorGlow.current, {
        x: e.clientX - 200,
        y: e.clientY - 200,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveGlow
      );
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center px-4 pt-24 relative overflow-hidden bg-[var(--background)]"
    >
      {/* Glow */}
      <div
        ref={cursorGlow}
        className="fixed w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none"
      />

      {/* Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 40,
            },
            links: {
              enable: true,
              distance: 150,
            },
            move: {
              enable: true,
              speed: 1,
            },
            size: {
              value: 2,
            },
          },
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>

          <span className="hero-badge text-purple-400 uppercase text-sm font-bold">
            ⚡ MERN Stack Developer • AI Engineer
          </span>

          <h1 className="hero-title mt-4 text-5xl font-bold">

            Hi, I'm

            <span className="block text-purple-500">

              <Typewriter
                words={[
                  "Mazharul Alam Rafi",
                  "MERN Stack Developer",
                  "AI Engineer"
                ]}
                loop
                cursor
              />

            </span>

          </h1>

          <p className="hero-text mt-6 text-gray-400">
            I build scalable web applications,
            AI systems and modern user experiences.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="hero-btn px-6 py-3 rounded-xl bg-purple-600 text-white"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="hero-btn px-6 py-3 rounded-xl bg-cyan-600 text-white"
            >
              Hire Me
            </a>

            {/* AI Resume */}

            <a
              href={aiResume}
              download="Rafi_AI_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
            >
              <FaDownload />

              AI Resume
            </a>

            {/* MERN Resume */}

            <a
              href={mernResume}
              download="Rafi_MERN_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            >
              <FaDownload />

              MERN Resume
            </a>

          </div>

          {/* Social */}

          <div className="mt-10 flex gap-5 text-xl">

            <FaFacebookF />
            <FaLinkedinIn />
            <FaEnvelope />
            <FaGithub />

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div
            ref={imageRef}
            className="w-80 h-80 rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}