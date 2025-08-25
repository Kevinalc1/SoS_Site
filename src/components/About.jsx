import React from 'react';
import { Award, Heart, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-primary">Sobre</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma trajetória dedicada ao serviço público e ao cuidado com as pessoas mais vulneráveis da nossa comunidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">História e Trajetória</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Uma liderança comprometida com a transformação social em Paulista-PE, cuja jornada política nasceu do desejo
                genuíno de fazer a diferença na vida das famílias que mais precisam de apoio e cuidado.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Com coragem e sensibilidade, transformou a vivência ao lado das famílias em uma missão de vida: garantir dignidade,
                respeito e oportunidades para pessoas com deficiência. Uma voz firme que representa milhares de pessoas que enfrentam
                diariamente os mesmos desafios.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Através do projeto "SOS Tudo pelo Social", trabalhamos para criar uma rede 
                de apoio abrangente que atende desde a primeira infância até a terceira idade, 
                promovendo inclusão, dignidade e qualidade de vida para todos.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Causas que Defende</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Heart className="text-primary" size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Inclusão e Neurodiversidade</h5>
                    <p className="text-gray-600 text-sm">Direitos e apoio para crianças neurodivergentes e suas famílias</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="text-primary" size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Assistência Social</h5>
                    <p className="text-gray-600 text-sm">Programas de apoio para famílias em vulnerabilidade social</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="text-primary" size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Saúde Integral</h5>
                    <p className="text-gray-600 text-sm">Cuidados de saúde física, mental e nutricional</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="text-primary" size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Direitos Humanos</h5>
                    <p className="text-gray-600 text-sm">Acesso à justiça e documentação para todos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Missão</h4>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              "Construir uma sociedade mais justa e inclusiva, onde cada pessoa tenha acesso aos 
              cuidados e oportunidades que merece, independentemente de suas limitações ou condições sociais. 
              Trabalhar incansavelmente para que nenhuma família se sinta desamparada em sua jornada."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

