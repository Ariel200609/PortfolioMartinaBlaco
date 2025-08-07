import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../hooks/useScrollAnimation';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: '📞',
    label: 'WhatsApp',
    value: '2923 564152',
    link: 'https://wa.me/5492923564152',
    color: 'pink',
    bgColor: 'from-pink-50 to-pink-100',
    borderColor: 'border-pink-500'
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'martiblanco05@gmail.com',
    link: 'mailto:martiblanco05@gmail.com',
    color: 'sky',
    bgColor: 'from-sky-50 to-sky-100',
    borderColor: 'border-sky-500'
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@martublenco25',
    link: 'https://instagram.com/martublenco25',
    color: 'purple',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-500'
  }
];

const Contacto: React.FC = () => {
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
    <section id="contacto" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
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
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-ibm-plex"
              variants={itemVariants}
            >
              ¿Trabajamos <motion.span 
                className="text-gradient"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Juntos?
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto font-work-sans"
              variants={itemVariants}
            >
              Estoy aquí para ayudarte a hacer crecer tu negocio con estrategias de marketing efectivas
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contact Information */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-ibm-plex">
                  ¡Conectemos!
                </h3>
                <p className="text-lg text-gray-600 mb-8 font-work-sans">
                  Elige el medio que prefieras para comenzar nuestra conversación
                </p>
              </div>
              
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block card bg-gradient-to-br ${contact.bgColor} border-l-4 ${contact.borderColor} relative`}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ 
                    zIndex: contactInfo.length - index,
                    transform: `translateY(-${index * 3}px)`
                  }}
                >
                  <div className="flex items-center">
                    <motion.div 
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-${contact.color}-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <span className="text-white text-lg sm:text-2xl">{contact.icon}</span>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1 font-ibm-plex">
                        {contact.label}
                      </h4>
                      <p className="text-gray-600 font-work-sans">
                        {contact.value}
                      </p>
                    </div>
                    <motion.div 
                      className="text-gray-400"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-pink-50 to-sky-50 rounded-2xl p-6 sm:p-8 shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-ibm-plex">
                  Envíame un Mensaje
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-work-sans">
                        Nombre
                      </label>
                      <motion.input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 font-work-sans"
                        placeholder="Tu nombre"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-work-sans">
                        Email
                      </label>
                      <motion.input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 font-work-sans"
                        placeholder="tu@email.com"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-work-sans">
                      Asunto
                    </label>
                    <motion.input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 font-work-sans"
                      placeholder="¿En qué puedo ayudarte?"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-work-sans">
                      Mensaje
                    </label>
                    <motion.textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 font-work-sans resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enviar Mensaje
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 sm:p-8 text-white"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-3xl font-bold mb-4 font-ibm-plex">
                ¿Listo para Empezar?
              </h3>
              <p className="text-xl mb-6 font-work-sans opacity-90">
                No esperes más para transformar tu negocio
              </p>
              <motion.button 
                className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                ¡Conversemos Ahora!
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto; 