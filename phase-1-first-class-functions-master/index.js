// function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }
  function liftWeights() {
    console.log("Pump iron");
  }

//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }
//   function Monday() {
//     runFiveMiles();
//     liftWeights();
//   }
//   function Monday() {
//     exerciseRoutine(liftWeights);
//   }

//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }
//   exerciseRoutine(() => console.log("Stretch! Work that core!"));

function receivesAFunction (callback){

    return callback(() => {
        console.log("This is my output")
      })

}

function returnsANamedFunction(){
    function mul(){
        return 4*44
    }

    function namedFunction(){
        return mul
    }
    return namedFunction()
}

function returnsAnAnonymousFunction(){
    function sum(cbf){
        return cbf
    }

    return sum(function() {
        console.log('this is my result')
    })
}