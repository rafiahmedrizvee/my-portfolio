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
  const mernRefs = useRef([]);
  const aiRefs = useRef([]);
  const softRefs = useRef([]);
  const educationRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-animate",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      [mernRefs.current, aiRefs.current, softRefs.current, educationRefs.current].forEach((arr) => {
        gsap.from(arr, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const mernSkills = [
    { name: "HTML5", icon: <FaJs className="text-orange-500 text-2xl" /> },
    { name: "CSS3", icon: <FaJs className="text-blue-500 text-2xl" /> },
    { name: "Tailwind CSS", icon: <FaReact className="text-blue-400 text-2xl" /> },
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
    { name: "Jupyter Notebook", icon: <FaBrain className="text-orange-400 text-2xl" /> },
    { name: "Google Colab", icon: <FaBrain className="text-blue-400 text-2xl" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-gray-500 text-2xl" /> },
    { name: "FastAPI", icon: <FaPython className="text-green-400 text-2xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-600 text-2xl" /> },
    { name: "MLflow", icon: <FaBrain className="text-purple-300 text-2xl" /> },
    { name: "SpaCy", icon: <FaBrain className="text-purple-400 text-2xl" /> },
    { name: "OpenAI", icon: <FaBrain className="text-purple-500 text-2xl" /> },
    { name: "LangChain", icon: <FaBrain className="text-purple-600 text-2xl" /> },
    { name: "Postman", icon: <FaBrain className="text-orange-500 text-2xl" /> },
    { name: "Swagger (OpenAPI)", icon: <FaBrain className="text-blue-500 text-2xl" /> },
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

  return (
    <section id="about" ref={sectionRef} className="relative max-w-6xl mx-auto py-24 px-4">
      <h2 className="about-animate text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[var(--accent)] to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <p className="about-animate text-lg text-center text-muted max-w-3xl mx-auto mb-16">
        I am a passionate Full-Stack Web Developer and AI Engineer with strong technical and professional skills. I combine MERN Stack expertise with AI/ML knowledge to build scalable and intelligent solutions. Alongside my technical skills, I excel in communication, collaboration, and problem-solving, ensuring every project is delivered efficiently and effectively.
      </p>

      {/* MERN Stack */}
      <div className="mb-16">
        <h3 className="about-animate text-2xl font-semibold text-center mb-8">MERN Stack Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mernSkills.map((skill, i) => (
            <div key={i} ref={(el) => (mernRefs.current[i] = el)} className="about-animate group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3">
              {skill.icon}
              <h4 className="font-medium">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* AI Engineering */}
      <div className="mb-16">
        <h3 className="about-animate text-2xl font-semibold text-center mb-8">AI Engineering Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {aiSkills.map((skill, i) => (
            <div key={i} ref={(el) => (aiRefs.current[i] = el)} className="about-animate group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3">
              {skill.icon}
              <h4 className="font-medium">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mb-16">
        <h3 className="about-animate text-2xl font-semibold text-center mb-8">Soft Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {softSkills.map((skill, i) => (
            <div key={i} ref={(el) => (softRefs.current[i] = el)} className="about-animate group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3">
              {skill.icon}
              <h4 className="font-medium">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="education-section">
        <h3 className="about-animate text-2xl font-semibold text-center mb-12">Education & Certifications</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div key={i} ref={(el) => (educationRefs.current[i] = el)} className="about-animate backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
              <h4 className="font-semibold text-lg">{edu.title}</h4>
              <p className="text-sm text-muted mt-1">{edu.institution}</p>
              <span className="inline-block mt-4 text-xs font-medium text-[var(--accent)] bg-[color:var(--accent)/10] px-3 py-1 rounded-full">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}