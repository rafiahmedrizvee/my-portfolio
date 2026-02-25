import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import profile from "../assets/profile.png";
import resumePDF from "../assets/Mazharul Alam Rafi_Mern Stack Developer_Resume.pdf";

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
  const buttonsRef = useRef([]);
  const resumeBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({ ease: "power3.out", duration: 1 });

      const tl = gsap.timeline();

      tl.from(".hero-badge", { autoAlpha: 0, y: 30 })
        .from(".hero-title", { autoAlpha: 0, y: 40 }, "-=0.6")
        .from(".hero-text", { autoAlpha: 0, y: 30 }, "-=0.7")
        .from(buttonsRef.current, {
          autoAlpha: 0,
          y: 20,
          stagger: 0.1,
        }, "-=0.6")
        .from(".hero-social", { autoAlpha: 0, y: 20 }, "-=0.7")
        .from(".hero-stats", { autoAlpha: 0, y: 30 }, "-=0.7");

      gsap.fromTo(
        imageRef.current,
        { autoAlpha: 0, scale: 0.85, rotate: -5 },
        { autoAlpha: 1, scale: 1, rotate: 0, duration: 1.4 }
      );

      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(imageRef.current, {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ===== Resume Button Effects =====
      const btn = resumeBtnRef.current;

      if (btn) {
        const move = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const moveX = (x - rect.width / 2) * 0.15;
          const moveY = (y - rect.height / 2) * 0.25;

          gsap.to(btn, {
            x: moveX,
            y: moveY,
            duration: 0.3,
          });
        };

        const leave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)",
          });
        };

        const click = () => {
          gsap.fromTo(btn,
            { scale: 1 },
            { scale: 0.92, duration: 0.1, yoyo: true, repeat: 1 }
          );
        };

        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
        btn.addEventListener("click", click);

        gsap.to(btn, {
          boxShadow: "0 0 25px rgba(168,85,247,0.6)",
          repeat: -1,
          yoyo: true,
          duration: 1.8,
          ease: "sine.inOut",
        });

        return () => {
          btn.removeEventListener("mousemove", move);
          btn.removeEventListener("mouseleave", leave);
          btn.removeEventListener("click", click);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const baseBtn =
    "relative px-5 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden will-change-transform";

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center px-4 pt-24 relative overflow-hidden bg-[var(--background)]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[140px] rounded-full top-[-250px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-[var(--accent)]/20 blur-[140px] rounded-full bottom-[-200px] right-[-150px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT */}
        <div>
          <span className="hero-badge text-sm font-semibold text-[var(--accent)] tracking-widest uppercase">
            ⚡ MERN Stack Web Developer • AI Engineer
          </span>

          <h1 className="hero-title mt-4 text-5xl sm:text-6xl font-bold leading-tight">
            Hi, I’m
            <span className="block bg-gradient-to-r from-[var(--accent)] to-purple-500 bg-clip-text text-transparent">
              Rafi Ahmed Rizvee
            </span>
          </h1>

          <p className="hero-text mt-6 text-lg text-muted max-w-xl">
            Designing and developing high-performance web applications with
            futuristic UI and AI-powered intelligence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { label: "View Projects", href: "#projects", primary: true },
              { label: "Contact Me", href: "#contact" },
            ].map((btn, i) => (
              <a
                key={i}
                ref={(el) => (buttonsRef.current[i] = el)}
                href={btn.href}
                className={`${baseBtn} ${
                  btn.primary
                    ? "bg-gradient-to-r from-[var(--accent)] to-purple-500 text-white shadow-lg hover:scale-105"
                    : "border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105"
                }`}
              >
                <span className="relative z-10">{btn.label}</span>
              </a>
            ))}

            {/* Resume Button – FINAL */}
            <a
              ref={resumeBtnRef}
              href={resumePDF}
              download
              className={`${baseBtn}
                bg-gradient-to-r from-[var(--accent)] via-purple-500 to-cyan-400
                text-white shadow-lg hover:shadow-2xl
                hover:scale-105 active:scale-95
                border border-white/20`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaDownload />
                Download Resume
              </span>

              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-120%] hover:translate-x-[120%]" />

              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-purple-500/20 blur-xl opacity-60" />
            </a>
          </div>

          {/* Social */}
          <div className="hero-social mt-10 flex gap-5 text-xl">
            {[FaFacebookF, FaLinkedinIn, FaEnvelope, FaGithub].map((Icon, i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="hero-stats mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "20+", label: "Projects" },
              { value: "1+", label: "Years Exp" },
              { value: "8+", label: "Core Skills" },
              { value: "2+", label: "Certifications" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-center hover:scale-105 transition-all"
              >
                <h3 className="text-2xl font-bold text-[var(--accent)]">
                  {stat.value}
                </h3>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center md:justify-end">
          <div
            ref={glowRef}
            className="absolute -inset-10 bg-gradient-to-r from-[var(--accent)] to-purple-500 opacity-30 blur-[100px] rounded-full"
          />

          <div
            ref={imageRef}
            className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_25px_100px_rgba(0,0,0,0.5)]"
          >
            <img
              src={profile}
              alt="Rafi Ahmed Rizvee"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}