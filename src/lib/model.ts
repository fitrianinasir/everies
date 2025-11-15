export type TProduct = {
  id: number;
  name: string;
  preview_img: string;
  price: number;
  rate: number;
  sold: string;
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
  productId: number;
  username: string;
  images: string[];
  rate: number;
  comment: string;
  variant: string;
  createdAt: string;
};

export type TCheckoutData = {
  productId: number;
  productName: string;
  previewImg: string;
  color: string;
  size: string;
  count: number;
  total: number;
};
