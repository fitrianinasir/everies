import { TProduct, TProductDetail } from "./model";

export const DummyProduct: TProductDetail = {
  id: 1,
  name: "Ariana Top",
  description: "A stylish and comfortable cardigan perfect for any occasion.",
  price: 120000,
  rate: 4.5,
  sold: "100",
  total_review: 150,
  img: [
    "/images/products/blouse1.webp",
    "/images/products/blouse2.webp",
    "/images/products/blouse3.webp",
    "/images/products/blouse1.webp",
    "/images/products/blouse2.webp",
    "/images/products/blouse3.webp",
    "/images/products/blouse1.webp",
    "/images/products/blouse2.webp",
    "/images/products/blouse3.webp",
  ],
  variation_by_color: [
    {
      color: "White",
      preview_img: "/images/products/blouse3.webp",
      stock: { S: 10, M: 5, L: 0 },
      is_sold_out: false,
    },
    {
      color: "Blue",
      preview_img: "/images/products/blouse2.webp",
      stock: { S: 10, M: 0, L: 2 },
      is_sold_out: false,
    },
  ],
  variation_by_size: [
    {
      size: "S",
      preview_img: "/images/products/blouse1.webp",
      stock: { White: 10, Blue: 10 },
      is_sold_out: false,
    },
    {
      size: "M",
      preview_img: "/images/products/blouse1.webp",
      stock: { White: 5, Blue: 0 },
      is_sold_out: false,
    },
    {
      size: "L",
      preview_img: "/images/products/blouse1.webp",
      stock: { White: 0, Blue: 2 },
      is_sold_out: false,
    },
  ],
};

export const dummyBag = [
  {
    count: 1,
    size: "L",
    variant: "White",
    total: 320000,
    product: DummyProduct,
  },
];
