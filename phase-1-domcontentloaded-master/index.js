// Your code goes here
function changeText (){
    const MyText = document.getElementById('text').innerHTML = 'This is really cool!';
    return MyText;
};
document.addEventListener('DOMContentLoaded', changeText);