import React from 'react';
import { Clock, Users, Heart, Zap, Coffee, Moon } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Buenos Días Munera",
      time: "6:00 AM - 10:00 AM",
      host: "Carlos Mendoza",
      description: "Despierta con la mejor música y noticias para comenzar tu día con energía",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-orange-400 to-red-400"
    },
    {
      id: 2,
      title: "Éxitos de Siempre",
      time: "10:00 AM - 2:00 PM",
      host: "María José",
      description: "Los clásicos que nunca pasan de moda y las nuevas tendencias musicales",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-400 to-rose-400"
    },
    {
      id: 3,
      title: "Tarde de Energía",
      time: "2:00 PM - 6:00 PM",
      host: "Diego Ruiz",
      description: "Música para mantener la energía en las tardes más activas",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: 4,
      title: "Noche de Recuerdos",
      time: "6:00 PM - 10:00 PM",
      host: "Ana Sofía",
      description: "Baladas y canciones románticas para acompañar tus noches",
      icon: <Moon className="w-6 h-6" />,
      color: "from-purple-400 to-indigo-400"
    }
  ];

  return (
    <section id="programas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Programación</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros programas diseñados para acompañarte en cada momento del día
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-4`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <div className="flex items-center space-x-2 text-purple-600 mb-3">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{program.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{program.host}</span>
                </div>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;