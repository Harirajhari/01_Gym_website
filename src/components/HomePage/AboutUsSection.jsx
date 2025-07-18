import React from 'react';
import { Users, HeartPulse, Award, Dumbbell, Wifi, Home } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GetStartedForm from './GetStartedForm'; 

const AboutUsSection = () => {
  // Animation controls for the stats section
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false // Allow re-triggering when scrolling back up
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#f9f9f9] to-[#ffffff] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#E50914] blur-3xl opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 0.2 : 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#E50914] blur-3xl opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 0.2 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Heading with decorative line */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            className="w-16 h-1 bg-[#E50914] mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }} // Allow re-animation
          />
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#222222] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            YOUR <span className="text-[#E50914]">FITNESS JOURNEY</span> STARTS HERE
          </motion.h2>
          <motion.p
            className="text-[#666666] text-lg md:text-xl max-w-3xl text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            Whether you prefer training at home or in our premium facilities, FitnessPro delivers expert guidance wherever you are.
          </motion.p>
        </div>

        {/* Main content - reversed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-8 order-1 lg:order-1">
            <motion.div
              className="bg-white p-6 rounded-xl border-l-4 border-[#E50914] shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E50914]/10 rounded-full">
                  <Wifi className="w-6 h-6 text-[#E50914]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#222222] mb-2">ONLINE PERSONAL TRAINING</h3>
                  <p className="text-[#666666]">Get customized workout plans and 1-on-1 virtual coaching from our certified trainers, anytime, anywhere.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl border-l-4 border-[#E50914] shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E50914]/10 rounded-full">
                  <Home className="w-6 h-6 text-[#E50914]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#222222] mb-2">IN-PERSON TRAINING</h3>
                  <p className="text-[#666666]">Experience our state-of-the-art facilities with premium equipment and hands-on coaching at our locations.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl border-l-4 border-[#E50914] shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E50914]/10 rounded-full">
                  <HeartPulse className="w-6 h-6 text-[#E50914]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#222222] mb-2">HYBRID MEMBERSHIP</h3>
                  <p className="text-[#666666]">Combine both online and in-person training for maximum flexibility and results.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Trial CTA */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#E50914] order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="p-8 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">TRY BOTH EXPERIENCES</h3>
              <p className="text-white/90 mb-6">Get 7 days of complete access to our online platform AND in-person facilities.</p>
              
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Unlimited online workout classes</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>1 in-person training session</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Nutrition plan consultation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Progress tracking app access</span>
                </motion.div>
              </div>
              
              <motion.button
                className="w-full py-3 px-6 bg-white text-[#E50914] font-bold rounded-lg hover:bg-gray-100 transition duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                START FREE TRIAL
              </motion.button>
              
              <p className="text-white/70 text-sm mt-4 text-center">No commitment - cancel anytime</p>
            </div>
            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Stats counter at bottom */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            },
            hidden: { opacity: 0 }
          }}
        >
          {[
            { value: "50+", label: "Certified Trainers" },
            { value: "5K+", label: "Online Members" },
            { value: "10+", label: "Physical Locations" },
            { value: "24/7", label: "Digital Support" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
            >
              <div className="text-4xl font-bold text-[#E50914] mb-2">{stat.value}</div>
              <div className="text-[#666666]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;