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
  // Note that for hue-less colors (black, white, and grays)
  // the hue component will be NaN. [NaN,0,1]
  const complementary = [ addDegrees(180, hue), saturation, lightness ]
  return chroma.hsl(...complementary).hex()
}

export const triad = hex => {
  const [ hue, saturation, lightness ] = chroma(hex).hsl()
  const hue120 = addDegrees(hue, 120)
  const hue240 = addDegrees(hue, 240)
  return [
    chroma.hsl(hue120, saturation, lightness).hex(),
    chroma.hsl(hue240, saturation, lightness).hex()
  ]
}

export const tetrad = hex => {
  const [ hue, saturation, lightness ] = chroma(hex).hsl()
  const hue90 = addDegrees(hue, 90)
  const hue180 = addDegrees(hue, 180)
  const hue270 = addDegrees(hue, 270)
  return [
    chroma.hsl(hue90, saturation, lightness).hex(),
    chroma.hsl(hue180, saturation, lightness).hex(),
    chroma.hsl(hue270, saturation, lightness).hex()
  ]
}
