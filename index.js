// Code your solution in this file!
function distanceFromHqInBlocks(distanceinblocks) {
  return Math.abs(distanceinblocks - 42);
}

function distanceFromHqInFeet(distanceinblocks) {

  return 264 * distanceFromHqInBlocks(distanceinblocks)
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function,
  //passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
  return 264 * Math.abs(start - destination);
}

function calculatesFarePrice(start, destination) {
  let distance, fare;

  distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    fare = 0;
  }

  else if (distance >= 400 && distance < 2000) {
    // charges 2 cents per foot when total feet travelled is between 400 and 2000
    // (remember the first 400 feet are free!)
    fare = (distance - 400) * .02;
  }

  else if (distance >= 2000 && distance < 2500) {
    fare = 25;
  }
  else if (distance >= 2500) {
    fare = 'cannot travel that far';
  }
  return fare;

}
