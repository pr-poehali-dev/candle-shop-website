import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Минималистичная белая свеча',
    price: 1200,
    category: 'decorative',
    image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/815275d5-87ab-4ece-8821-937e0fb6a0f2.jpg',
    description: 'Элегантная белая свеча для создания спокойной атмосферы'
  },
  {
    id: 2,
    name: 'Ароматическая свеча Amber',
    price: 1800,
    category: 'scented',
    image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/baeee00f-bbb5-46fb-9c5c-90b6e8b4e9dd.jpg',
    description: 'Теплый янтарный аромат с нотами ванили'
  },
  {
    id: 3,
    name: 'Набор декоративных свечей',
    price: 2500,
    category: 'decorative',
    image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/45438842-7ee8-4b06-a75b-c2d1940e98f7.jpg',
    description: 'Композиция из свечей разных размеров'
  },
  {
    id: 4,
    name: 'Соевая свеча Lavender',
    price: 1500,
    category: 'soy',
    image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/baeee00f-bbb5-46fb-9c5c-90b6e8b4e9dd.jpg',
    description: 'Натуральная соевая свеча с лавандой'
  },
  {
    id: 5,
    name: 'Декоративная свеча Classic',
    price: 1000,
    category: 'decorative',
    image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/815275d5-87ab-4ece-8821-937e0fb6a0f2.jpg',
    description: 'Классический дизайн для любого интерьера'
  },
  {
    id: 6,
    name: 'Соевая свеча Vanilla',
    price: 1600,
    category: 'soy',
    image: 'https://cdn.poehali.dev/projects/a76abe58-a9b4-4e6b-b6ae-a3829cf295f1/files/baeee00f-bbb5-46fb-9c5c-90b6e8b4e9dd.jpg',
    description: 'Нежный аромат ванили, 100% соевый воск'
  }
];

const categories = [
  { id: 'all', label: 'Все свечи' },
  { id: 'scented', label: 'Ароматические' },
  { id: 'decorative', label: 'Декоративные' },
  { id: 'soy', label: 'Соевые' }
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Наш каталог</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите свечу, которая создаст идеальную атмосферу в вашем доме
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(cat.id)}
              className="transition-all"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <Badge variant="secondary" className="shrink-0">
                      {product.price} ₽
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="ShoppingBag" size={18} />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
