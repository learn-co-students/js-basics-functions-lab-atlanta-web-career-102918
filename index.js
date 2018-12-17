// Code your solution in this file!
// a block is 264 feet long

function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return street - 42
  } else {
    return 42 - street
  };
};

function distanceFromHqInFeet(street) {
  let distanceInBlocks = distanceFromHqInBlocks(street);
  return distanceInBlocks * 264;
};

function distanceTravelledInFeet(s1, s2) {
  return Math.abs(distanceFromHqInFeet(s1) - distanceFromHqInFeet(s2));
};

function calculatesFarePrice(start, destination) {
  const feetTraveled = distanceTravelledInFeet(start, destination);
  
  if (feetTraveled <= 400) {
    return 0
  } else if ((feetTraveled > 2000) && (feetTraveled <= 2500)) {
    return 25;
  } else if (feetTraveled > 2500) {
    return 'cannot travel that far';
  } else if ((feetTraveled > 400) && (feetTraveled <= 2000)) {
    // debugger;
    return (feetTraveled - 400) * 0.02;
  }; 
  
  
  // debugger;
  // switch (true) {
  //   case (feetTraveled <= 400): 
  //     return 0;
  //     break;
  //   case ((feetTraveled > 400) && (feetTraveled <= 2000)):
  //     debugger;
  //     return feetTraveled * 0.02;
  //     break;
  //   case ((feetTraveled > 2000) && (feetTraveled <= 2500)):
  //     return 25;
  //     break;
  //   case (feetTraveled > 2500):
  //     return 'cannot travel that far';
  //     break;
  // };
};