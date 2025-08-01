import type { UserDto } from '../api/types';
import type { User, UserId } from '../model/types';

export function mapUser(dto: UserDto): User {
  return {
    id: dto.id as UserId,
    email: dto.email,
  };
}
