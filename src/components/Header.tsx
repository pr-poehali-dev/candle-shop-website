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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Icon name="Flame" size={28} className="text-primary" />
            <h1 className="text-2xl font-semibold">LumeElegance</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Главная
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

          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
            <Icon name="ShoppingBag" size={18} />
            Корзина
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
