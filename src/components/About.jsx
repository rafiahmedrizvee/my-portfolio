import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate section title
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    // Animate skill bars
    skillRefs.current.forEach((skill, i) => {
      gsap.from(skill, {
        scrollTrigger: {
          trigger: skill,
          start: "top 80%",
        },
        width: 0,
        duration: 1.2,
        delay: i * 0.2,
        ease: "power2.out",
      });
    });

    // Animate cards
    cardRefs.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="section max-w-5xl mx-auto py-16 px-4"
      ref={sectionRef}
    >
      <h2 className="section-title text-3xl font-bold text-center mb-8">
        About Me
      </h2>

      {/* Intro */}
      <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
        I am a Full-Stack Web Developer with strong experience in React, Tailwind
        CSS, Node.js, MongoDB, and Firebase. I specialize in building
        responsive UIs, component-driven architecture, and high-performance web
        applications. My goal is to craft seamless, interactive experiences for
        users.
      </p>

      {/* Skills */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
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
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: 0 }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience / Achievements */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Experience & Achievements</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend Developer",
              company: "Tech Company",
              desc: "Developed responsive UI components and interactive web apps using React and Tailwind CSS.",
            },
            {
              title: "Backend Developer",
              company: "Web Solutions",
              desc: "Built REST APIs and integrated MongoDB & Firebase for dynamic web applications.",
            },
            {
              title: "Project: Portfolio Website",
              company: "Personal Project",
              desc: "Designed and developed a full-stack portfolio with dark/light mode, animations, and optimized performance.",
            },
          ].map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="bg-[var(--card)] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h4 className="font-bold text-lg mb-1">{card.title}</h4>
              <p className="text-sm mb-2 text-gray-500">{card.company}</p>
              <p className="text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education / Certifications */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">Education & Certifications</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              title: "B.Sc. in Computer Science",
              institution: "University of Dhaka",
              year: "2020",
            },
            {
              title: "Full-Stack Web Development Certification",
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
              ref={(el) => (cardRefs.current[i + 3] = el)}
              className="bg-[var(--card)] p-4 rounded-xl shadow-md"
            >
              <h4 className="font-semibold">{edu.title}</h4>
              <p className="text-sm text-gray-500">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
