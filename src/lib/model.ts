export type TProduct = {
  id: number;
  name: string;
  preview_img: string;
  category: string;
  price: number;
  rate: number;
  sold: number;
  detail: TProductDetail;
};

export type TProductDetail = {
  images: string[];
  description: string;
  total_review: number;
  variation_by_color: TVariationByColor[];
  variation_by_size: TVariationBySize[];
};

export type TVariationByColor = {
  color: string;
  preview_img: string;
  stock: { [size: string]: number }; // Maps color to an array of size-quantity objects
  is_sold_out: boolean;
};

export type TVariationBySize = {
  size: string;
  preview_img: string;
  stock: { [color: string]: number }; // Maps size to an array of color-quantity objects
  is_sold_out: boolean;
};

export type TProductReviewResponse = {
  page: number;
  total_page: number;
  total_reviews: number;
  avg_rate: number;
  reviews: TProductReview[];
};

export type TProductReview = {
  product_id: number;
  username: string;
  images: string[];
  rate: number;
  comment: string;
  variant: string;
  createdAt: string;
};

export type TUserCart = {
  product_id: number;
  user_id: number;
  color: string;
  size: string;
  quantity: number;
  total: number;
};

export type TCheckoutData = {
  product_id: number;
  product_name: string;
  preview_img: string;
  color: string;
  size: string;
  quantity: number;
  total: number;
};

export type TOrderData = {
  user_id: number;
  total_payment: number;
  payment_type: string;
  discount: number;
  status: string;
  items: TCheckoutData[];
};
