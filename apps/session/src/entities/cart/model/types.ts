import type { Product, ProductId } from '../../product/@x/cart';

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Cart = {
  itemsMap: Record<ProductId, CartItem>;
  version: number;
};
