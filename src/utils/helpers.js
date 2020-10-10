export const addTrailingZeros = (number, length) => {
  const numberStr = number.toString()
  if (numberStr.length >= length) return numberStr
  let out = numberStr
  for (let i = 0; i < length - numberStr.length; i++) {
    out += '0'
  }
  return out
}
