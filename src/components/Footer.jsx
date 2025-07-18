import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-gray-300 pt-16 pb-8 px-6 md:px-16">
      {/* Decorative top border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent mb-12"></div>

      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-4 h-4 bg-[#E50914] rounded-full mr-3"></span>
              FitnessPro
            </h3>
            <p className="mb-6 text-gray-400">
              Transforming lives through fitness since 2015. Our mission is to make health and wellness accessible to everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#E50914] transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E50914] transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E50914] transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-[#E50914] transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#E50914] transition">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-[#E50914] transition">Programs</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-[#E50914] transition">Trainers</a></li>
              <li><a href="#transformations" className="text-gray-400 hover:text-[#E50914] transition">Transformations</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#E50914] transition">Contact</a></li>
            </ul>

          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E50914] mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Fitness Lane, Mumbai, MH 400001</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E50914] mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E50914] mt-1 flex-shrink-0" />
                <span className="text-gray-400">support@fitnesspro.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E50914] mt-1 flex-shrink-0" />
                <span className="text-gray-400">Mon-Sun: 6AM - 10PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on special offers and fitness tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 bg-[#2a2a2a] text-white border border-[#3a3a3a] rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#E50914] w-full"
              />
              <button
                type="submit"
                className="bg-[#E50914] hover:bg-[#ff1a1a] text-white px-4 py-3 rounded-r-lg transition"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright and bottom section */}
        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hariraj. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#E50914] transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#E50914] transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[#E50914] transition text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;