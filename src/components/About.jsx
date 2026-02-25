import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaPython,
  FaDocker,
  FaBrain,
  FaGitAlt,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaProjectDiagram,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "power3.out",
        duration: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(".about-heading", {
        autoAlpha: 0,
        yPercent: 30,
      })
        .from(
          ".about-text",
          {
            autoAlpha: 0,
            yPercent: 20,
          },
          "-=0.6"
        )
        .from(
          cardsRef.current,
          {
            autoAlpha: 0,
            yPercent: 15,
            scale: 0.96,
            stagger: 0.08,
            clearProps: "all",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const baseCardClass =
    "group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/10 will-change-transform";

  const mernSkills = [
    { name: "HTML5", icon: <FaJs className="text-orange-500 text-2xl" /> },
    { name: "CSS3", icon: <FaJs className="text-blue-500 text-2xl" /> },
    { name: "Tailwind CSS", icon: <FaReact className="text-sky-400 text-2xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
    { name: "ReactJS", icon: <FaReact className="text-cyan-400 text-2xl" /> },
    { name: "NodeJS", icon: <FaNodeJs className="text-green-400 text-2xl" /> },
    { name: "ExpressJS", icon: <FaNodeJs className="text-green-300 text-2xl" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-600 text-2xl" /> },
    { name: "Firebase", icon: <FaDatabase className="text-blue-400 text-2xl" /> },
  ];

  const aiSkills = [
    { name: "Python", icon: <FaPython className="text-blue-500 text-2xl" /> },
    { name: "Pandas", icon: <FaPython className="text-blue-400 text-2xl" /> },
    { name: "NumPy", icon: <FaPython className="text-blue-300 text-2xl" /> },
    { name: "Matplotlib", icon: <FaBrain className="text-purple-400 text-2xl" /> },
    { name: "scikit-learn", icon: <FaBrain className="text-purple-500 text-2xl" /> },
    { name: "TensorFlow", icon: <FaBrain className="text-red-400 text-2xl" /> },
    { name: "Keras", icon: <FaBrain className="text-pink-400 text-2xl" /> },
    { name: "PyTorch", icon: <FaBrain className="text-red-600 text-2xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-600 text-2xl" /> },
    { name: "MLflow", icon: <FaBrain className="text-purple-300 text-2xl" /> },
    { name: "SpaCy", icon: <FaBrain className="text-purple-400 text-2xl" /> },
    { name: "FastAPI", icon: <FaPython className="text-green-400 text-2xl" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-gray-400 text-2xl" /> },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-400 text-2xl" /> },
    { name: "Team Collaboration", icon: <FaUsers className="text-green-400 text-2xl" /> },
    { name: "Effective Communication", icon: <FaComments className="text-blue-400 text-2xl" /> },
    { name: "Project Management", icon: <FaProjectDiagram className="text-purple-400 text-2xl" /> },
    { name: "Adaptability", icon: <FaBrain className="text-pink-400 text-2xl" /> },
  ];

  const education = [
    { title: "B.Sc. in Computer Science", institution: "Daffodil Institute of IT", year: "2025" },
    { title: "Full-Stack Web Development", institution: "Eshikhon", year: "2025" },
    { title: "Data Science & Machine Learning", institution: "Ostad", year: "2026" },
    { title: "AI Engineering Certification", institution: "Ostad / Coursera", year: "2026" },
  ];

  let cardIndex = 0;

  const renderCard = (content) => (
    <div
      ref={(el) => (cardsRef.current[cardIndex++] = el)}
      className={`${baseCardClass} flex items-center gap-3`}
    >
      {content}
    </div>
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative max-w-6xl mx-auto py-24 px-4"
    >
      <h2 className="about-heading text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[var(--accent)] to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <p className="about-text text-lg text-center text-muted max-w-3xl mx-auto mb-16">
        I am a passionate Full-Stack Web Developer and AI Engineer with strong
        technical and professional skills. I combine MERN Stack expertise with
        AI/ML knowledge to build scalable and intelligent solutions.
      </p>

      {/* MERN */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">
          MERN Stack Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mernSkills.map((skill, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[cardIndex++] = el)}
              className={`${baseCardClass} flex items-center gap-3`}
            >
              {skill.icon}
              <h4 className="font-medium">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* AI */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">
          AI Engineering Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {aiSkills.map((skill, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[cardIndex++] = el)}
              className={`${baseCardClass} flex items-center gap-3`}
            >
              {skill.icon}
              <h4 className="font-medium">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Soft */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Soft Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {softSkills.map((skill, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[cardIndex++] = el)}
              className={`${baseCardClass} flex items-center gap-3`}
            >
              {skill.icon}
              <h4 className="font-medium">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-12">
          Education & Certifications
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[cardIndex++] = el)}
              className={`${baseCardClass}`}
            >
              <h4 className="font-semibold text-lg">{edu.title}</h4>
              <p className="text-sm text-muted mt-1">
                {edu.institution}
              </p>
              <span className="inline-block mt-4 text-xs font-medium text-[var(--accent)] bg-[color:var(--accent)/10] px-3 py-1 rounded-full">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}