function  distanceFromHqInBlocks(block){
    block= 42-block
    if(block<0) block=block*-1
    return block
}
function distanceFromHqInFeet(block){
   return distanceFromHqInBlocks(block) *264
}
function distanceTravelledInFeet(start,destination){
    let distance =(destination-start)*264
    if(distance<0) distance=distance*-1
    return distance
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination)
    let price = undefined;
   switch (true) {
    case distance<400:
        price=0
        break;
    case distance>400 && distance<2000:
        price= (distance-400)*0.02
        break;
    case distance>2000 && distance<2500:
        price= 25
        break;
    case distance>2500:
        price="cannot travel that far"
        break;

    default:
        break;
   }
   return price
}
// Code your solution in this file!