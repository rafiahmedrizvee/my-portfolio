import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => setStatus("Message sent!"))
    .catch(() => setStatus("Failed. Try again."));
    e.target.reset();
  };

  return (
    <section id="contact" className="section max-w-xl mx-auto">
      <h2 className="section-title text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <input type="text" name="user_name" placeholder="Name" required className="p-3 border rounded-lg bg-[var(--card)] border-[var(--border)]" />
        <input type="email" name="user_email" placeholder="Email" required className="p-3 border rounded-lg bg-[var(--card)] border-[var(--border)]" />
        <textarea name="message" placeholder="Message" rows="5" required className="p-3 border rounded-lg bg-[var(--card)] border-[var(--border)]"></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </section>
  );
}
