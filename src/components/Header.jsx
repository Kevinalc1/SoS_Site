import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Phone, Mail } from 'lucide-react';
import logo from '../assets/logosemfundo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Programas e Ações', href: '#programas' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Serviços e Contato', href: '#contato' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with social links */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <a href="tel:+5581999999999" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>(81) 99999-9999</span>
            </a>
            <a href="mailto:contato@suziracinha.com.br" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Mail size={14} />
              <span>contato@suziracinha.com.br</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SOS Tudo pelo Social" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Vereadora Suzi Racinha</h1>
              <p className="text-sm text-primary font-medium">SOS Tudo pelo Social</p>
            </div>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

