import golfwangWhiteShirt from '../public/products/golfWangWhiteShirt.png'
import NikeJacket from '../public/products/NikeJacket.png'
import MuchoCargoJeans from '../public/products/MuchoCargoJeans.png'
import whiteSneaker from '../public/products/whiteSneakerA.png'
import golfWangGreenJacket from '../public/products/GolfWangGreenJacket.png'
import beltShades from '../public/products/RockstarShades.png'
import TimberlandBoots from '../public/products/TimberlandBoots.png'


export const DummyProducts = [
  {
    name: 'Golfwang Shirt',
    slug: 'golfwang-shirt',
    category: 'Shirts',
    image: golfwangWhiteShirt,
    price: 356,
    brand: 'Golfwang',
    rating: 4.5,
    reviewsCount: 7,
    description: 'very cool white golfwang shirt',
    isFeatured: true,
    banner: '',
    stock: 12,
    qty:1,
    user: 'ditjoeneo03@gmail.com',
    categoryList: ['shirts', 'skipper', 'shortsleeve', 'white']
  },
  {
    name: 'Vintage Nike Jacket',
    slug: 'vintage-nike-jackect',
    category: 'Jackets',
    image: NikeJacket,
    price: 799.95,
    brand: 'Nike',
    rating: 5,
    reviewsCount: 17,
    description: "Vintage nike jacket. 90's style",
    isFeatured: true,
    banner: '',
    stock: 2,
    qty:1,
    categoryList: ['nike', 'jackets', 'winter', 'white']
  },
  {
    name: 'Rockstar white boots',
    slug: 'steve-madden-white-sneaker-sneaker',
    category: 'Shoes',
    image: whiteSneaker,
    price: 1689.99,
    brand: 'Steve Madden',
    rating: 4.8,
    reviewsCount: 14,
    description: 'Steve madden rockstar shoes',
    isFeatured: true,
    banner: '',
    stock: 4,
    qty:1,
    categoryList: ['boots', 'tekkies', 'white']
  },
  {
    name: 'Mucho Jeans',
    slug: 'mucho-jeans',
    category: 'Pants',
    image: MuchoCargoJeans,
    price: 400,
    brand: 'Mucho',
    rating: 5,
    reviewsCount: 23,
    description: 'Vintage Mucho jeans. folded with priting at the bottom',
    isFeatured: true,
    banner: '',
    stock: 0,
    qty:1,
    categoryList: ['denim', 'blue', 'rockstar', 'jeans', 'long', 'pants']
  },
  {
    name: 'Goldwang Jacket',
    slug: 'golfwang-jacket',
    category: 'jackets',
    image: golfWangGreenJacket,
    price: 680,
    brand: 'Golfwang',
    rating: 4.2,
    reviewsCount: 12,
    description: 'Golfwang winter collecting green jacket',
    isFeatured: true,
    banner: '',
    stock: 33,
    qty:1,
    categoryList:['jackects', 'male', 'green', 'winter']
  },
  {
    name: 'belt glasses',
    slug: 'belt-glasses',
    category: 'Accessories',
    image: beltShades,
    price: 199.98,
    brand: 'Rockstar',
    rating: 4,
    reviewsCount: 20,
    description: 'Very cool Rockstar belt shaddes',
    isFeatured: true,
    banner: '',
    stock: 5,
    qty:1,
    categoryList:['Accessories', 'male', 'female', 'summer']
  },
  {
    name: 'Timberland Boots',
    slug: 'Timberland-boots',
    category: 'shoes',
    image: TimberlandBoots,
    price: 1899.99,
    brand: 'Timberland',
    rating: 5,
    reviewsCount: 20,
    description: 'Timberland boots never gets old',
    isFeatured: true,
    banner: '',
    stock: 20,
    qty:1,
    categoryList:['shoes', 'boots', 'male', 'brown', 'winter']
  },
]

export const dummyUsers = [
  {
    name: 'cozy',
    email: 'cozy@gmail.com',
    image: golfWangGreenJacket,
    status: 'done',
    date: '20-02-2024',
    amount: '8000',
    role: 'Admin',
    status: 'active'
  },
  {
    name: 'cozy',
    email: 'user@gmail.com',
    image: golfWangGreenJacket,
    status: 'done',
    date: '20-02-2024',
    amount: '8000',
    role: 'user',
    status: 'active'
  },
  {
    name: 'cozy',
    email: 'user@gmail.com',
    image: golfWangGreenJacket,
    status: 'done',
    date: '20-02-2024',
    amount: '8000',
    role: 'user',
    status: 'active'
  },
  {
    name: 'cozy',
    email: 'user@gmail.com',
    image: golfWangGreenJacket,
    status: 'done',
    date: '20-02-2024',
    amount: '8000',
    role: 'user',
    status: 'active'
  },
  {
    name: 'cozy',
    email: 'user@gmail.com',
    image: golfWangGreenJacket,
    status: 'done',
    date: '20-02-2024',
    amount: '8000',
    role: 'user',
    status: 'active'
  },
  {
    name: 'cozy',
    email: 'user@gmail.com',
    image: golfWangGreenJacket,
    status: 'done',
    date: '20-02-2024',
    amount: '8000',
    role: 'user',
    status: 'active'
  },
]