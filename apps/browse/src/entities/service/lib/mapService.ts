import { Service, ServiceSchema } from '../model/types';

export function mapService(dto: unknown): Service {
  return ServiceSchema.parse(dto);
}
