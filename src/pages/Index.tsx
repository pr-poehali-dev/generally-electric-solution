import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const CalculatorForm = () => {
  const [rooms, setRooms] = useState("");
  const [apartmentType, setApartmentType] = useState("");
  const [services, setServices] = useState({
    sockets: 0,
    switches: 0,
    lighting: 0,
    wiring: false
  });
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    let cost = 0;
    
    // Базовая стоимость по типу квартиры
    if (apartmentType === "1-room") cost += 35000;
    else if (apartmentType === "2-room") cost += 55000;
    else if (apartmentType === "3-room") cost += 75000;
    
    // Дополнительные услуги
    cost += services.sockets * 800;
    cost += services.switches * 600;
    cost += services.lighting * 1500;
    
    setTotalCost(cost);
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <Label htmlFor="apartment-type">Тип квартиры</Label>
            <Select value={apartmentType} onValueChange={setApartmentType}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип квартиры" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-room">1-комнатная</SelectItem>
                <SelectItem value="2-room">2-комнатная</SelectItem>
                <SelectItem value="3-room">3-комнатная</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="sockets">Количество розеток</Label>
            <Input
              id="sockets"
              type="number"
              value={services.sockets}
              onChange={(e) => setServices({...services, sockets: Number(e.target.value)})}
              placeholder="0"
            />
          </div>
          
          <div>
            <Label htmlFor="switches">Количество выключателей</Label>
            <Input
              id="switches"
              type="number"
              value={services.switches}
              onChange={(e) => setServices({...services, switches: Number(e.target.value)})}
              placeholder="0"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="lighting">Количество светильников</Label>
            <Input
              id="lighting"
              type="number"
              value={services.lighting}
              onChange={(e) => setServices({...services, lighting: Number(e.target.value)})}
              placeholder="0"
            />
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Предварительная стоимость:</h3>
            <div className="text-3xl font-bold text-primary">{totalCost.toLocaleString()}₽</div>
            <p className="text-sm text-gray-600 mt-2">
              *Окончательная стоимость определяется после выезда мастера
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 justify-center">
        <Button onClick={calculateCost} size="lg">
          <Icon name="Calculator" size={20} className="mr-2" />
          Рассчитать стоимость
        </Button>
        <Button variant="outline" size="lg">
          <Icon name="Phone" size={20} className="mr-2" />
          Заказать выезд мастера
        </Button>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-none">Вольт<span className="text-primary">Мастер</span></h1>
                <div className="text-xs text-gray-500 font-medium tracking-wider">МОНТАЖ</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Прайс</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white">Профессиональные услуги</Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Комплексный электромонтаж под ключ
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Качественные электромонтажные работы в квартирах и домах. 
                Гарантия на все виды работ. Современные технологии и материалы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/840711f6-0638-4eaa-83c8-0e1f1f8a8f14.jpg" 
                alt="Электромонтажные работы" 
                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg text-gray-900">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">5+ лет опыта</p>
                    <p className="text-sm text-gray-600">200+ выполненных проектов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Полный спектр электромонтажных работ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От простой замены розетки до комплексного электромонтажа квартиры под ключ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Home",
                title: "Электромонтаж квартир",
                description: "Полная замена электропроводки, установка розеток, выключателей, освещения"
              },
              {
                icon: "Building",
                title: "Электромонтаж домов",
                description: "Проектирование и монтаж электросистем частных домов любой сложности"
              },
              {
                icon: "Lightbulb",
                title: "Освещение",
                description: "Дизайн и монтаж систем освещения, LED подсветка, умные светильники"
              },
              {
                icon: "Shield",
                title: "Щитовые работы",
                description: "Сборка и монтаж электрощитов, подключение автоматов защиты"
              },
              {
                icon: "Wifi",
                title: "Слаботочные системы",
                description: "Интернет, телевидение, домофоны, системы безопасности"
              },
              {
                icon: "Settings",
                title: "Умный дом",
                description: "Автоматизация освещения, климата, безопасности вашего дома"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши выполненные проекты</h2>
            <p className="text-xl text-gray-600">
              Качество наших работ говорит само за себя
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/img/c3b888ec-139b-43c9-9762-0ae9eed69146.jpg",
                title: "Трёхкомнатная квартира",
                description: "Полная замена проводки, установка 40 точек освещения"
              },
              {
                image: "/img/2b85405c-2323-47ad-a0df-7016ac64e45b.jpg",
                title: "Частный дом 200м²",
                description: "Электромонтаж под ключ с системой умного дома"
              },
              {
                image: "/img/840711f6-0638-4eaa-83c8-0e1f1f8a8f14.jpg",
                title: "Коммерческий объект",
                description: "Электроснабжение офисного центра"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-primary">Завершено</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl font-bold mb-4">Прозрачные цены на услуги</h2>
            <p className="text-xl text-gray-600">
              Без скрытых платежей. Окончательная стоимость фиксируется в договоре
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                category: "Розетки и выключатели",
                services: [
                  { name: "Установка розетки", price: "от 800₽" },
                  { name: "Установка выключателя", price: "от 600₽" },
                  { name: "Перенос розетки", price: "от 1200₽" }
                ]
              },
              {
                category: "Освещение",
                services: [
                  { name: "Установка люстры", price: "от 1500₽" },
                  { name: "Монтаж точечных светильников", price: "от 400₽/шт" },
                  { name: "LED подсветка", price: "от 800₽/м" }
                ]
              },
              {
                category: "Электропроводка",
                services: [
                  { name: "Замена проводки 1-комн.", price: "от 35000₽" },
                  { name: "Замена проводки 2-комн.", price: "от 55000₽" },
                  { name: "Замена проводки 3-комн.", price: "от 75000₽" }
                ]
              }
            ].map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-center text-primary">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{service.name}</span>
                      <span className="font-bold text-primary">{service.price}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Автоматизация и щиты",
                services: [
                  { name: "Сборка электрощита", price: "от 8000₽" },
                  { name: "Замена автоматов", price: "от 1200₽/шт" },
                  { name: "Установка УЗО", price: "от 2500₽" }
                ]
              },
              {
                category: "Диагностика и ремонт",
                services: [
                  { name: "Поиск неисправности", price: "от 1500₽" },
                  { name: "Замена кабеля", price: "от 400₽/м" },
                  { name: "Восстановление контакта", price: "от 900₽" }
                ]
              },
              {
                category: "Специальные работы",
                services: [
                  { name: "Заземление", price: "от 15000₽" },
                  { name: "Монтаж видеонаблюдения", price: "от 2500₽/камера" },
                  { name: "Умный дом", price: "от 15000₽" }
                ]
              }
            ].map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-center text-primary">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{service.name}</span>
                      <span className="font-bold text-primary">{service.price}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Calculator" size={20} className="mr-2" />
              Получить подробный расчёт
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Калькулятор</Badge>
            <h2 className="text-4xl font-bold mb-4">Рассчитайте стоимость работ</h2>
            <p className="text-xl text-gray-600">
              Получите предварительную стоимость электромонтажных работ онлайн
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CalculatorForm />
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Калькулятор</Badge>
            <h2 className="text-4xl font-bold mb-4">Рассчитайте стоимость работ</h2>
            <p className="text-xl text-gray-600">
              Получите предварительную стоимость электромонтажных работ онлайн
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CalculatorForm />
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-bold mb-6">Профессионалы электромонтажа с 2019 года</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы специализируемся на комплексных электромонтажных работах в квартирах и частных домах. 
                Наша команда состоит из сертифицированных электриков с большим опытом работы.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-gray-600">Выполненных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-gray-600">Года гарантии</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Поддержка</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {["Лицензированы", "Застрахованы", "Сертифицированы", "Гарантия"].map((badge, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/2b85405c-2323-47ad-a0df-7016ac64e45b.jpg" 
                alt="Команда электриков" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={24} />
                  <div>
                    <p className="font-semibold">Команда профи</p>
                    <p className="text-sm opacity-90">8 сертифицированных электриков</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Бесплатная консультация и выезд мастера для оценки работ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Телефон</h3>
                  <p className="text-gray-600 mb-2">+7 (999) 123-45-67</p>
                  <p className="text-sm text-gray-500">Ежедневно с 8:00 до 22:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-600">info@elektropro.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Адрес</h3>
                  <p className="text-gray-600">г. Москва и Московская область</p>
                  <p className="text-sm text-gray-500">Выезжаем по всему региону</p>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Заказать обратный звонок</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы перезвоним в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Описание работ</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Кратко опишите требуемые работы"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">ЭлектроПро</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональные электромонтажные работы в Москве и области. 
                Гарантия качества и безопасности.
              </p>
              <div className="flex space-x-4">
                {["Facebook", "Instagram", "Phone"].map((social, index) => (
                  <div key={index} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                    <Icon name={social} size={20} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Электромонтаж квартир</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Электромонтаж домов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Системы освещения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Умный дом</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@elektropro.ru</p>
                <p>Москва и МО</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 ЭлектроПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;