import Blake2s from 'blake2s-js'
import chroma from 'chroma-js'

export const addDegrees = (a, b) => {
  var output = (a + b) % 360
  if (output < 0) output += 360
  return output
}

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

export const complementary = hex => {
  const [ hue, saturation, lightness ] = chroma(hex).hsl()
  const complementary = [ addDegrees(180, hue), saturation, lightness ]
  return chroma.hsl(...complementary).hex()
}
