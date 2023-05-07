// Code your solutions in this file
const names = ["kishimoto", "salah", "hiba"];

function writeCards(names){
    let messages = []
    for (let i=0; i<names.length; i++){
        messages.push ("Thank you, " + names[i] + ", for the wonderful surprise gift!")
    }
    return messages;
}


function countDown(int){
    let i = int
    while(i > -1){
        console.log(i)
        i--
    }
}
