import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section className="w-full min-h-screen bg-slate-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 py-16 lg:py-24">
        {/* PAGE HEADER */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            Our Services
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            Explore our recent projects showcasing our expertise in designing
            and developing.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* CARD 1 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* Image slot – replace src with your own image */}
            <div className="relative h-60 bg-slate-200">
              <img
                src="/images/demo.png"
                alt="E‑Commerce platform preview"
                className="h-full w-full object-cover"
              />
              {/* <span className="absolute top-4 right-4 rounded-full bg-emerald-500 text-white text-xs font-semibold px-3 py-1">
                Completed
              </span> */}
            </div>

            <div className="p-8 flex flex-col gap-5 flex-1">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  Jobify Website
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A full‑featured online shopping platform with product
                  management, shopping cart, and secure checkout. Built with
                  modern web technologies to deliver a seamless shopping
                  experience.
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between text-sm text-slate-500">
                {/* <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-slate-400" />
                  <span>3 months</span>
                </div> */}
                <button
                  onClick={() =>
                    window.open("https://jobify-mern.vercel.app/", "_blank")
                  }
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                >
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.article>

          {/* CARD 2 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* Image slot – replace src with your own image */}
            <div className="relative h-60 bg-slate-200">
              <img
                src="/images/demo2.png"
                alt="Mobile fitness app preview"
                className="h-full w-full object-cover"
              />
              {/* <span className="absolute top-4 right-4 rounded-full bg-emerald-500 text-white text-xs font-semibold px-3 py-1">
                Completed
              </span> */}
            </div>

            <div className="p-8 flex flex-col gap-5 flex-1">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  Rough Draft Website
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  An intuitive fitness tracking application that helps users
                  monitor their workouts, set goals, and track progress.
                  Real‑time analytics and clean dashboards make staying active
                  simple.
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between text-sm text-slate-500">
                {/* <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-slate-400" />
                  <span>4 months</span>
                </div> */}
                <button
                  onClick={() =>
                    window.open("https://ochhi-clone.netlify.app/", "_blank")
                  }
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                >
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Demo;
