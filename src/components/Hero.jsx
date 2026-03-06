import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";

import profile from "../assets/images/profile.png";
import resumePDF from "../assets/images/MAZHARUL_ALAM_RAFI_Mern Stack Developer.pdf";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const cursorGlow = useRef(null);
  const resumeBtnRef = useRef(null);

  // particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.defaults({ ease: "power3.out", duration: 1 });

      gsap.from(".hero-badge", { y: 40, opacity: 0 });
      gsap.from(".hero-title", { y: 60, opacity: 0, delay: .2 });
      gsap.from(".hero-text", { y: 40, opacity: 0, delay: .4 });
      gsap.from(".hero-btn", { y: 20, opacity: 0, stagger: .1, delay: .6 });
      gsap.from(".hero-social", { y: 20, opacity: 0, delay: .8 });

      gsap.from(imageRef.current, {
        scale: .8,
        rotate: -8,
        opacity: 0,
        duration: 1.4
      });

      gsap.to(imageRef.current,{
        y:12,
        duration:3,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
      });

      gsap.from(".hero-stats",{
        y:80,
        opacity:0,
        scrollTrigger:{
          trigger:".hero-stats",
          start:"top 80%"
        }
      });

    }, heroRef);

    return () => ctx.revert();

  }, []);

  // cursor glow
  useEffect(() => {

    const moveGlow = (e) => {
      gsap.to(cursorGlow.current,{
        x:e.clientX-200,
        y:e.clientY-200,
        duration:.4
      });
    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);

  }, []);

  // magnetic resume button
  useEffect(() => {

    const btn = resumeBtnRef.current;

    const move = (e) => {

      const rect = btn.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const moveX = (x - rect.width/2) * .2;
      const moveY = (y - rect.height/2) * .2;

      gsap.to(btn,{ x:moveX, y:moveY, duration:.3 });
    };

    const leave = () => {
      gsap.to(btn,{ x:0, y:0, duration:.6, ease:"elastic.out(1,0.4)" });
    };

    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", leave);

    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", leave);
    };

  }, []);

  return (

<section
ref={heroRef}
className="min-h-screen flex items-center px-4 pt-24 relative overflow-hidden bg-[var(--background)]"
>

{/* Cursor Glow */}

<div
ref={cursorGlow}
className="pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-[120px] bg-purple-500/20 z-0"
/>

{/* Particles */}

<Particles
className="absolute inset-0 -z-10"
init={particlesInit}
options={{
particles:{
number:{ value:40 },
color:{ value:"#a855f7" },
links:{
enable:true,
color:"#a855f7",
distance:150,
opacity:.2
},
move:{ enable:true, speed:1 },
size:{ value:{ min:1, max:3 }},
opacity:{ value:.4 }
}
}}
/>

{/* holographic background */}

<div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4)_0%,transparent_60%)] animate-pulse -z-10" />

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

{/* LEFT */}

<div>

<span className="hero-badge text-sm font-semibold text-[var(--accent)] tracking-widest uppercase">
⚡ MERN Stack Developer • AI Engineer
</span>

<h1 className="hero-title mt-4 text-5xl sm:text-6xl font-bold leading-tight">
Hi, I'm
<span className="block text-[var(--accent)]">

<Typewriter
words={[
"Rafi Ahmed Rizvee",
"MERN Stack Developer",
"AI Engineer",
"Creative Web Architect"
]}
loop
cursor
typeSpeed={70}
deleteSpeed={40}
/>

</span>
</h1>

<p className="hero-text mt-6 text-lg text-muted max-w-xl">
I build high-performance web applications, AI solutions and futuristic UI experiences that scale globally.
</p>

{/* BUTTONS */}

<div className="mt-10 flex flex-wrap items-center gap-4 max-w-xl">

<a
href="#projects"
className="hero-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-lg whitespace-nowrap"
>
View Projects
</a>

<a
href="#contact"
className="hero-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-lg whitespace-nowrap"
>
Let's Talk
</a>

<a
href="#contact"
className="hero-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-lg whitespace-nowrap"
>
Hire Me
</a>

<a
ref={resumeBtnRef}
href={resumePDF}
download
className="hero-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-lg whitespace-nowrap"
>
<FaDownload />
Resume
</a>

</div>

{/* SOCIAL */}

<div className="hero-social mt-10 flex gap-5 text-xl">

{[
FaFacebookF,
FaLinkedinIn,
FaEnvelope,
FaGithub
].map((Icon,i)=>(

<div
key={i}
className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 transition-all cursor-pointer"
>
<Icon/>
</div>

))}

</div>

{/* STATS */}

<div className="hero-stats mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">

{[
{value:"20+",label:"Projects"},
{value:"1+",label:"Years Exp"},
{value:"8+",label:"Core Skills"},
{value:"2+",label:"Certifications"}
].map((stat,i)=>(

<div
key={i}
className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-center hover:scale-105 transition"
>

<h3 className="text-2xl font-bold text-[var(--accent)]">
{stat.value}
</h3>

<p className="text-xs text-muted">
{stat.label}
</p>

</div>

))}

</div>

</div>

{/* RIGHT PROFILE */}

<div className="flex justify-center md:justify-end">

<div
ref={imageRef}
className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_25px_100px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:rotate-y-12 hover:-rotate-x-6 hover:scale-105"
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