// // var target = document.getElementById('target');
// var button = document.querySelector('.btn');
// // var titles = [
// //     'Title 1',
// //     'Title 2',
// //     'Title 3',
// //     'Title 4',
// //     'Title 5'
// // ];




// function newTitle(event){
//   console.log(event);
//     // var i = (Math.random() * titles.length) | 0;
//     // target.innerText = titles[i];
// }
// // newTitle();

// button.addEventListener('click',newTitle)
var span = document.getElementById("msgDiv")


var msgArr = new Array();
	msgArr[0] = "Message 1...";
	msgArr[1] = "Message 2...";
  msgArr[2] = "Message 3..."
  
span.addEventListener('click',fact);

function fact(event){
  return event
}



// window.onload = function () { fact.innerHTML = msgArr[Math.floor(Math.random()*msgArr.length)];}

console.log('hai')