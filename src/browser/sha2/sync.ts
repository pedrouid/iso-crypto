import {
  fallbackSha256,
  fallbackSha512,
  fallbackRipemd160,
} from '../../lib/fallback';

export function sha256Sync(msg: Uint8Array): Uint8Array {
  const result = fallbackSha256(msg);
  return result;
}

export function sha512Sync(msg: Uint8Array): Uint8Array {
  const result = fallbackSha512(msg);
  return result;
}

export function ripemd160Sync(msg: Uint8Array): Uint8Array {
  const result = fallbackRipemd160(msg);
  return result;
}
