import { type Product, mapProduct } from '../../product/@x/wishlist';
import type { WishlistDto } from '../api/types';

export function mapWishlist(dto: WishlistDto): Product[] {
  return dto.map((product) => mapProduct(product));
}
