import { TProduct } from "./model";

export const DummyProducts: TProduct[] = [
  {
    id: 1,
    name: "Bella Cardigan",
    img: [
      "/images/products/cardi1.webp",
      "/images/products/cardi2.webp",
      "/images/products/cardi3.webp",
    ],
    price: 120000,
    rate: 4.5,
    sold: "100",
  },
  {
    id: 2,
    name: "Ariana Top",
    img: [
      "/images/products/blouse1.webp",
      "/images/products/blouse2.webp",
      "/images/products/blouse3.webp",
    ],
    price: 250000,
    rate: 4.9,
    sold: "55",
  },
  {
    id: 3,
    name: "Hanna Sweater",
    img: ["/images/products/sweaterB1.webp", "/images/products/sweaterB2.webp"],
    price: 310000,
    rate: 4.3,
    sold: "12",
  },
  {
    id: 4,
    name: "Alicia Dress",
    img: [
      "/images/products/dressB1.webp",
      "/images/products/dressB2.webp",
      "/images/products/dressB2.webp",
    ],
    price: 540000,
    rate: 5,
    sold: "8",
  },
];
