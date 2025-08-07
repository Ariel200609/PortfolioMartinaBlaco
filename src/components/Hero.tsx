import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, 200]);
  const y3 = useTransform(scrollY, [0, 500], [0, -100]);
  
  // Scale and rotation effects
  const avatarScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const avatarY = useTransform(scrollY, [0, 300], [0, -50]);
  const titleScale = useTransform(scrollY, [0, 200], [1, 0.9]);
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  // Animated text characters
  const text = "Martina Blanco";
  const characters = text.split('');

  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-mint-50 flex items-center justify-center relative overflow-hidden pt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 153, 200, 0.3) 0%, transparent 50%)`
        }}
        animate={{
          backgroundPosition: [`${mousePosition.x}px ${mousePosition.y}px`]
        }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Background Shapes */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-yellow-300 to-mint-300 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.7, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-sky-300 to-purple-300 rounded-full blur-3xl"
          style={{ y: y3 }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.5, 0.1],
            rotate: [180, 0, 180]
          }}
          transition={{
            duration: 12,
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
          {/* 3D Animated Avatar */}
          <motion.div 
            className="relative mx-auto mb-8"
            style={{ scale: avatarScale, y: avatarY }}
          >
            <motion.div 
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-pink-400 via-purple-500 to-sky-400 rounded-full flex items-center justify-center shadow-2xl relative"
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg)`
              }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                transition: { duration: 0.3 }
              }}
              animate={{
                boxShadow: [
                  "0 25px 50px -12px rgba(255, 153, 200, 0.4)",
                  "0 35px 70px -15px rgba(228, 193, 249, 0.6)",
                  "0 25px 50px -12px rgba(255, 153, 200, 0.4)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span 
                className="text-white text-5xl sm:text-6xl font-bold font-ibm-plex"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                MB
              </motion.span>
            </motion.div>
            
            {/* Orbiting elements around avatar */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[0, 120, 240].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-80px)`
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          
          {/* Dynamic Animated Title */}
          <motion.div 
            className="mb-6"
            style={{ scale: titleScale }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 font-ibm-plex"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    color: isHovered ? (index % 2 === 0 ? "#ff99c8" : "#e4c1f9") : "#1f2937"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -10,
                    color: "#ff99c8"
                  }}
                  className="inline-block cursor-pointer"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
          
          {/* Animated Subtitle with Typewriter Effect */}
          <motion.div className="mb-8">
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-work-sans px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                Técnica en Administración
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="mx-4 text-gradient font-semibold"
              >
                |
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.7 }}
              >
                Marketing Estratégico
              </motion.span>
            </motion.p>
          </motion.div>
          
          {/* Enhanced Animated Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <motion.button 
              className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-2xl overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Ver Servicios</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.button 
              className="relative px-8 py-4 border-2 border-pink-500 text-pink-600 font-bold rounded-full shadow-xl overflow-hidden group hover:bg-pink-500 hover:text-white transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contactarme</span>
              <motion.div
                className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-8 h-12 border-2 border-pink-500 rounded-full flex justify-center items-start pt-2 cursor-pointer"
            whileHover={{ 
              scale: 1.2,
              borderColor: "#e4c1f9"
            }}
          >
            <motion.div 
              className="w-2 h-4 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <motion.p
            className="text-xs text-gray-500 mt-2 font-work-sans"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll para explorar
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 