import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  payments:[
    {
        message: "Success",
        paidAt: Date.now(),
        reference: "456789320093",
        status: "successful",
        transaction: "73778748hurr",
        shippingAddress: "Epe, Lagos",
        totalPrice: 300,
        user: '642d4fda2ce3738988682c37'
    }
  ],
  products: [
    {
      // _id: '1',
      title: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
      longDescription: "Ori e ti buru danuhaha"
    },
    {
      // _id: '2',
      title: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
      longDescription: "Ori e ti buru danu okay na"
    },
    {
      // _id: '3',
      title: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
      longDescription: "Ori e ti buru danu lmao"
    },
    {
      // _id: '4',
      title: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
      longDescription: "Ori e ti buru danu"
    },
  ],
};
export default data;