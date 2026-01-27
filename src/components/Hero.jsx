import profile from "../assets/profile.png";


export default function Hero() {
        
  return (
    <section className="section min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT: TEXT */}
        <div>
          <span className="text-sm font-semibold text-[var(--accent)] tracking-wide">
            Full-Stack Web Developer
          </span>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I’m <br />
            <span className="text-[var(--accent)]">
              Rafi Ahmed Rizvee
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl">
            I build modern, scalable, and high-performance web applications
            using React, MERN stack, and clean UI architecture. Currently
            expanding into Data Science & Machine Learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          
          {/* Glow */}
          <div
            className="
              absolute -inset-4
              rounded-full
              bg-[var(--accent)]
              opacity-20 blur-3xl
            "
          />

          {/* Image Card */}
          <div
            className="
              relative
              w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80
              rounded-2xl
              overflow-hidden
              border border-[var(--border)]
              bg-[var(--card)]
            "
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
