// Code your solution here

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(drivers, name){
    return drivers.filter( (driver) => driver.toUpperCase()=== name.toUpperCase());
}
function fuzzyMatch(drivers,selectedLetters){
    const matchedDrivers = drivers.filter(function(name){
       if(name.charAt(0) ===selectedLetters.charAt(0) &&  name.charAt(1) ===selectedLetters.charAt(1))
       return name
    })
    return matchedDrivers
}
function matchName(drivers,selectedNames){
    const matchedNames =drivers.filter((name)=> name.name === selectedNames);
    return matchedNames
}
