import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, Instagram, Facebook, CheckCircle, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const services = [
    "Orientação sobre programas sociais",
    "Apoio jurídico e documental",
    "Encaminhamentos para atendimento médico",
    "Inscrições em programas de assistência",
    "Apoio psicológico e emocional",
    "Oficinas e capacitações",
    "Distribuição de cestas básicas",
    "Atendimento odontológico gratuito"
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Serviços e <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco para saber mais sobre nossos serviços ou para solicitar ajuda.
          </p>
        </div>

        {/* Serviços Oferecidos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Serviços Oferecidos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary/5 transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <p className="text-gray-700 font-medium text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              {/*<div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telefone</h4>
                  <p className="text-gray-600">(81) 99999-9999</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta</p>
                </div>
              </div>*/}

              <div className='flex items-start space-x-4'>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">E-mail</h4>
                  <p className="text-gray-600">sostudopelosocial@gmail.com</p>
                  </div>
                </div> 

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Instagram className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Instagram</h4>
                  <p className="text-gray-600">@SosTudopelosocial</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Endereço</h4>
                  <p className="text-gray-600">Rua Hosana Alves do Nascimento, nº 493. Casa 01</p>
                  <p className="text-gray-600">Janga, Paulista/PE</p>
                </div>
              </div>

              {/*<div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="text-primary" size={24} />
                </div>
                  <h4 className="font-semibold text-gray-800">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta:</p>
                  <p className="text-gray-600">Sábado:</p>
              </div>
                </div>*/}
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Siga nossas redes sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/SosTudopelosocial" 
                  target='_blank'
                  rel='noopener noreferrer'
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <Instagram size={42} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h3>
            
            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(81) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="informacoes">Informações sobre programas</option>
                    <option value="inscricao">Inscrição em programas</option>
                    <option value="apoio">Solicitar apoio</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Descreva como podemos ajudá-lo..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

