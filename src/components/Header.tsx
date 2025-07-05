import React, { useState } from 'react';
import { Menu, X, Radio, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-2xl">
      {/* Top bar with contact info */}
      <div className="border-b border-purple-800/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-300" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-300" />
                <span>info@radiomunera.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-purple-300" />
              <span>Medellín, Colombia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-400 to-blue-400 p-2 rounded-full">
              <Radio className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Radio Munera
              </h1>
              <p className="text-sm text-purple-300">Tu estación favorita</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-purple-300 transition-colors duration-300 font-medium">
              Inicio
            </a>
            <a href="#programas" className="hover:text-purple-300 transition-colors duration-300 font-medium">
              Programas
            </a>
            <a href="#vivo" className="hover:text-purple-300 transition-colors duration-300 font-medium">
              En Vivo
            </a>
            <a href="#nosotros" className="hover:text-purple-300 transition-colors duration-300 font-medium">
              Nosotros
            </a>
            <a 
              href="https://rebrand.ly/ZS_DM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors duration-300 font-medium"
            >
              Cursos
            </a>
            <a href="#contacto" className="hover:text-purple-300 transition-colors duration-300 font-medium">
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-purple-300 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="hover:text-purple-300 transition-colors duration-300 font-medium">
                Inicio
              </a>
              <a href="#programas" className="hover:text-purple-300 transition-colors duration-300 font-medium">
                Programas
              </a>
              <a href="#vivo" className="hover:text-purple-300 transition-colors duration-300 font-medium">
                En Vivo
              </a>
              <a href="#nosotros" className="hover:text-purple-300 transition-colors duration-300 font-medium">
                Nosotros
              </a>
              <a 
                href="https://rebrand.ly/ZS_DM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors duration-300 font-medium"
              >
                Cursos
              </a>
              <a href="#contacto" className="hover:text-purple-300 transition-colors duration-300 font-medium">
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;