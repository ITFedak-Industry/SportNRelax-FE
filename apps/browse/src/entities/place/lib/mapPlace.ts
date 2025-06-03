import { PlaceDtoSchema, type PlaceDto } from '../api/types';
import type { Place } from '../model/types';

export function mapPlace(dto: PlaceDto): Place {
  return PlaceDtoSchema.parse(dto);
}
