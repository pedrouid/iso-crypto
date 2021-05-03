import { isConstantTime } from '../../helpers';
import {
  fallbackHmacSha256Sign,
  fallbackHmacSha512Sign,
} from '../../lib/fallback';

export function hmacSha256SignSync(
  key: Uint8Array,
  msg: Uint8Array
): Uint8Array {
  const result = fallbackHmacSha256Sign(key, msg);
  return result;
}

export function hmacSha256VerifySync(
  key: Uint8Array,
  msg: Uint8Array,
  sig: Uint8Array
): boolean {
  const expectedSig = fallbackHmacSha256Sign(key, msg);
  const result = isConstantTime(expectedSig, sig);
  return result;
}

export function hmacSha512SignSync(
  key: Uint8Array,
  msg: Uint8Array
): Uint8Array {
  const result = fallbackHmacSha512Sign(key, msg);
  return result;
}

export function hmacSha512VerifySync(
  key: Uint8Array,
  msg: Uint8Array,
  sig: Uint8Array
): boolean {
  const expectedSig = fallbackHmacSha512Sign(key, msg);
  const result = isConstantTime(expectedSig, sig);
  return result;
}
