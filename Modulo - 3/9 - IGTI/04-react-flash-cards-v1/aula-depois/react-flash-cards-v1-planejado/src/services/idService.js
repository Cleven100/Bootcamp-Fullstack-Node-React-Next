import { v4 as uuid } from 'uuid';

export function serviceGetNewId() {
  return uuid();
}
