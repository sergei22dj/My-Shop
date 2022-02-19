export interface Product {
  name: string;
  id: string;
  description: string;
  price: number;
  url: string;
  count: number;
}

export const products: Product[] = [
  {
    name: 'Mi Robot Vacuum-Mop 2',
    id: '1',
    description: 'Сухая и влажная уборка одним движением одновременно. Убедитесь сами! ',
    price: 449,
    url: '/static/images/robot.jpg',
    count: 1
  },
  {
    name: 'Mediclin S100 Black',
    id: '2',
    description: 'Зубная щетка защищена от воды по стандарту IPX7',
    price: 79,
    url: '/static/images/Toothbrush.jpg',
    count: 1
  },
  {
    name: 'Samsung RT38K54',
    id: '3',
    description: ' Стильный дизайн позволяет холодильнику легко вписаться в интерьер кухни.',
    price: 539,
    url: '/static/images/fridge.jpg',
    count: 1
  },
  {
    name: 'Toshiba TW-BJ11',
    id: '4',
    description: 'Японский производитель подтверждает долговечность мотора гарантией на 10 лет.',
    price: 610,
    url: '/static/images/washing-machine.jpg',
    count: 1
  },
  {
    name: 'Xiaomi Mi Desktop Monitor',
    id: '5',
    description: ' Защита от синего спектра позволит длительное время работать без усталости',
    price: 1119,
    url: '/static/images/monitor.jpg',
    count: 1
  },
  {
    name: 'DDPAI X2S PRO',
    id: '6',
    description: 'Объектив с уникальной шестислойной стеклянной линзой, апертурой F1.8 и углом обзора 140°',
    price: 339,
    url: '/static/images/tolik.jpg',
    count: 1
  },
  {
    name: 'Scishare Capsule Coffee',
    id: '7',
    description: 'Капсульная кофемашина Scishare Capsule Coffee Machine mini станет настоящим украшением вашей кухни.',
    price: 479,
    url: '/static/images/cofeeMaker.jpg',
    count: 1
  },
  {
    name: 'Bosch BGS05A225',
    id: '8',
    description: ' Компактный, быстрый и экологический, без мешка.',
    price: 228,
    url: '/static/images/vacuum-cleaner.jpg',
    count: 1
  },
  {
    name: 'Samsung MG23T',
    id: '9',
    description:
      'Панель из стекла идеально сочетается со стеклянной дверцей, это придает микроволновке стильный элегантный вид.',
    price: 299,
    url: '/static/images/microwave.jpg',
    count: 1
  }
];
