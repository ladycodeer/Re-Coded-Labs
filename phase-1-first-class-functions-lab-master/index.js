// Code your solution in this file!
let arr1 =['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(){


return [arr1[0],arr1[1]];
}
function  returnLastTwoDrivers(){


return [arr1[2],arr1[3]];
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
  }
const fareDoubler= createFareMultiplier(2)
const   fareTripler= createFareMultiplier(3)
function selectDifferentDrivers (arr1, selectedfunction){
    return selectedfunction(arr1)

}