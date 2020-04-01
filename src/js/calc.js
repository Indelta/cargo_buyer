const products = [
  {
    category: 'Одежда',
    smallCost: 6,
    bigCost: 5
  },
  {
    category: 'Обувь',
    smallCost: 5,
    bigCost: 4
  },
  {
    category: 'Сумки',
    smallCost: 6,
    bigCost: 5
  },
  {
    category: 'Ремни',
    smallCost: 6,
    bigCost: 5
  },
  {
    category: 'Чемоданы',
    smallCost: 3,
    bigCost: 3
  },
  {
    category: 'БАДы',
    smallCost: 3,
    bigCost: 3
  },
  {
    category: 'Рыболовные снасти',
    smallCost: 3,
    bigCost: 3
  },
  {
    category: 'Запчасти',
    smallCost: 3,
    bigCost: 3
  },
  {
    category: 'Косметика',
    smallCost: 2,
    bigCost: 2
  },
  {
    category: 'Домашний текстиль',
    smallCost: 2,
    bigCost: 2
  },
];

export default function (category, weight) {
  const categoryObj = products.filter(product => product.category === category)[0];
  const mainCost = weight < 300 ? weight * categoryObj.smallCost : weight * categoryObj.bigCost;
  return mainCost < 200 ? 200 : mainCost;
}