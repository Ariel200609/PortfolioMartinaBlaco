import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-keppel-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-ibm-plex">MB</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-ibm-plex">Martina Blanco</h3>
                  <p className="text-gray-300 font-work-sans">Marketing Estratégico</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 font-work-sans leading-relaxed">
                Especialista en marketing estratégico y comunicación digital. 
                Ayudo a empresas a crecer con estrategias efectivas y creativas.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/5492923564152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-white text-lg">📞</span>
                </a>
                <a
                  href="mailto:martiblanco05@gmail.com"
                  className="w-10 h-10 bg-keppel-600 hover:bg-keppel-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-white text-lg">📧</span>
                </a>
                <a
                  href="https://instagram.com/martublenco25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-verdigris-600 hover:bg-verdigris-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-white text-lg">📸</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-ibm-plex">Enlaces Rápidos</h4>
              <ul className="space-y-3 font-work-sans">
                <li>
                  <button
                    onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Sobre Mí
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-ibm-plex">Contacto</h4>
              <div className="space-y-4 font-work-sans">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/5492923564152"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 transition-colors duration-300"
                    >
                      2923 564152
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-keppel-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a
                      href="mailto:martiblanco05@gmail.com"
                      className="text-white hover:text-emerald-400 transition-colors duration-300"
                    >
                      martiblanco05@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-verdigris-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📸</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Instagram</p>
                    <a
                      href="https://instagram.com/martublenco25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 transition-colors duration-300"
                    >
                      @martublenco25
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-work-sans">
              © {currentYear} Martina Blanco. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 