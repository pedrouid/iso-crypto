import { isConstantTime } from '../../helpers';

import { nodeHmacSha256Sign, nodeHmacSha512Sign } from '../../lib/node';

export function hmacSha256SignSync(
  key: Uint8Array,
  msg: Uint8Array
): Uint8Array {
  const result = nodeHmacSha256Sign(key, msg);
  return result;
}

export function hmacSha256VerifySync(
  key: Uint8Array,
  msg: Uint8Array,
  sig: Uint8Array
): boolean {
  const expectedSig = nodeHmacSha256Sign(key, msg);
  const result = isConstantTime(expectedSig, sig);
  return result;
}

export function hmacSha512SignSync(
  key: Uint8Array,
  msg: Uint8Array
): Uint8Array {
  const result = nodeHmacSha512Sign(key, msg);
  return result;
}

export function hmacSha512VerifySync(
  key: Uint8Array,
  msg: Uint8Array,
  sig: Uint8Array
): boolean {
  const expectedSig = nodeHmacSha512Sign(key, msg);
  const result = isConstantTime(expectedSig, sig);
  return result;
}
