import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, Phone, Mail, MapPin, BookOpen, Facebook, Instagram, Twitter, Youtube, MessageCircle, Plane, Sparkles, Zap, Download } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const links = [
    {
      title: "🌐 Página Web Oficial",
      description: "Visita radiomunera.com",
      url: "https://radiomunera.com/",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-sky-400 via-blue-500 to-indigo-600",
      shadowColor: "shadow-sky-500/25",
      hoverGlow: "hover:shadow-sky-400/40"
    },
    {
      title: "✈️ Destinos Viajes Munera",
      description: "Descubre destinos increíbles",
      url: "http://destinosviajesmunera.com.co/",
      icon: <Plane className="w-6 h-6" />,
      gradient: "from-cyan-400 via-sky-500 to-blue-600",
      shadowColor: "shadow-cyan-500/25",
      hoverGlow: "hover:shadow-cyan-400/40"
    },
    {
      title: "📘 Facebook",
      description: "Síguenos en Facebook",
      url: "https://www.facebook.com/RadioMunera790/?locale=es_LA",
      icon: <Facebook className="w-6 h-6" />,
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      shadowColor: "shadow-blue-500/25",
      hoverGlow: "hover:shadow-blue-400/40"
    },
    {
      title: "📷 Instagram",
      description: "Fotos y videos",
      url: "https://www.instagram.com/radiomunera/?hl=es",
      icon: <Instagram className="w-6 h-6" />,
      gradient: "from-pink-500 via-purple-500 to-indigo-600",
      shadowColor: "shadow-pink-500/25",
      hoverGlow: "hover:shadow-pink-400/40"
    },
    {
      title: "🐦 Twitter",
      description: "Últimas noticias",
      url: "https://x.com/radiomunera?lang=es",
      icon: <Twitter className="w-6 h-6" />,
      gradient: "from-sky-400 via-blue-500 to-blue-600",
      shadowColor: "shadow-sky-500/25",
      hoverGlow: "hover:shadow-sky-400/40"
    },
    {
      title: "📺 YouTube",
      description: "Videos y programas",
      url: "https://www.youtube.com/@muneraradio",
      icon: <Youtube className="w-6 h-6" />,
      gradient: "from-red-500 via-red-600 to-pink-600",
      shadowColor: "shadow-red-500/25",
      hoverGlow: "hover:shadow-red-400/40"
    },
    {
      title: "💬 WhatsApp",
      description: "Contáctanos directamente",
      url: "https://wa.me/573001234567",
      icon: <MessageCircle className="w-6 h-6" />,
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      shadowColor: "shadow-green-500/25",
      hoverGlow: "hover:shadow-green-400/40"
    },
    {
      title: "🎓 Cursos de Formación",
      description: "Aprende con nosotros",
      url: "https://rebrand.ly/ZS_DM",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-violet-500 via-purple-500 to-indigo-600",
      shadowColor: "shadow-violet-500/25",
      hoverGlow: "hover:shadow-violet-400/40"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background with Mesh Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Glow */}
      <div
        className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-md mx-auto">
          {/* Profile Section */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative mb-8">
              {/* Animated Ring */}
              <div className="absolute inset-0 w-40 h-40 mx-auto">
                <div className="w-full h-full rounded-full border-2 border-sky-400/30 animate-spin-slow"></div>
                <div className="absolute inset-2 w-36 h-36 rounded-full border border-blue-400/20 animate-pulse"></div>
              </div>
              
              {/* Logo Container */}
              <div className="relative w-36 h-36 mx-auto bg-white/95 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl border border-white/20 group hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/image copy.png" 
                  alt="Munera Eastman Logo" 
                  className="w-28 h-28 object-contain relative z-10"
                />
                
                {/* Floating Icons */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg animate-bounce">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 drop-shadow-2xl">
                Munera Eastman
              </h1>
              
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500/20 to-blue-600/20 backdrop-blur-xl px-6 py-3 rounded-full border border-sky-300/30 shadow-lg">
                <Zap className="w-4 h-4 text-sky-400 animate-pulse" />
                <span className="text-sky-100 font-semibold">Tu estación favorita 📻</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">
                🎵 La mejor música, noticias y entretenimiento<br/>
                📍 Medellín, Colombia • 🕐 24/7 en vivo
              </p>
              
              {/* Enhanced Live Button */}
              <a
                href="https://www.youtube.com/watch?v=4q2ifWNifo8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-8 py-4 rounded-2xl font-bold text-white shadow-2xl shadow-red-500/25 hover:shadow-red-400/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-red-400/30"
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping"></div>
                </div>
                <span>EN VIVO AHORA</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              {/* Download APK Button */}
              <a
                href="/emisora_munera.apk"
                download="emisora_munera.apk"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-2xl font-bold text-white shadow-2xl shadow-green-500/25 hover:shadow-green-400/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-green-400/30"
              >
                <Download className="w-5 h-5" />
                <span>📱 DESCARGAR APP</span>
                <div className="relative">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-6 mb-12">
            {links.map((link, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-3xl p-6 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-white/20 hover:border-white/40 group shadow-xl ${link.shadowColor} ${link.hoverGlow} hover:shadow-2xl`}
                >
                  <div className="flex items-center space-x-5">
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${link.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20`}>
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {link.icon}
                      
                      {/* Sparkle Effect */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-sky-200 transition-colors duration-300">
                        {link.title}
                      </h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                        {link.description}
                      </p>
                    </div>
                    
                    <div className="relative">
                      <ExternalLink className="w-6 h-6 text-sky-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      <div className="absolute inset-0 bg-sky-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Enhanced Contact Info */}
          <div className={`bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-12 shadow-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
            <h3 className="text-white font-bold text-xl mb-6 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Información de Contacto
            </h3>
            <div className="space-y-5">
              {[
                { icon: Phone, text: "+57 300 123 4567", color: "text-green-400" },
                { icon: Mail, text: "info@radiomunera.com", color: "text-blue-400" },
                { icon: MapPin, text: "Medellín, Antioquia", color: "text-purple-400" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group hover:bg-white/5 rounded-xl p-3 transition-all duration-300">
                  <div className={`w-10 h-10 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Footer */}
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl">
              <p className="text-gray-300 mb-3 font-medium">
                © 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 font-bold">Munera Eastman</span>
              </p>
              <p className="text-sm text-gray-400">
                Hecho con ❤️ por{' '}
                <a 
                  href="https://rapidsitepro.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 font-semibold hover:from-sky-300 hover:to-blue-400 transition-all duration-300 relative group"
                >
                  Vende Express
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;