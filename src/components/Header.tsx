import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Icon name="Flame" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">CandleShop</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-foreground'
              }`}
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'benefits' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Преимущества
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'catalog' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'contacts' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Контакты
            </button>
          </nav>

          <Button className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Связаться
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
          >
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}