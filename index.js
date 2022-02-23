// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const num =(42-someValue);
    return Math.abs(num);
}
function distanceFromHqInFeet(someValue){
 const blocks = distanceFromHqInBlocks(someValue);
 return (blocks * 264)
}
function distanceTravelledInFeet(start, end){
    const blocksTravelled = Math.abs(start-end);
    return (blocksTravelled * 264)

}
function calculatesFarePrice(start, end){
    const feet = distanceTravelledInFeet(start,end);
    if(feet <= 400 ){
        return 0
    }else if(feet <= 2000){
        return ((feet-400)*.02)
    }else if(feet <2500){
        return (25)
    }else {
        return 'cannot travel that far';
    }
}