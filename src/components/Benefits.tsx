import { Card, CardContent } from '@/components/ui/card';

export default function Benefits() {
  const benefits = [
    {
      title: 'Ароматерапия',
      description: 'Изучите основы создания целебных ароматов и научитесь создавать уникальные композиции'
    },
    {
      title: 'Дизайн свечей',
      description: 'Изучите основы дизайна и научитесь создавать красивые декоративные свечи'
    },
    {
      title: 'Натуральные материалы',
      description: 'Изучите основы работы с воском и научитесь создавать экологичные свечи'
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 relative">
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-secondary/30 to-transparent rounded-tl-[200px] -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Свечи начинаются с <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">CandleShop</span> прямо сейчас!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-3">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
