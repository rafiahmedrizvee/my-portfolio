const skills = [
  "React.js", "JavaScript (ES6+)", "Tailwind CSS", "GSAP",
  "Node.js", "Express.js", "MongoDB", "Firebase",
  "REST APIs", "Git & GitHub", "Responsive Design"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map(skill => (
          <div key={skill} className="card text-center font-medium">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
