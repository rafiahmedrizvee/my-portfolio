import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);
  const educationRefs = useRef([]);
  const bubblesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title + intro
      gsap.from(".about-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Skill bars animation
      skillRefs.current.forEach((el) => {
        const value = el.dataset.level;

        gsap.fromTo(
          el,
          { width: "0%" },
          {
            width: value,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // Education cards
      gsap.from(educationRefs.current, {
        scrollTrigger: {
          trigger: ".education-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
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
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  // Generate bubbles
  const bubbleCount = 15;
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => (
    <span
      key={i}
      className="bubble absolute w-4 h-4 bg-[var(--accent)] rounded-full opacity-30"
      style={{
        left: `${Math.random() * 95}%`,
        bottom: `${Math.random() * 10}%`,
      }}
    />
  ));

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative max-w-5xl mx-auto py-20 px-4 overflow-hidden"
    >
      {/* Bubbles */}
      <div ref={bubblesRef} className="absolute inset-0 pointer-events-none">
        {bubbles}
      </div>

      <h2 className="about-animate text-3xl font-bold text-center mb-6">
        About Me
      </h2>

      <p className="about-animate text-lg text-center max-w-3xl mx-auto mb-14">
        I am a Full-Stack Web Developer with strong experience in React, Tailwind
        CSS, Node.js, MongoDB, and Firebase. I focus on building smooth,
        scalable, and performance-driven web applications.
      </p>

      {/* Skills */}
      <div className="mb-16">
        <h3 className="about-animate text-2xl font-semibold text-center mb-8">
          Skills & Technologies
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "React.js", level: "90%" },
            { name: "Tailwind CSS", level: "85%" },
            { name: "Node.js", level: "80%" },
            { name: "MongoDB", level: "75%" },
            { name: "Firebase", level: "70%" },
            { name: "JavaScript", level: "95%" },
            { name: "HTML & CSS", level: "95%" },
            { name: "Git & GitHub", level: "85%" },
          ].map((skill, i) => (
            <div key={i} className="bg-[var(--card)] p-4 rounded-xl shadow-md">
              <h4 className="font-semibold mb-2">{skill.name}</h4>

              <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  ref={(el) => (skillRefs.current[i] = el)}
                  data-level={skill.level}
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="education-section mt-20">
        <h3 className="text-2xl font-semibold text-center mb-12">
          Education & Certifications
        </h3>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-[var(--border)]" />

          <div className="space-y-10">
            {[
              {
                title: "B.Sc. in Computer Science",
                institution: "University of Dhaka",
                year: "2020",
              },
              {
                title: "Full-Stack Web Development",
                institution: "freeCodeCamp",
                year: "2022",
              },
              {
                title: "React & Modern JavaScript",
                institution: "Udemy",
                year: "2023",
              },
            ].map((edu, i) => (
              <div
                key={i}
                ref={(el) => (educationRefs.current[i] = el)}
                className="relative pl-14 group"
              >
                {/* Dot */}
                <span
                  className="
                    absolute left-[6px] top-3
                    w-3 h-3
                    rounded-full
                    bg-[var(--accent)]
                    ring-4 ring-[var(--card)]
                    transition-transform
                    duration-300
                    group-hover:scale-125
                  "
                />

                {/* Card */}
                <div
                  className="
                    bg-[var(--card)]
                    backdrop-blur
                    border border-[var(--border)]
                    rounded-2xl
                    p-6
                    shadow-md
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:shadow-xl
                    group-hover:border-[var(--accent)]
                  "
                >
                  <h4 className="font-semibold text-lg">{edu.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.institution}</p>
                  <span
                    className="
                      inline-block
                      mt-3
                      text-xs
                      font-medium
                      text-[var(--accent)]
                      bg-[color:var(--accent)/10]
                      px-3 py-1
                      rounded-full
                    "
                  >
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
