import { fallbackAesEncrypt, fallbackAesDecrypt } from '../../lib/fallback';

export function aesCbcEncryptSync(
  iv: Uint8Array,
  key: Uint8Array,
  data: Uint8Array
): Uint8Array {
  const result = fallbackAesEncrypt(iv, key, data);
  return result;
}

export function aesCbcDecryptSync(
  iv: Uint8Array,
  key: Uint8Array,
  data: Uint8Array
): Uint8Array {
  const result = fallbackAesDecrypt(iv, key, data);
  return result;
}
