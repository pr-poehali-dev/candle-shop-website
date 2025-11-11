import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-br from-secondary via-primary to-purple-600 rounded-bl-[200px] -z-10 opacity-90" />
      
      <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-tr from-purple-300 to-transparent rounded-tr-[150px] -z-10 opacity-40" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Получи свечу мечты<br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                в лучшем магазине
              </span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-lg">
              Мы создаём уникальные свечи ручной работы из натуральных материалов. 
              Ваш дом наполнится теплом, уютом и удивительными ароматами.
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8"
                onClick={scrollToCatalog}
              >
                Присоединиться
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/ad63d9f1-a978-4f50-97d3-7062d158d04b.jpg"
              alt="Elegant candle"
              className="w-full h-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
