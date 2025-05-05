import type { ServiceDto } from '../api/types';
import type { Service } from '../model/types';

export function mapService(dto: ServiceDto): Service {
  return dto;
}
