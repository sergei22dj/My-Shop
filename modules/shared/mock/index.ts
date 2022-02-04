export interface Product {
  name: string;
  id: string;
  description: string;
  price: number;
  url: string;
}

export const products: Product[] = [
  {
    name: 'Kenwood GTR RX-15',
    id: '1',
    description: 'дуже классная хлебопечка',
    price: 189,
    url: '/static/images/breadMaker1.jpg'
  },
  {
    name: 'Samsung Pro Max RX-15',
    id: '2',
    description: 'классная хлебопечка',
    price: 119,
    url: '/static/images/breadMaker2.jpg'
  },
  {
    name: 'Samsung Pro GTR',
    id: '3',
    description: 'очень классная хлебопечка',
    price: 539,
    url: '/static/images/breadMaker3.jpg'
  },
  {
    name: 'Samsung Pro GTR RX-15',
    id: '4',
    description: 'очень классная хлебопечка',
    price: 149,
    url: '/static/images/breadMaker4.jpg'
  },
  {
    name: 'Samsung Pro GTR RX-15',
    id: '5',
    description: 'очень классная хлебопечка',
    price: 1119,
    url: '/static/images/breadMaker5.jpg'
  },
  {
    name: 'Mega Pro GTR RX-15',
    id: '6',
    description: 'очень классная хлебопечка',
    price: 149,
    url: '/static/images/breadMaker6.jpg'
  }
];
