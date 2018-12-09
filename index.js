// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  if (pickup > 42) {
    return pickup - 42
  }
  else {
    return 42 - pickup
  }
}

function distanceTravelledInFeet(pickup, destination) {
  if (pickup > destination) {
    return ((pickup - destination)*264)
  }
  else {
    return ((destination - pickup)*264)
  }
}


function distanceFromHqInFeet(pickup) {
  return (distanceFromHqInBlocks(pickup)*264)
}

function calculatesFarePrice(start, destination) {
  distance = (distanceTravelledInFeet(start, destination));
  chargeable = 0

  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance < 401) {
    return chargeable;
  } else if (distance < 2001) {
    chargeable = ((distance - 400) * .02);
  } else if (distance < 2501) {
    chargeable = 25;
  }
  return chargeable
}
