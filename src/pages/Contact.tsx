import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import StickyFooter from "../components/Footer/StickyFooter";
import Eyes from "../components/Eyes";
import TextAni from "../components/TextAni";
export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-950 font-body">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextAni delay={0.75} blockColor="#94A3B8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl text-zinc-200 font-mono font-bold mb-6"
            >
              Let’s build the vision you believe in.
            </motion.h1>
          </TextAni>

          <TextAni delay={0.75} blockColor="#94A3B8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl text-zinc-300 mx-auto"
            >
              Ready to elevate your online presence? Fill out the form below or
              book a call directly.
            </motion.p>
          </TextAni>
        </div>
      </section>

      <Eyes />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TextAni blockColor="#94A3B8">
                <h2 className="text-3xl font-display text-zinc-100 font-bold mb-8">
                  Get in Touch
                </h2>
              </TextAni>

              <TextAni blockColor="#94A3B8">
                <p className="text-lg text-zinc-200 mb-12">
                From the city to clients around the world, we help brands turn ideas into meaningful experiences. Reach out for inquiries or custom project quotes.
                </p>
              </TextAni>

              <div className="space-y-8">
                {/* EMAIL */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-xl text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <TextAni blockColor="#94A3B8">
                      <h3 className="font-bold text-lg mb-1 font-mono text-zinc-200">
                        Email Us
                      </h3>
                    </TextAni>

                    <TextAni blockColor="#94A3B8">
                      <p className="font-mono text-zinc-300">
                        admin@spritzstudio.in
                      </p>
                    </TextAni>

                    {/* <TextAni blockColor="#94A3B8">
                      <p className="font-mono text-zinc-300">
                        support@espressomedia.com
                      </p>
                    </TextAni> */}
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-xl text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <TextAni blockColor="#94A3B8">
                      <h3 className="font-bold text-lg mb-1 font-mono text-zinc-100">
                        Call Us
                      </h3>
                    </TextAni>

                    <TextAni blockColor="#94A3B8">
                      <p className="text-zinc-300">+91 9909220121</p>
                    </TextAni>
                    <TextAni blockColor="#94A3B8">
                      <p className="text-zinc-300">+91 9978672740</p>
                    </TextAni>

                    {/* <TextAni blockColor="#94A3B8">
                      <p className="text-sm text-zinc-300 mt-1">
                        Mon-Fri from 9am to 6pm
                      </p>
                    </TextAni> */}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-stone-300 p-8 md:p-10 rounded-3xl shadow-xl shadow-black/5 border border-border/50"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form
                action="https://formspree.io/f/mwvvkrop"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-secondary/30 border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-medium mb-2"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      placeholder="Cool Beans Café"
                      className="w-full px-4 py-3 bg-secondary/30 border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-secondary/30 border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) ..."
                      className="w-full px-4 py-3 bg-secondary/30 border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your café and what you're looking for..."
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary/30 border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors min-h-[150px] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
