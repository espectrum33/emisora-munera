import React from 'react';
import { Radio, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-purple-400 to-blue-400 p-2 rounded-full">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Radio Munera</h3>
                <p className="text-sm text-purple-300">Tu estación favorita</p>
              </div>
            </div>
            <p className="text-purple-200 mb-6 max-w-md">
              Más de 25 años conectando corazones con la mejor música, noticias y entretenimiento de Colombia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-purple-200 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#programas" className="text-purple-200 hover:text-white transition-colors duration-300">Programas</a></li>
              <li><a href="#vivo" className="text-purple-200 hover:text-white transition-colors duration-300">En Vivo</a></li>
              <li><a href="#nosotros" className="text-purple-200 hover:text-white transition-colors duration-300">Nosotros</a></li>
              <li><a href="#contacto" className="text-purple-200 hover:text-white transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors duration-300">Publicidad</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors duration-300">Eventos</a></li>
              <li>
                <a 
                  href="https://rebrand.ly/ZS_DM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  Cursos
                </a>
              </li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors duration-300">Podcast</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors duration-300">App Móvil</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800/30 mt-8 pt-8 text-center">
          <p className="text-purple-200 flex items-center justify-center space-x-2">
            <span>© 2025 Radio Munera. Hecho con</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>en Colombia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;