function shout(string) {


return string.toUpperCase();

}
function whisper(string){

return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
   let no = "I can't hear you!";
   let yes =  "YES INDEED!";
   let lovTo = "I would love to!";

   if (string.toLowerCase() === string){
    return no;
   } else if(string.toUpperCase() === string){
    return yes;

   }else if ("Let's have dinner together!" === string){
    return lovTo;
   }

}