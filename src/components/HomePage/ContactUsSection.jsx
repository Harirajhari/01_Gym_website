import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactUsSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-white overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#E50914]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#E50914]/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading with animation */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Get in <span className="text-[#E50914]">Touch</span>
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Have questions or ready to start your fitness journey? Reach out to us anytime.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Left Side */}
          <motion.div
            className="p-8 bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#111111] mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#666666] mb-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 border border-[#eeeeee] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914]/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#666666] mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 border border-[#eeeeee] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914]/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#666666] mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="w-full px-4 py-3 border border-[#eeeeee] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914]/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#666666] mb-1">Your Message</label>
                <textarea 
                  placeholder="Type your message here..." 
                  rows="4"
                  className="w-full px-4 py-3 border border-[#eeeeee] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914]/50"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#E50914] hover:bg-[#ff1a1a] text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map - Right Side */}
          <motion.div
            className="w-full h-full flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full rounded-xl shadow-xl overflow-hidden border border-[#eeeeee]">
              <iframe
                title="Gym Location"
                className="w-full h-full min-h-[500px]"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=fitness%20gym%20mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
            <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#E50914]/10 rounded-full">
                  <MapPin className="w-5 h-5 text-[#E50914]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#111111]">Our Location</h4>
                  <p className="text-sm text-[#666666]">123 Fitness Lane, Mumbai, MH 400001</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#E50914]/10 rounded-full">
                  <Phone className="w-5 h-5 text-[#E50914]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#111111]">Contact Info</h4>
                  <p className="text-sm text-[#666666]">+91 98765 43210</p>
                  <p className="text-sm text-[#666666]">contact@fitnesspro.in</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;