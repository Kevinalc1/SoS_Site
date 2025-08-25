import React from 'react';
import { Heart, Users, HandHeart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          <span className="text-primary">SOS Tudo pelo Social</span>
          </h1>
          <h2 className="text-2x1 md:text-3xl font-semibold text-gray-700 mb-8">
            "Quando a caridade é necessária, a justiça social é Urgente"
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Dedicada ao cuidado e apoio às famílias, trabalhando incansavelmente 
            por uma sociedade mais inclusiva, justa e acolhedora para todos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Inclusão e Cuidado</h3>
              <p className="text-gray-600">
                Programas especializados para crianças neurodivergentes e suas famílias
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Apoio Comunitário</h3>
              <p className="text-gray-600">
                Assistência integral às famílias em situação de vulnerabilidade social
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Saúde e Bem-estar</h3>
              <p className="text-gray-600">
                Cuidados de saúde, nutrição e apoio psicológico para toda a comunidade
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#programas" 
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Conheça nossos Programas
            </a>
            <a 
              href="#contato" 
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

