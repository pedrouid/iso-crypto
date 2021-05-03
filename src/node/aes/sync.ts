import { nodeAesEncrypt, nodeAesDecrypt } from '../../lib/node';

export function aesCbcEncryptSync(
  iv: Uint8Array,
  key: Uint8Array,
  data: Uint8Array
): Uint8Array {
  const result = nodeAesEncrypt(iv, key, data);
  return result;
}

export function aesCbcDecryptSync(
  iv: Uint8Array,
  key: Uint8Array,
  data: Uint8Array
): Uint8Array {
  const result = nodeAesDecrypt(iv, key, data);
  return result;
}
