import { Session, SessionSchema } from '../model/types';

export function mapSessions(dtos: unknown[]): Session[] {
  return dtos.map((dto) => SessionSchema.parse(dto));
}
