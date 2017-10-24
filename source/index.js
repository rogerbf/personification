import Blake2s from 'blake2s-js'

export const stringToUint8Array = (input = ``) => {
  const source = unescape(encodeURIComponent(input))
  const output = new Uint8Array(source.length)
  for (let i = 0; i < source.length; i++) output[i] = source.charCodeAt(i)
  return output
}

export const colorHash = (input = ``) =>
  new Blake2s(3)
    .update(stringToUint8Array(input))
    .hexDigest()
