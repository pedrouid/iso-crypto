import { browserAesDecrypt, browserAesEncrypt } from '../helpers';

export function aesCbcEncrypt(
  iv: Uint8Array,
  key: Uint8Array,
  data: Uint8Array
): Promise<Uint8Array> {
  return browserAesEncrypt(iv, key, data);
}

export function aesCbcDecrypt(
  iv: Uint8Array,
  key: Uint8Array,
  data: Uint8Array
): Promise<Uint8Array> {
  return browserAesDecrypt(iv, key, data);
}
