import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const glowRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({ ease: "power3.out", duration: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(".contact-heading", { autoAlpha: 0, y: 80 })
        .from(".contact-subtext", { autoAlpha: 0, y: 30 }, "-=0.7")
        .from(".contact-left", { autoAlpha: 0, x: -60 }, "-=0.6")
        .from(".contact-form", { autoAlpha: 0, x: 60, scale: 0.96 }, "-=0.8")
        .from(".contact-field", { autoAlpha: 0, y: 25, stagger: 0.07 }, "-=0.6");

      /* 🌌 Cursor Aura */
      const glow = glowRef.current;
      const moveGlow = (e) => {
        gsap.to(glow, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.35,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", moveGlow);

      /* 🧊 3D Tilt */
      const form = formRef.current;

      const tilt = (e) => {
        const rect = form.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        gsap.to(form, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          transformOrigin: "center",
          duration: 0.35,
        });
      };

      const resetTilt = () => {
        gsap.to(form, { rotateX: 0, rotateY: 0, duration: 0.6 });
      };

      form.addEventListener("mousemove", tilt);
      form.addEventListener("mouseleave", resetTilt);

      /* ⚡ Floating Particles */
      if (particlesRef.current) {
        const particles = particlesRef.current.querySelectorAll(".particle");

        particles.forEach((p) => {
          gsap.fromTo(
            p,
            { y: 40, opacity: 0 },
            {
              y: -80,
              opacity: 0.35,
              duration: gsap.utils.random(6, 12),
              repeat: -1,
              ease: "none",
              delay: gsap.utils.random(0, 4),
            }
          );
        });
      }

      return () => {
        window.removeEventListener("mousemove", moveGlow);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm("service_qf8aq9r", "template_qf8aq9r", e.target, "PUBLIC_KEY")
      .then(() => {
        setStatus("✅ Transmission Successful");
        e.target.reset();

        gsap.fromTo(
          ".status-text",
          { autoAlpha: 0, y: 10, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6 }
        );

        gsap.fromTo(
          buttonRef.current,
          { scale: 1 },
          { scale: 1.12, yoyo: true, repeat: 1, duration: 0.18 }
        );
      })
      .catch(() => {
        setStatus("❌ Signal Lost. Retry.");
      })
      .finally(() => setLoading(false));
  };

  const generateParticles = (count = 24) =>
    Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className="particle absolute w-2 h-2 bg-[var(--accent)] rounded-full opacity-20"
        style={{
          left: `${Math.random() * 100}%`,
          bottom: `${Math.random() * 20}%`,
        }}
      />
    ));

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 🌌 Cursor Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-80 h-80 bg-[var(--accent)]/20 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* ⚡ Particle Field */}
      <div ref={particlesRef} className="absolute inset-0 -z-10">
        {generateParticles()}
      </div>

      {/* 💫 Background Aura */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute w-[600px] h-[600px] bg-[var(--accent)]/10 blur-[160px] rounded-full top-[-200px] right-[-120px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full bottom-[-180px] left-[-120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="contact-heading text-5xl font-bold bg-gradient-to-r from-[var(--accent)] to-purple-500 bg-clip-text text-transparent">
            Let’s Work Together
          </h2>
          <p className="contact-subtext mt-5 text-muted">
            Premium builds. Intelligent design. Future-ready systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="contact-left space-y-6">
            <h3 className="text-2xl font-semibold">
              Have a vision? Let’s build it ✨
            </h3>
            <p className="text-muted">
              Available for elite web & AI-powered projects.
            </p>

            <div>
              <p className="text-sm text-muted">Email</p>
              <a
                href="mailto:rizvirafi7@gmail.com"
                className="text-lg text-[var(--accent)] hover:opacity-80 transition"
              >
                rizvirafi7@gmail.com
              </a>
            </div>
          </div>

          <div className="relative">
            {/* 💎 Holographic Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--accent)] via-purple-500 to-[var(--accent)] opacity-40 blur-xl animate-pulse" />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] space-y-5"
            >
              {["Your Name", "Your Email"].map((label, i) => (
                <div key={i} className="contact-field">
                  <label className="text-sm">{label}</label>
                  <input
                    type={i === 1 ? "email" : "text"}
                    name={i === 1 ? "user_email" : "user_name"}
                    required
                    className="w-full mt-2 p-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-[var(--accent)] outline-none transition"
                  />
                </div>
              ))}

              <div className="contact-field">
                <label className="text-sm">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full mt-2 p-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-[var(--accent)] outline-none transition resize-none"
                />
              </div>

              <button
                ref={buttonRef}
                type="submit"
                disabled={loading}
                className="relative w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[var(--accent)] to-purple-500 overflow-hidden group"
              >
                <span className="relative z-10">
                  {loading ? "Transmitting..." : "Send Message"}
                </span>

                {/* ✨ Cyber Shimmer */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </button>

              {status && (
                <p className="status-text text-sm text-center text-muted pt-2">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}