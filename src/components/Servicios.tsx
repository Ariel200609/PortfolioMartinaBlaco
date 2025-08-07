import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '../hooks/useScrollAnimation';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: '📱',
    title: 'Promoción en Redes Sociales',
    description: 'Gestión integral de redes sociales con contenido atractivo y estrategias de engagement.',
    color: 'pink',
    bgColor: 'from-pink-50 to-pink-100',
    borderColor: 'border-pink-500'
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Diseño de Estrategias de Comunicación',
    description: 'Desarrollo de estrategias personalizadas que conectan con tu audiencia objetivo.',
    color: 'yellow',
    bgColor: 'from-yellow-50 to-yellow-100',
    borderColor: 'border-yellow-500'
  },
  {
    id: 3,
    icon: '📊',
    title: 'Análisis e Investigación de Mercado',
    description: 'Estudios de mercado profundos para identificar oportunidades y tendencias.',
    color: 'mint',
    bgColor: 'from-mint-50 to-mint-100',
    borderColor: 'border-mint-500'
  },
  {
    id: 4,
    icon: '📈',
    title: 'Optimización de Campañas Publicitarias',
    description: 'Mejora continua de campañas para maximizar ROI y alcance efectivo.',
    color: 'sky',
    bgColor: 'from-sky-50 to-sky-100',
    borderColor: 'border-sky-500'
  },
  {
    id: 5,
    icon: '🧠',
    title: 'Branding Personal y Profesional',
    description: 'Desarrollo de identidad de marca coherente y memorable.',
    color: 'purple',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-500'
  }
];

const Servicios: React.FC = () => {
  const [ref, isVisible] = useElementOnScreen();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="servicios" className="section-padding bg-gradient-custom relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 10,
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
              Mis <motion.span 
                className="text-gradient"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Servicios
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto font-work-sans"
              variants={itemVariants}
            >
              Soluciones integrales de marketing estratégico para hacer crecer tu negocio
            </motion.p>
          </motion.div>
          
          {/* Stacked Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`card bg-gradient-to-br ${service.bgColor} border-l-4 ${service.borderColor} relative`}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  zIndex: services.length - index,
                  transform: `translateY(-${index * 5}px)`
                }}
              >
                <div className="flex items-start mb-4">
                  <motion.div 
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-${service.color}-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <span className="text-white text-lg sm:text-2xl">{service.icon}</span>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-ibm-plex">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-work-sans leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <motion.button 
                    className={`w-full bg-${service.color}-500 hover:bg-${service.color}-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Saber Más
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-ibm-plex">
                ¿Listo para Transformar tu Negocio?
              </h3>
              <p className="text-lg text-gray-600 mb-8 font-work-sans">
                Trabajemos juntos para crear estrategias que impulsen tu marca al siguiente nivel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="btn-primary"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Consulta
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
                  Ver Portfolio
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios; 