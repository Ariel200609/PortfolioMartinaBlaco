import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const y3 = useTransform(scrollY, [0, 500], [0, -150]);
  
  // Scale effect for avatar
  const avatarScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const avatarY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="min-h-screen bg-gradient-custom flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background decoration */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: y1 }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-keppel-300 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-verdigris-300 rounded-full blur-3xl"
          style={{ y: y3 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <div className="container-custom text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated Avatar */}
          <motion.div 
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl"
            style={{ scale: avatarScale, y: avatarY }}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
            animate={{
              boxShadow: [
                "0 25px 50px -12px rgba(255, 153, 200, 0.25)",
                "0 25px 50px -12px rgba(228, 193, 249, 0.4)",
                "0 25px 50px -12px rgba(255, 153, 200, 0.25)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.span 
              className="text-white text-4xl font-bold font-ibm-plex"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              MB
            </motion.span>
          </motion.div>
          
          {/* Animated Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 font-ibm-plex"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Martina
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-gradient"
            >
              Blanco
            </motion.span>
          </motion.h1>
          
          {/* Animated Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 font-work-sans px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Técnica en Administración | Marketing Estratégico
          </motion.p>
          
          {/* Animated Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Servicios
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contactarme
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Animated Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <motion.div 
              className="w-1 h-3 bg-emerald-500 rounded-full mt-2"
              animate={{ 
                y: [0, 8, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 