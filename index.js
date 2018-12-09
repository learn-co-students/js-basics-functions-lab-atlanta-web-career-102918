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
  result = blocks * 264
  return result
}

const calculatesFarePrice = (start, end) => {
  let price
  let distance = distanceTravelledInFeet(start, end)
  if (distance < 400) {
    price = 0
    }
  else if(distance > 400 && distance < 2001){
    price = (distance - 400) * .02
  }
  else if (distance > 2000 && distance < 2500){
    price = 25
  }
  else {
    return 'cannot travel that far'
  }
  return price
}
