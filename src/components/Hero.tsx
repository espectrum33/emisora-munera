import React from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Radio Munera
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            La mejor música, noticias y entretenimiento las 24 horas
          </p>
          <p className="text-lg mb-12 text-purple-200 max-w-2xl mx-auto">
            Conectamos corazones y mentes con la mejor programación radial de Colombia. 
            Únete a nuestra comunidad y vive la experiencia Radio Munera.
          </p>

          {/* Live Player */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 p-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Play className="w-8 h-8 text-white" />
              </button>
              <div className="text-center">
                <p className="text-sm text-purple-200 mb-1">AHORA SUENA</p>
                <p className="text-lg font-semibold">Los Mejores Éxitos</p>
                <p className="text-sm text-purple-300">Con María José</p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300">
                <Volume2 className="w-6 h-6 text-white" />
              </button>
            </div>
            
            {/* Audio Visualizer */}
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-purple-500 to-blue-400 rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 40 + 10}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#programas"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Programas
            </a>
            <a
              href="https://rebrand.ly/ZS_DM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-md border border-white/30"
            >
              Nuestros Cursos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;