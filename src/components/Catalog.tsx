import { Card, CardContent } from '@/components/ui/card';

export default function Catalog() {
  const specialists = [
    {
      name: 'Лавандовый рай',
      role: 'Ароматическая свеча',
      description: 'Без добавок и красителей. Создана из 100% натурального соевого воска с эфирными маслами',
      image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/ace078c0-b2b0-4185-a784-e769d3203742.jpg'
    },
    {
      name: 'Классика в белом',
      role: 'Декоративная свеча',
      description: 'Элегантный минимализм для любого интерьера. Изготовлена вручную с особым вниманием к деталям',
      image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/ad63d9f1-a978-4f50-97d3-7062d158d04b.jpg'
    },
    {
      name: 'Набор Гармония',
      role: 'Композиция свечей',
      description: 'Идеальный подарок или дополнение к интерьеру. Разные размеры создают уникальную атмосферу',
      image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/8757f251-60d7-4656-bfcb-8bfcde64c087.jpg'
    },
    {
      name: 'Теплый янтарь',
      role: 'Ароматическая свеча',
      description: 'Уютный аромат с нотами ванили и амбры. Создаёт атмосферу спокойствия и комфорта',
      image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/ace078c0-b2b0-4185-a784-e769d3203742.jpg'
    }
  ];

  return (
    <section id="catalog" className="py-20 px-4 relative">
      <div className="absolute top-20 left-0 w-1/3 h-96 bg-gradient-to-br from-secondary/40 to-transparent rounded-br-[200px] -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши свечи</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((specialist, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img 
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-center">{specialist.name}</h3>
                  <p className="text-sm font-semibold text-center text-primary">
                    {specialist.role}
                  </p>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {specialist.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
