import React from 'react';
import { GraduationCap, Heart, Apple, Activity, Package, Smile, Scale, HandHeart } from 'lucide-react';

// Importando algumas imagens dos programas
import educarImage from '../assets/programs/zhAd6YwbnHLZ.jpg';
import maesImage from '../assets/programs/peUOxajKxapB.jpg';
import nutrirImage from '../assets/programs/vdanSVk1DBBB.jpg';
import cuidarImage from '../assets/programs/n9AT1W3Iz6dB.jpg';
import nutrindoImage from '../assets/programs/wzH0mHYCHtrw.jpg';
import sorrisoImage from '../assets/programs/yNs4Dhu9yOvR.jpg';
import sosImage from '../assets/programs/CuOeKXSOfHHV.jpg';
import campanhasImage from '../assets/programs/SV1xvtiyZ9Da.jpg';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Educar e Incluir",
      description: "Educação complementar, terapias e oficinas para crianças neurodivergentes, inclusão e apoio familiar.",
      icon: GraduationCap,
      image: educarImage,
      features: ["Terapias ocupacionais", "Oficinas educativas", "Apoio familiar", "Inclusão escolar"]
    },
    {
      id: 2,
      title: "Lute como uma Mãe Atípica",
      description: "Acolhimento e empoderamento de mães de crianças neurodivergentes/PCD, rodas de diálogo, apoio psicológico e oficinas de empreendedorismo.",
      icon: Heart,
      image: maesImage,
      features: ["Rodas de diálogo", "Apoio psicológico", "Oficinas de empreendedorismo", "Rede de apoio"]
    },
    {
      id: 3,
      title: "Nutrir com Afeto",
      description: "Atendimento nutricional para crianças neurodivergentes e PCD, oficinas e acompanhamento profissional.",
      icon: Apple,
      image: nutrirImage,
      features: ["Consultas nutricionais", "Oficinas alimentares", "Acompanhamento profissional", "Orientação familiar"]
    },
    {
      id: 4,
      title: "Cuidar +",
      description: "Atenção integral à saúde do idoso, com fisioterapia, nutrição, atividade física e encaminhamentos médicos.",
      icon: Activity,
      image: cuidarImage,
      features: ["Fisioterapia", "Nutrição geriátrica", "Atividades físicas", "Encaminhamentos médicos"]
    },
    {
      id: 5,
      title: "Nutrindo Vidas",
      description: "Distribuição de alimentos e kits de higiene para famílias vulneráveis, com oficinas e visitas sociais.",
      icon: Package,
      image: nutrindoImage,
      features: ["Cestas básicas", "Kits de higiene", "Oficinas sociais", "Visitas domiciliares"]
    },
    {
      id: 6,
      title: "Sorriso do Bem",
      description: "Atendimento odontológico gratuito, kits de escovação e ações educativas.",
      icon: Smile,
      image: sorrisoImage,
      features: ["Consultas odontológicas", "Kits de higiene bucal", "Ações educativas", "Prevenção"]
    },
    {
      id: 7,
      title: "SOS Direitos",
      description: "Apoio jurídico e documental para famílias carentes.",
      icon: Scale,
      image: sosImage,
      features: ["Orientação jurídica", "Documentação gratuita", "Defesa de direitos", "Acesso à justiça"]
    },
    {
      id: 8,
      title: "Campanhas Emergenciais",
      description: "Campanhas emergenciais e arrecadações para comunidades em situações de urgência.",
      icon: HandHeart,
      image: campanhasImage,
      features: ["Ajuda emergencial", "Arrecadações", "Apoio comunitário", "Mobilização social"]
    }
  ];

  return (
    <section id="programas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Programas e <span className="text-primary">Ações</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os programas sociais que transformam vidas e fortalecem nossa comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div key={program.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 p-2 rounded-full">
                    <IconComponent className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-2">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contato" 
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
          >
            Saiba como participar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;

