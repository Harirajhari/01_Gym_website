import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Dumbbell, User, Phone, Mail, Calendar, ArrowRight, HeartPulse } from 'lucide-react';

const GetStartedForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'weight-loss',
    experience: 'beginner',
    preferredTime: 'morning'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-all duration-200 group"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-red-500 to-orange-500 shadow-lg">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Start Your Fitness Journey</h2>
                  <p className="text-sm text-gray-300 mt-1">Get personalized training in just a few steps</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 py-2.5"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 py-2.5"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 py-2.5"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label htmlFor="goal" className="block text-sm font-medium text-gray-300">
                      Primary Goal
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 py-2.5"
                    >
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="toning">Toning</option>
                      <option value="endurance">Endurance</option>
                      <option value="flexibility">Flexibility</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-300">
                      Fitness Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 py-2.5"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300">
                    Preferred Training Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 py-2.5"
                    >
                      <option value="morning">Morning (6am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-5pm)</option>
                      <option value="evening">Evening (5pm-9pm)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-1">
                  <HeartPulse className="w-4 h-4" />
                  <span>We care about your fitness journey</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GetStartedForm;