import * as isoRandom from '@pedrouid/iso-random';

export function randomBytes(length: number): Uint8Array {
  return isoRandom.randomBytes(length);
}
