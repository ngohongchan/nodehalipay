const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883848/img/haliapay/product-laptop-2_31898603-4ce2-4ce5-9aa4-e75f9dbbbcfb_f1gakt.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Sports',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    sale: true,
    new: false,
    featured: true
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883847/img/haliapay/product-11-2_a1b33940-f66d-40b7-ae4b-d2ff12806c0a_540x_pweey5.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Apparel',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    sale: true,
    featured: true
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883847/img/haliapay/product-11-1_360x_l4bmbu.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Apparel',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    sale: true,
    featured: true
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883848/img/haliapay/product-tivi-2_360x_qyx2oa.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Apparel',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    sale: true,
    featured: true
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883847/img/haliapay/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f_hqmquj.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Apparel',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    sale: true,
    featured: true
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883847/img/haliapay/product-11-1_360x_l4bmbu.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Accessories',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
    sale: true,
    featured: true
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883848/img/haliapay/product-tivi-2_360x_qyx2oa.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Accessories',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
    new: true,
    featured: true
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883847/img/haliapay/product-laptop-1_8ba38545-e982-4cc5-a601-9f7adb782d6f_hqmquj.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Materials',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    new: true,
    featured: true
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883848/img/haliapay/product-loa-2_360x_wlqc48.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Materials',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
    sale: true,
    featured: true
  },
  {
    name: 'Logitech G-Series Gaming Mouse 1',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883847/img/haliapay/product-3-2_360x_xomolq.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Machinery',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    sale: true,
    new: true,
    featured: true
  },
  {
    name: 'Logitech G-Series Gaming Mouse 2',
    image: 'https://res.cloudinary.com/dqirvmjn5/image/upload/v1629883847/img/haliapay/product-1_ifayti.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Machinery',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    sale: true,
    new: true,
    featured: true
  },
];

module.exports = products;