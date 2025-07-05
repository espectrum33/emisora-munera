import React, { useState } from 'react';
import { Radio, Play, Pause, Volume2, VolumeX, Share2 } from 'lucide-react';

const LiveSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(75);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section id="vivo" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-red-500 px-4 py-2 rounded-full mb-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">EN VIVO</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Escúchanos en Vivo</h2>
            <p className="text-xl text-purple-200">
              Transmitiendo las 24 horas del día, los 7 días de la semana
            </p>
          </div>

          {/* Live Player */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm text-purple-200 mb-1">PROGRAMA ACTUAL</p>
                <p className="text-2xl font-bold">Buenos Días Munera</p>
                <p className="text-purple-300">Con Carlos Mendoza</p>
              </div>
            </div>

            {/* Audio Visualizer */}
            <div className="flex justify-center space-x-1 mb-8">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 bg-gradient-to-t from-purple-500 to-blue-400 rounded-full ${
                    isPlaying ? 'animate-pulse' : ''
                  }`}
                  style={{
                    height: `${Math.random() * 60 + 20}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-6 mb-6">
              <button
                onClick={togglePlay}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 p-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-white" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white" />
                )}
              </button>
              <button className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300">
                <Share2 className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center space-x-4 max-w-md mx-auto">
              <span className="text-sm text-purple-200">0</span>
              <div className="flex-1 relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div
                  className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg pointer-events-none"
                  style={{ width: `${volume}%` }}
                />
              </div>
              <span className="text-sm text-purple-200">100</span>
            </div>
          </div>

          {/* Current Song Info */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <p className="text-sm text-purple-200 mb-2">AHORA SUENA</p>
            <p className="text-xl font-bold mb-1">Bohemian Rhapsody</p>
            <p className="text-purple-300">Queen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;