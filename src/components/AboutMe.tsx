import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../hooks/useScrollAnimation';

const AboutMe: React.FC = () => {
  const [ref, isVisible] = useElementOnScreen();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="sobre-mi" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-ibm-plex"
              variants={itemVariants}
            >
              Sobre <motion.span 
                className="text-gradient"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Mí
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 font-work-sans leading-relaxed"
              variants={itemVariants}
            >
              Soy una técnica en administración apasionada por el marketing estratégico. 
              Mi formación me ha permitido desarrollar una visión integral del negocio, 
              combinando análisis de datos con creatividad para crear estrategias efectivas.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 font-work-sans leading-relaxed"
              variants={itemVariants}
            >
              Me especializo en comunicación digital, análisis de mercado y diseño de 
              campañas publicitarias que conectan con el público objetivo de manera auténtica.
            </motion.p>
            
            {/* Key stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4 sm:gap-6"
              variants={itemVariants}
            >
              <motion.div 
                className="text-center p-3 sm:p-4 bg-pink-50 rounded-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Compromiso</div>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-purple-50 rounded-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Disponibilidad</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stacked Cards */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* Card 1 - Formation */}
            <motion.div 
              className="card bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-500 relative z-30 mb-4 sm:mb-6"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white text-lg sm:text-xl">🎓</span>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-ibm-plex">
                    Formación
                  </h3>
                  <p className="text-gray-600 font-work-sans">
                    Técnica en Administración con orientación en Marketing
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Skills */}
            <motion.div 
              className="card bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 relative z-20 mb-4 sm:mb-6"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              style={{ transform: 'translateY(-10px)' }}
            >
              <div className="flex items-start">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white text-lg sm:text-xl">💡</span>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-ibm-plex">
                    Aptitudes
                  </h3>
                  <p className="text-gray-600 font-work-sans">
                    Comunicación, creatividad, análisis de datos, diseño de estrategias
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Focus */}
            <motion.div 
              className="card bg-gradient-to-br from-mint-50 to-mint-100 border-l-4 border-mint-500 relative z-10"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              style={{ transform: 'translateY(-20px)' }}
            >
              <div className="flex items-start">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-mint-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white text-lg sm:text-xl">🎯</span>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-ibm-plex">
                    Enfoque
                  </h3>
                  <p className="text-gray-600 font-work-sans">
                    Marketing estratégico y comunicación digital efectiva
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe; 