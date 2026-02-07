import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_qf8aq9r",   // replace
        "YOUR_TEMPLATE_ID",  // replace
        e.target,
        "YOUR_PUBLIC_KEY"    // replace
      )
      .then(() => {
        setStatus("✅ Message sent successfully! I’ll get back to you soon.");
        e.target.reset();
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="section max-w-2xl mx-auto px-4"
    >
      <h2 className="section-title text-center">Get In Touch</h2>

      <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
        Have a project or question? Send me a message — I’ll reply to your email.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 bg-[var(--card)] p-6 rounded-2xl shadow-lg flex flex-col gap-5"
      >
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="w-full mt-1 p-3 rounded-lg border border-[var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            name="user_email"
            placeholder="you@example.com"
            required
            className="w-full mt-1 p-3 rounded-lg border border-[var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
            className="w-full mt-1 p-3 rounded-lg border border-[var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-sm text-center mt-2">
            {status}
          </p>
        )}

        <p className="text-xs text-center text-gray-400 mt-3">
          Or email me directly at{" "}
          <a
            href="mailto:rizvirafi7@gmail.com"
            className="text-primary underline"
          >
            rizvirafi7@gmail.com
          </a>
        </p>
      </form>
    </section>
  );
}
