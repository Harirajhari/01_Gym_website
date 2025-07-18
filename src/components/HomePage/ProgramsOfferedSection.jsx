import React from 'react';
import { Dumbbell, Flame, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgramsOfferedSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const programs = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Strength Training',
      description: 'Build muscle, boost metabolism, gain strength and confidence.',
      highlights: ['Customized weight plans', 'Form correction', 'Progressive overload'],
      bgClass: "bg-gradient-to-br from-[#E50914]/10 to-[#ff4d4d]/10"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Fat Burn Workouts',
      description: 'High-intensity routines designed to burn calories and shred fat efficiently.',
      highlights: ['HIIT sessions', 'Metabolic conditioning', 'Body composition tracking'],
      bgClass: "bg-gradient-to-br from-[#E50914]/15 to-[#ff4d4d]/15"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Cardio & Endurance',
      description: 'Improve stamina and heart health with structured cardio routines.',
      highlights: ['Heart rate monitoring', 'Endurance building', 'Recovery protocols'],
      bgClass: "bg-gradient-to-br from-[#E50914]/10 to-[#ff4d4d]/10"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Personal Coaching',
      description: 'Customized 1-on-1 sessions tailored to your unique goals and challenges.',
      highlights: ['Goal-specific programming', 'Nutrition guidance', 'Accountability checks'],
      bgClass: "bg-gradient-to-br from-[#E50914]/15 to-[#ff4d4d]/15"
    },
  ];

  return (
    <section 
      className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] overflow-hidden"
      ref={ref}
    >
      {/* Animated floating gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#E50914] to-[#ff4d4d] blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
            opacity: inView ? 0.2 : 0
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#ff4d4d] to-[#E50914] blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
            opacity: inView ? 0.2 : 0
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Staggered heading elements */}
        <motion.div
          className="flex flex-col items-center mb-16 overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            },
            hidden: { opacity: 0 }
          }}
        >
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-[#E50914] to-[#ff4d4d] mb-4"
            variants={{
              visible: { scaleX: 1 },
              hidden: { scaleX: 0 }
            }}
            transition={{ duration: 0.8 }}
          />
          
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 }
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block">OUR </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#ff4d4d] inline-block">
              TRAINING PROGRAMS
            </span>
          </motion.h2>
          
          <motion.p
            className="text-[#AAAAAA] text-lg md:text-xl max-w-3xl text-center leading-relaxed"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Scientifically designed programs to transform your body and elevate your fitness
          </motion.p>
        </motion.div>

        {/* Asymmetric card grid with featured program */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            },
            hidden: { opacity: 0 }
          }}
        >
          {/* Left column */}
          <div className="space-y-8">
            <motion.div
              className={`p-8 rounded-2xl ${programs[0].bgClass} backdrop-blur-sm border border-[#ffffff10] shadow-2xl`}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 }
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-4 bg-[#ffffff10] rounded-full w-fit mb-6 backdrop-blur-sm">
                {programs[0].icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{programs[0].title}</h3>
              <p className="text-[#CCCCCC] mb-6">{programs[0].description}</p>
              <button className="flex items-center gap-2 text-white font-medium group">
                <span className="group-hover:text-[#ff4d4d] transition">Explore program</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div
              className={`p-8 rounded-2xl ${programs[1].bgClass} backdrop-blur-sm border border-[#ffffff10] shadow-2xl`}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 }
              }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="p-4 bg-[#ffffff10] rounded-full w-fit mb-6 backdrop-blur-sm">
                {programs[1].icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{programs[1].title}</h3>
              <p className="text-[#CCCCCC] mb-6">{programs[1].description}</p>
              <button className="flex items-center gap-2 text-white font-medium group">
                <span className="group-hover:text-[#ff4d4d] transition">Explore program</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          
          {/* Center featured program */}
          <motion.div
            className={`p-10 rounded-3xl bg-gradient-to-br from-[#E50914]/20 to-[#ff4d4d]/20 backdrop-blur-sm border-2 border-[#ff4d4d]/30 shadow-2xl flex flex-col justify-between`}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 }
            }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="p-5 bg-[#ffffff15] rounded-full w-fit mb-8 backdrop-blur-sm mx-auto">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">{programs[3].title}</h3>
              <p className="text-[#EEEEEE] mb-8 text-center">{programs[3].description}</p>
              
              <div className="bg-[#00000030] rounded-xl p-6 mb-8 backdrop-blur-sm">
                <h4 className="text-[#ff4d4d] font-semibold mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {programs[3].highlights.map((highlight, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 20 }
                      }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#ff4d4d] flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#CCCCCC]">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            <motion.button
              className="w-full py-4 px-6 bg-gradient-to-r from-[#E50914] to-[#ff4d4d] text-white font-bold rounded-xl hover:from-[#ff1a1a] hover:to-[#ff6b6b] transition transform hover:scale-[1.02] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Dumbbell className="w-5 h-5" />
              Start Personal Coaching
            </motion.button>
          </motion.div>
          
          {/* Right column */}
          <div className="space-y-8">
            <motion.div
              className={`p-8 rounded-2xl ${programs[2].bgClass} backdrop-blur-sm border border-[#ffffff10] shadow-2xl`}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 }
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-4 bg-[#ffffff10] rounded-full w-fit mb-6 backdrop-blur-sm">
                {programs[2].icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{programs[2].title}</h3>
              <p className="text-[#CCCCCC] mb-6">{programs[2].description}</p>
              <button className="flex items-center gap-2 text-white font-medium group">
                <span className="group-hover:text-[#ff4d4d] transition">Explore program</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div
              className={`p-8 rounded-2xl bg-gradient-to-br from-[#E50914]/15 to-[#ff4d4d]/15 backdrop-blur-sm border border-[#ffffff10] shadow-2xl`}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 }
              }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="p-4 bg-[#ffffff10] rounded-full w-fit mb-6 backdrop-blur-sm">
                <Dumbbell className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Custom Program</h3>
              <p className="text-[#CCCCCC] mb-6">Don't see what you need? We'll build a completely customized plan just for you.</p>
              <button className="flex items-center gap-2 text-white font-medium group">
                <span className="group-hover:text-[#ff4d4d] transition">Request consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated CTA section */}
        <motion.div 
          className="mt-24 text-center"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 30 }
          }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-8"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="p-2 rounded-full bg-gradient-to-r from-[#E50914] to-[#ff4d4d] animate-spin-slow">
              <div className="bg-[#1a1a1a] rounded-full p-4">
                <Dumbbell className="w-8 h-8 text-[#ff4d4d]" />
              </div>
            </div>
          </motion.div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform?</h3>
          <p className="text-[#AAAAAA] max-w-2xl mx-auto mb-8">Join thousands of members who've achieved their fitness goals with our proven programs.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-[#E50914] to-[#ff4d4d] text-white px-8 py-4 rounded-full font-bold hover:from-[#ff1a1a] hover:to-[#ff6b6b] transition transform hover:scale-105 flex items-center gap-3 shadow-lg shadow-[#E50914]/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Dumbbell className="w-5 h-5" />
              Get Started Today
            </motion.button>
            <motion.button
              className="bg-transparent text-white border-2 border-[#E50914] px-8 py-4 rounded-full font-bold hover:bg-[#E50914]/10 transition transform hover:scale-105 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Compare All Programs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsOfferedSection;