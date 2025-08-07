import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax and opacity effects based on scroll
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
      style={{ opacity: headerOpacity, y: headerY }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center"
              style={{ scale: logoScale }}
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                transition: { duration: 0.6 }
              }}
            >
              <span className="text-white font-bold text-sm sm:text-lg font-ibm-plex">MB</span>
            </motion.div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 font-ibm-plex">Martina Blanco</h1>
              <p className="text-xs text-gray-500 font-work-sans">Marketing Estratégico</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {[
              { label: 'Sobre Mí', id: 'sobre-mi' },
              { label: 'Servicios', id: 'servicios' },
              { label: 'Contacto', id: 'contacto' }
            ].map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300 font-work-sans"
                whileHover={{ 
                  y: -2,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contacto')}
              className="btn-primary text-sm py-2 px-4"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Trabajemos Juntos
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden"
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: 'hidden' }}
        >
          <motion.nav 
            className="py-4 border-t border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-col space-y-4">
              {[
                { label: 'Sobre Mí', id: 'sobre-mi' },
                { label: 'Servicios', id: 'servicios' },
                { label: 'Contacto', id: 'contacto' }
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300 font-work-sans py-2"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('contacto')}
                className="btn-primary text-sm py-2 px-4 w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isMenuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4 }}
              >
                Trabajemos Juntos
              </motion.button>
            </div>
          </motion.nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 