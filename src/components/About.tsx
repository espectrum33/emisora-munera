import React from 'react';
import { Award, Users, Heart, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      number: "25+",
      label: "Años de Experiencia",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-400 to-blue-400"
    },
    {
      number: "500K+",
      label: "Oyentes Fieles",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "24/7",
      label: "Transmisión",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-400 to-purple-400"
    },
    {
      number: "100%",
      label: "Compromiso",
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Radio Munera</h2>
              <p className="text-lg text-gray-600 mb-6">
                Desde 1999, Radio Munera ha sido la voz que conecta a miles de colombianos con la mejor música, 
                noticias y entretenimiento. Nos enorgullece ser parte de la vida cotidiana de nuestros oyentes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Con una programación diversa y locutores apasionados, creamos contenido que inspira, 
                informa y entretiene. Nuestro compromiso es mantener viva la tradición radial colombiana 
                mientras nos adaptamos a las nuevas tecnologías.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contacto"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Contáctanos
                </a>
                <a
                  href="https://rebrand.ly/ZS_DM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Ver Cursos
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;