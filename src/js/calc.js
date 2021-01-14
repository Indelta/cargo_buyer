const products = [
  {
    category: 'Одежда',
    smallCost: 8,
    mediumCost: 6,
    bigCost: 5
  },
  {
    category: 'Обувь',
    smallCost: 7,
    mediumCost: 5,
    bigCost: 4
  },
  {
    category: 'Сумки',
    smallCost: 8,
    mediumCost: 6,
    bigCost: 5
  },
  {
    category: 'Ремни',
    smallCost: 8,
    mediumCost: 6,
    bigCost: 5
  },
  {
    category: 'Чемоданы',
    smallCost: 5,
    mediumCost: 3,
    bigCost: 3
  },
  {
    category: 'Дорожные сумки',
    smallCost: 5,
    mediumCost: 3,
    bigCost: 3
  },
  {
    category: 'БАДы',
    smallCost: 5,
    mediumCost: 3,
    bigCost: 3
  },
  {
    category: 'Рыболовные снасти',
    smallCost: 5,
    mediumCost: 3,
    bigCost: 3
  },
  {
    category: 'Запчасти',
    smallCost: 5,
    mediumCost: 3,
    bigCost: 3
  },
  {
    category: 'Косметика',
    smallCost: 4,
    mediumCost: 2,
    bigCost: 2
  },
  {
    category: 'Домашний текстиль',
    smallCost: 4,
    mediumCost: 2,
    bigCost: 2
  },
  {
    category: 'Бижутерия',
    smallCost: 15,
    mediumCost: 12,    
  },
];

export default function (category, weight) {
  
  const categoryObj = products.filter(product => product.category == category)[0];
  let mainCost = 0; 

  if (categoryObj.category === 'Бижутерия') {
    if (weight > 0 && weight < 15) {
      mainCost = weight * categoryObj.smallCost
    }
  
    if ( weight >= 15) {
      mainCost = weight * categoryObj.mediumCost
    }
  } else if(categoryObj.category === 'Запчасти') {
    if (weight > 0 && weight < 50) {
      mainCost = weight * categoryObj.smallCost
    }
  
    if ( weight >= 50) {
      mainCost = weight * categoryObj.mediumCost
    }
  } else {
    if (weight > 0 && weight < 20) {
      mainCost = weight * categoryObj.smallCost
    }
  
    if ( weight >= 20 && weight < 300 ) {
      mainCost = weight * categoryObj.mediumCost
    }
  
    if ( weight >= 300 ) {
      mainCost = weight * categoryObj.bigCost
    }
  }

  return mainCost
}