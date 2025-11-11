import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Programs() {
  const programs = [
    {
      title: 'Создать свой заказ',
      features: [
        'Индивидуальный дизайн на выбор',
        'Консультация по ароматам',
        'Выбор размера и формы',
        'Упаковка в подарок'
      ]
    },
    {
      title: 'Готовые коллекции',
      features: [
        'Еженедельные новинки',
        'Тематические наборы',
        'Сезонные ароматы',
        'Эксклюзивные композиции'
      ]
    },
    {
      title: 'Для бизнеса',
      features: [
        'Корпоративные заказы',
        'Брендированная упаковка',
        'Оптовые цены',
        'Персональный менеджер'
      ]
    },
    {
      title: 'Подписка',
      features: [
        'Свечи каждый месяц',
        'Специальная цена',
        'Эксклюзивные ароматы',
        'Бесплатная доставка'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Программы покупки</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name="Zap" size={32} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center">{program.title}</h3>
                
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
