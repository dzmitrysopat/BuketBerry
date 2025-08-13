const products = [
    {
    "id": 1,
    "name": "01",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_154329_028.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_154332_716.jpg"
  },
  {
    "id": 2,
    "name": "02",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_154651_741.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_154709_814.jpg"
  },
  {
    "id": 3,
    "name": "03",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_154812_304.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_154824_546.jpg"
  },
  {
    "id": 4,
    "name": "04",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_154926_700.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_155036_754.jpg"
  },
  {
    "id": 5,
    "name": "05",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_155056_922.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_155111_220.jpg"
  },
  {
    "id": 6,
    "name": "06",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_155127_578.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_155145_809.jpg"
  },
  {
    "id": 7,
    "name": "07",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_155204_068.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_155313_466.jpg"
  },
  {
    "id": 8,
    "name": "08",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_155328_054.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_155331_879.jpg"
  },
  {
    "id": 9,
    "name": "09",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_155412_500.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_155417_222.jpg"
  },
  {
    "id": 10,
    "name": "010",
    "price": "45",
    "photo": "./media/compositions/mans/IMG_20250811_155447_729.jpg",
    "photo2": "./media/compositions/mans/IMG_20250811_155451_426.jpg"
  }
];

displayProducts(products);

function displayProducts(products) {
    const container = document.getElementById('mans');
    
    products.forEach(product => {
        const card = document.createElement('section');
        card.className = 'shop-item';
        
        card.innerHTML = `
            <div class="photos">
                    <img src="${product.photo}" alt="" class="product-img">
                    <img src="${product.photo2}" alt="" class="alt-product-img">
                </div>
                <p class="name">${product.name}</p>
                <span class="price">${product.price} руб.</span>
        `;
        
        container.appendChild(card);
    });
}