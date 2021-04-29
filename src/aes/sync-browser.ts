import { fallbackAesDecrypt, fallbackAesEncrypt } from '../helpers';

export function aesCbcEncryptSync(
  iv: Uint8Array,
  key: Uint8Array,
  data: Uint8Array
): Uint8Array {
  return fallbackAesEncrypt(iv, key, data);
}

export function aesCbcDecryptSync(
  iv: Uint8Array,
  key: Uint8Array,
  data: Uint8Array
): Uint8Array {
  return fallbackAesDecrypt(iv, key, data);
}
