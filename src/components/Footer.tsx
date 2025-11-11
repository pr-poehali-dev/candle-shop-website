import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Flame" size={24} className="text-primary" />
              <h3 className="font-semibold text-lg">CandleShop</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Handmade свечи с душой. Создаём атмосферу уюта в каждом доме.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Ароматические</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Декоративные</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Соевые</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Оплата</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Возврат</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Следите за нами</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 CandleShop. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}