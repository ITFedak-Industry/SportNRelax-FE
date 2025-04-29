import type { ProductDto } from '../../product/@x/cart';

export type CartDto = {
  cartItems: Array<{
    product: ProductDto;
    quantity: number;
  }>;
  deliveryPrice: Penny;
  version: number;
};

export type CartItemDto = {
  productId: Id;
  quantity: number;
};
