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
        "service_qf8aq9r",
        "template_qf8aq9r", // ⚠️ use TEMPLATE ID here
        e.target,
        "PUBLIC_KEY"
      )
      .then(() => {
        setStatus("✅ Message sent successfully! I’ll contact you soon.");
        e.target.reset();
      })
      .catch(() => {
        setStatus("❌ Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contact Me
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Have an idea or project in mind? Let’s talk.  
            I usually reply within 24 hours.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Let’s build something great
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Feel free to reach out for collaborations, freelance work,
                or just a friendly hello 👋
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a
                href="mailto:rizvirafi7@gmail.com"
                className="text-lg font-medium text-primary hover:underline"
              >
                rizvirafi7@gmail.com
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-xl space-y-5"
          >
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className="w-full mt-2 p-3 rounded-lg border border-[var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Your Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="john@example.com"
                required
                className="w-full mt-2 p-3 rounded-lg border border-[var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                required
                className="w-full mt-2 p-3 rounded-lg border border-[var(--border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 text-base rounded-xl disabled:opacity-60"
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-center mt-3">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
