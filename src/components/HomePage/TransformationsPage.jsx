import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BadgeCheck, Flame, Award, Heart, ArrowRight } from "lucide-react";

const transformations = [
  {
    name: "Rahul Sharma",
    quote: "Lost 12kg in 3 months with our HIIT program!",
    beforeImg: "/testmoni_1_before.jpg",
    afterImg: "/testmoni_1_after.jpg",
    duration: "12 Weeks",
    program: "Fat Burn Intensive",
    stats: ["-12kg Fat", "+8% Muscle", "42cm Waist Reduction"]
  },
  {
    name: "Anita Verma",
    quote: "Toned and confident after strength training.",
    beforeImg: "/testmoni_1_before.jpg",
    afterImg: "/testmoni_1_after.jpg",
    duration: "16 Weeks",
    program: "Body Sculpt Pro",
    stats: ["-8% Body Fat", "2x Strength Gain", "Posture Correction"]
  },
  {
    name: "Aman Kapoor",
    quote: "From 0 to 10 pull-ups in 8 weeks!",
    beforeImg: "/testmoni_1_before.jpg",
    afterImg: "/testmoni_1_after.jpg",
    duration: "8 Weeks",
    program: "Calisthenics Mastery",
    stats: ["10+ Pull-ups", "2x Endurance", "Core Strength"]
  },
];

const TransformationsPage = () => {
  return (
    <AnimatePresence>
      <motion.section 
        className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white py-24 px-6 md:px-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#E50914] blur-3xl opacity-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#E50914] blur-3xl opacity-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, y: -30 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#E50914]/20 px-4 py-2 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 text-[#E50914]" />
              <span className="text-sm font-medium text-[#E50914]">PROVEN RESULTS</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Real <span className="text-[#E50914]">Transformations</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-[#aaaaaa] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Witness the incredible journeys of our members who transformed their bodies and lives with our expert guidance.
            </motion.p>
          </motion.div>

          {/* Transformation Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-[#1a1a1a] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                exit={{ opacity: 0, y: 20 }}
              >
                {/* Before/After Comparison */}
                <motion.div 
                  className="relative h-72 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                >
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full border-r border-[#333333]">
                      <motion.img 
                        src={item.beforeImg} 
                        alt="Before" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                      />
                      <div className="absolute bottom-0 left-0 w-1/2 bg-black/70 py-2 text-center">
                        <span className="text-white text-sm font-medium">BEFORE</span>
                      </div>
                    </div>
                    <div className="w-1/2 h-full">
                      <motion.img 
                        src={item.afterImg} 
                        alt="After" 
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                      />
                      <div className="absolute bottom-0 right-0 w-1/2 bg-[#E50914]/90 py-2 text-center">
                        <span className="text-white text-sm font-medium">AFTER {item.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <BadgeCheck className="text-[#E50914] w-5 h-5" />
                        {item.name}
                      </h3>
                      <div className="text-sm text-[#E50914] font-medium mt-1">{item.program}</div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#E50914]/20 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-[#E50914]" fill="#E50914" />
                      <Star className="w-4 h-4 text-[#E50914]" fill="#E50914" />
                      <Star className="w-4 h-4 text-[#E50914]" fill="#E50914" />
                      <Star className="w-4 h-4 text-[#E50914]" fill="#E50914" />
                      <Star className="w-4 h-4 text-[#E50914]" fill="#E50914" />
                    </div>
                  </div>

                  <motion.p 
                    className="text-[#cccccc] italic mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.8 }}
                  >
                    "{item.quote}"
                  </motion.p>
                  
                  <motion.div 
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.8 }}
                  >
                    {item.stats.map((stat, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.8 + i * 0.1, duration: 0.5 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-[#E50914]/20 flex items-center justify-center flex-shrink-0">
                          <Flame className="w-3 h-3 text-[#E50914]" />
                        </div>
                        <span className="text-sm text-[#bbbbbb]">{stat}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button 
                    className="flex items-center gap-2 text-[#E50914] font-medium group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 1.1, duration: 0.8 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="group-hover:underline">View full story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Stats & CTA */}
          <motion.div 
            className="mt-20 bg-[#1a1a1a] rounded-xl p-8 md:p-12 text-center border border-[#333333]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {[500, 96, 4.9, 10].map((value, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-[#E50914] mb-2">{value}{index === 1 ? '%' : index === 2 ? '' : '+'}</div>
                  <div className="text-[#aaaaaa] text-sm">
                    {index === 0 ? 'Transformations' : 
                     index === 1 ? 'Success Rate' : 
                     index === 2 ? 'Average Rating' : 'Years Experience'}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready for Your Transformation?
            </motion.h3>
            <motion.p 
              className="text-[#aaaaaa] max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our proven system works for everyone - whether you're looking to lose weight, build muscle, or improve overall health.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-[#E50914] hover:bg-[#ff1a1a] text-white px-8 py-3 rounded-full font-bold transition transform hover:scale-105 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Flame className="w-5 h-5" />
                Start My Journey
              </motion.button>
              <motion.button 
                className="bg-transparent text-white border border-[#E50914] px-8 py-3 rounded-full font-bold hover:bg-[#E50914]/10 transition transform hover:scale-105 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Stories</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

const Star = ({ className, fill }) => (
  <svg className={className} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

export default TransformationsPage;