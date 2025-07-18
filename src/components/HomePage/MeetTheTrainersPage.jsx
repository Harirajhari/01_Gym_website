import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Facebook, Linkedin, Award, Dumbbell, HeartPulse, StretchHorizontal } from 'lucide-react';

const MeetTheTrainersPage = () => {
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true // Changed to true for better performance
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (sectionInView) {
      controls.start("visible");
    }
  }, [controls, sectionInView]);

   const trainers = [
    {
      name: 'Arjun Mehta',
      role: 'Strength & Conditioning Coach',
      image: '/trainer-3.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
      specialtyIcon: <Dumbbell className="w-5 h-5 text-[#E50914]" />,
      years: '8+ years experience',
      clients: '500+ clients transformed'
    },
    {
      name: 'Riya Sharma',
      role: 'Cardio & HIIT Specialist',
      image: '/trainer-2.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
      specialtyIcon: <HeartPulse className="w-5 h-5 text-[#E50914]" />,
      years: '6+ years experience',
      clients: '300+ clients transformed'
    },
    {
      name: 'Vikram Singh',
      role: 'Bodybuilding Expert',
      image: '/trainer-1.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
      specialtyIcon: <Award className="w-5 h-5 text-[#E50914]" />,
      years: '10+ years experience',
      clients: '2x national champion'
    },
    {
      name: 'Neha Kapoor',
      role: 'Yoga & Mobility Coach',
      image: '/trainer-4.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
      specialtyIcon: <StretchHorizontal className="w-5 h-5 text-[#E50914]" />,
      years: '7+ years experience',
      clients: 'RYT 500 certified'
    },
  ];
  // Preload images when component mounts
  React.useEffect(() => {
    trainers.forEach(trainer => {
      const img = new Image();
      img.src = trainer.image;
    });
  }, []);

  return (
    <section 
      className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#f9f9f9] to-[#ffffff] overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative elements - simplified */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#E50914] blur-3xl opacity-20" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#E50914] blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center mb-16"
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
            className="w-16 h-1 bg-[#E50914] mb-4"
            variants={{
              visible: { scaleX: 1 },
              hidden: { scaleX: 0 }
            }}
            transition={{ duration: 0.8 }}
          />
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#222222] mb-4 text-center"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 }
            }}
            transition={{ duration: 0.6 }}
          >
            MEET OUR <span className="text-[#E50914]">EXPERT TRAINERS</span>
          </motion.h2>
          <motion.p
            className="text-[#666666] text-lg md:text-xl max-w-3xl text-center leading-relaxed"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our certified coaches combine science-based training with personalized attention to help you achieve extraordinary results.
          </motion.p>
        </motion.div>

        {/* Trainer Cards with optimized image loading */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
              }
            },
            hidden: { opacity: 0 }
          }}
        >
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    ease: "easeOut"
                  }
                },
                hidden: { 
                  opacity: 0, 
                  y: 30,
                  transition: {
                    duration: 0.4,
                    ease: "easeIn"
                  }
                }
              }}
              whileHover={{ y: -10 }}
            >
              {/* Trainer Image with lazy loading */}
              <div className="relative aspect-[3.8/4] overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse">
                  {/* Optional: Show a tiny blurred placeholder first */}
                  <img 
                    src={trainer.placeholderImage || '/placeholder-trainer.jpg'} 
                    alt="" 
                    className="w-full h-full object-cover blur-sm scale-110"
                    loading="lazy"
                  />
                </div>
                
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2">
                    {trainer.specialtyIcon}
                    <span className="text-white font-medium">{trainer.role}</span>
                  </div>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#222222] mb-1">
                  {trainer.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#666666] mb-4">
                  <span>{trainer.years}</span>
                  <span>•</span>
                  <span>{trainer.clients}</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 border-t border-[#eeeeee] pt-4">
                  <a
                    href={trainer.socials.instagram}
                    className="text-[#666666] hover:text-[#E50914] transition-colors"
                    aria-label={`${trainer.name} Instagram`}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.socials.facebook}
                    className="text-[#666666] hover:text-[#E50914] transition-colors"
                    aria-label={`${trainer.name} Facebook`}
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.socials.linkedin}
                    className="text-[#666666] hover:text-[#E50914] transition-colors"
                    aria-label={`${trainer.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-[#666666] mb-6">
            Ready to start training with our experts?
          </p>
          <motion.button
            className="bg-[#E50914] hover:bg-[#ff1a1a] text-white font-bold py-3 px-8 rounded-full transition shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTrainersPage;