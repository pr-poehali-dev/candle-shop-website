import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Создайте атмосферу<br />
              <span className="text-primary">тепла и уюта</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Handmade свечи из натуральных материалов. Каждая свеча — это произведение искусства, созданное с любовью к деталям.
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={scrollToCatalog}
              >
                Смотреть каталог
                <Icon name="ArrowRight" size={18} />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
              <img 
                src="https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/815275d5-87ab-4ece-8821-937e0fb6a0f2.jpg"
                alt="Elegant candle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
