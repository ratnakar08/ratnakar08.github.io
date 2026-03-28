export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-black border-t border-black dark:border-white text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">About</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="order-last md:order-first">
            <div className="w-full h-96 overflow-hidden">
              <img
                src="/images/profile1.png"
                alt="Kota Ratnakar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg opacity-70 leading-relaxed">
              I'm a Computer Science student passionate about building practical web applications. I focus on clean code, thoughtful design, and solving real problems.
            </p>

            <p className="text-lg opacity-70 leading-relaxed">
              I work with React, Node.js, and modern web technologies. Currently learning full-stack development through projects and internships.
            </p>

            <div className="space-y-6 pt-6 border-t border-black dark:border-white">
              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide opacity-60">Education</h3>
                <p className="text-base opacity-70">
                  B.Tech Computer Science Engineering
                </p>
                <p className="text-sm opacity-50">Sreenidhi Institute of Science and Technology • 2023 – Present</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide opacity-60">Experience</h3>
                <p className="text-base opacity-70">
                  Student Developer
                </p>
                <p className="text-sm opacity-50">Hackathons & Academic Projects • Ongoing</p>   
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
