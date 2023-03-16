// Code your solution in this file!
    const unBlock = 264;
    const elHq = 42;

function distanceFromHqInBlocks(someValue) {
    if (someValue > elHq) {
        return someValue - elHq;
    } else {
        return elHq - someValue;
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * unBlock;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * unBlock;
    } else {
        return (destination - start) * unBlock;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <=2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    }
}