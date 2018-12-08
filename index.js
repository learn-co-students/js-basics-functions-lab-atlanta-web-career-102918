// Code your solution in this file!

const distanceFromHqInBlocks = (blocks) => {
  let result = Math.abs(42 - blocks)

  return result
}

const distanceFromHqInFeet = (blocks) => {
  result = distanceFromHqInBlocks(blocks) * 264
  return result
}

const distanceTravelledInFeet = (b1, b2) => {
  blocks = Math.abs(b1 - b2)
  result = distanceFromHqInFeet(blocks)
  return result
}
