// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

  ]

  function superbowlWin(record){
    const result = record.find(found => found.result === 'W')

   if (result){
        return result.year
    }else{
        return undefined
}
}


//   console.log(record.find(isWon));
  // { name: 'cherries', quantity: 5 }
//   function superbowlWin(){

//     const result = record.find( ({ result }) => result === "W" );
//     console.log(result)
// }