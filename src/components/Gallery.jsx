import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Importando algumas imagens para a galeria
import gallery1 from '../assets/programs/1.jpg';
import gallery2 from '../assets/programs/2.jpg';
import gallery3 from '../assets/programs/3.jpg';
import gallery4 from '../assets/programs/4.jpg';
import gallery5 from '../assets/programs/5.jpg';
import gallery6 from '../assets/programs/6.jpg';
import gallery7 from '../assets/programs/8.jpg';
import gallery8 from '../assets/programs/7.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: gallery1, alt: "Ação educativa com crianças neurodivergentes", title: "Educar e Incluir" },
    { src: gallery2, alt: "Manifestação de mães atípicas", title: "Lute como uma Mãe Atípica" },
    { src: gallery3, alt: "Roda de conversa com mães", title: "Apoio às Mães" },
    { src: gallery4, alt: "Atendimento nutricional", title: "Nutrir com Afeto" },
    { src: gallery5, alt: "Terapia ocupacional", title: "Terapias" },
    { src: gallery6, alt: "Oficina com crianças", title: "Oficinas Educativas" },
    { src: gallery7, alt: "Atividade física para idosos", title: "Cuidar +" },
    { src: gallery8, alt: "Exercícios para terceira idade", title: "Saúde do Idoso" }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Galeria de <span className="text-primary">Ações</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns momentos especiais das nossas ações e programas sociais em funcionamento.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => openModal(image, index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 group-hover: transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-sm"></h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={32} />
              </button>

              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-sm opacity-90"></p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Acompanhe nossas redes sociais para ver mais fotos e vídeos das nossas ações.
          </p>
          <a 
            href="https://www.instagram.com/SosTudopelosocial/"
            target='_blank'
            rel='noopener noreferrer'
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

