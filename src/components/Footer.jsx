import React from 'react';
import { Heart, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logosemfundo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Informações */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="SOS Tudo pelo Social" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Trabalhando incansavelmente por uma sociedade mais inclusiva, justa e acolhedora 
              para todas as famílias.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/SosTudopelosocial" 
                className="bg-gray-700 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://mail.google.com/mail/u/0/#inbox?compose=new/sostudopelosocial@gmail.com" 
                className="bg-gray-700 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#programas" className="text-gray-300 hover:text-primary transition-colors">
                  Programas e Ações
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-300 text-sm">sostudopelosocial@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram size={16} className="text-primary" />
                <span className="text-gray-300 text-sm">@SosTudopelosocial</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-gray-300 text-sm">
                  Rua Hosana Alves do Nascimento, nº 493. Casa 01<br />
                  Janga, Paulista/PE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Programas */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Nossos Programas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            <div className="text-sm text-gray-300">Educar e Incluir</div>
            <div className="text-sm text-gray-300">Lute como uma Mãe Atípica</div>
            <div className="text-sm text-gray-300">Nutrir com Afeto</div>
            <div className="text-sm text-gray-300">Cuidar +</div>
            <div className="text-sm text-gray-300">Nutrindo Vidas</div>
            <div className="text-sm text-gray-300">Sorriso do Bem</div>
            <div className="text-sm text-gray-300">SOS Direitos</div>
            <div className="text-sm text-gray-300">Campanhas Emergenciais</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Kevin Alcantara - SOS Tudo pelo Social. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart size={14} className="text-primary" />
              <span>para nossa comunidade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

