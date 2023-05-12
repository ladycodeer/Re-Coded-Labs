// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(jenny){
    cats.push(jenny);
}
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

 function destructivelyPrependCat(cam){
    cats.unshift(cam)

}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');
 function  destructivelyRemoveLastCat(){
    cats.pop()
}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');
function  destructivelyRemoveFirstCat(){
    cats.shift()
}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');
function appendCat(kishimoto){
    return[... cats, kishimoto];
}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');
function prependCat(kishimoto){
    return [kishimoto,...cats];
}
// console.log(prependCat);
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
    function removeLastCat(params) {
        return cats.slice(0, cats.length -1)
    }
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
    function removeFirstCat() {
        return cats.slice(1);
    }