import { nodeSha256, nodeSha512, nodeRipemd160 } from '../../lib/node';

export function sha256Sync(msg: Uint8Array): Uint8Array {
  const result = nodeSha256(msg);
  return result;
}

export function sha512Sync(msg: Uint8Array): Uint8Array {
  const result = nodeSha512(msg);
  return result;
}

export function ripemd160Sync(msg: Uint8Array): Uint8Array {
  const result = nodeRipemd160(msg);

  return result;
}
