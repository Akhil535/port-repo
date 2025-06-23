import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utility";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! Thank you for reaching out.");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/20 backdrop-blur-md rounded-lg shadow-lg"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-3xl mx-auto text-lg leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div className="space-y-10 px-6 md:px-0">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="p-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <a
                    href="mailto:akhiljithu1999@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    akhiljithu1999@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone</h4>
                  <a
                    href="tel:+971562476897"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +971 5624 76897
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground">Abu Dhabi, UAE</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-lg">Connect With Me</h4>
              <div className="flex space-x-6 justify-center">
                <a
                  href="https://www.linkedin.com/in/akhil-v-33a226190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://twitter.com/" // Add your twitter link if you want
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter size={28} />
                </a>
                <a
                  href="https://instagram.com/" // Add your Instagram link if you want
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  placeholder="Hello, I'd like to discuss..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button text-foreground w-full flex items-center justify-center gap-2 font-semibold transition-transform active:scale-95",
                  isSubmitting
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-primary/90"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
