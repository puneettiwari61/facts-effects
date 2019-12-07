const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// var gradient = c.createLinearGradient(800,800, 220,0);

// // Add three color stops
// gradient.addColorStop(0, 'black');
// gradient.addColorStop(.5, 'black');
// gradient.addColorStop(1, 'black');

// // Set the fill style and draw a rectangle
// c.fillStyle = gradient;
// c.fillRect(20, 20, 200, 100);


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

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;
var minRadius = 2;

window.addEventListener('mousemove',function(event){
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize',function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})



class Circle {
  constructor(x, y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = getRandomColor();
  }

  draw(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.fillStyle = this.color;
    c.fill();
  }

  update(){
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx =-this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy =-this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if(mouse.x-this.x < 100 && mouse.x - this.x > -100 &&mouse.y - this.y < 100 && mouse.y - this.y > -100){
      if(this.radius < maxRadius){
      this.radius += 1;
    }
  }
    else if(this.radius> this.minRadius){
        this.radius -= 1;
    }

    this.draw();
  }
}

var newArr =[];
function init(){

  newArr =[];
  for(let i=0; i<1500; i++){
  var radius = Math.random() * 3 + 1;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let dx = (Math.random() - 0.5)*2.5;
  let y = Math.random() * (innerHeight- radius*2) + radius;
  let dy = (Math.random() - 0.5)*2.5;
  newArr.push(new Circle(x,y,dx,dy,radius));
}
}



function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);

  for(let i = 0; i<newArr.length; i++){
    newArr[i].update();
  }

}






var span = document.getElementById("fact")


var facts = new Array();
	facts[0] = "North Korea and Cuba are the only places you can't buy Coca-Cola.";
	facts[1] = "The entire world's population could fit inside Los Angeles.";
  facts[2] = "There are more twins now than ever before.";
  facts[3] = "The hottest chili pepper in the world is so hot it could kill you.";
  facts[4] = "More people visit France than any other country.";
  facts[5] = "The world's most densely populated island is the size of two soccer fields.";
  facts[6] = "The Canary Islands are named after dogs, not birds.";
  facts[7] = "Indonesia is home to some of the shortest people in the world.";
  facts[8] = "The Paris Agreement on climate change was signed by the largest number of countries ever in one day.";
  facts[9] = "The world's quietest room is located at Microsoft's headquarters in Washington state.";
  facts[10] = "There are only three countries in the world that don't use the metric system.";
  facts[11] = "The longest place name on the planet is 85 letters long.";
  facts[12] = "Four babies are born every second.";
  facts[13] = "The coldest temperature ever recorded was -144 degrees Fahrenheit.";
  facts[14] = "The Earth's ozone layer will make a full recovery in 50 years.";
  facts[15] = "Japan is the world's most earthquake-prone country.";
  facts[16] = "There are around 4 quadrillion quadrillion bacteria on Earth.";
  facts[17] = "People who are currently alive represent about 7 percent of the total number of people who have ever lived.";
  facts[18] = "Muhammad is thought to be the most popular name in the world.";
  facts[19] = "Only two countries use purple in their national flags.";
  facts[20] = "Africa and Asia are home to nearly 90 percent of the world's rural population.";
  facts[21] = "The most expensive coin in the world was sold for more than $7 million.";
  facts[22] = "The world's largest man-made oyster reef was created in Maryland.";
  facts[23] = "A record-breaking 92 countries competed in the 2018 Winter Olympics.";
  facts[24] = "South Sudan is the youngest country in the world.";
  facts[25] = "More than 52 percent of the world's population is under 30 years old.";
  facts[26] = "People 60 years and older make up 12.3 percent of the global population.";
  facts[27] = "There are more than 24 time zones around the world.";
  facts[28] = "Nearly half of the world's population watched both the 2010 and 2014 FIFA World Cup games.";
  facts[29] = "It's estimated that Sweden has more islands than any other country.";
  facts[30] = "There are 43 countries that still have a royal family.";
  facts[31] = "California is home to the Artichoke Capital of the World.";
  facts[32] = "All giant pandas in zoos around the world are on loan from China.";
  facts[33] = "Canada has nine percent of the world's forests.";
  facts[34] = "The red-billed quelea is the most common bird on Earth.";
  facts[35] = "There's a website that tracks the world's population in real time.";
  facts[36] = "More people speak Mandarin Chinese than any other language.";
  facts[37] = "Around one in every 200 men are direct descendants of Genghis Khan.";
  facts[38] = "Copenhagen is the most bike-friendly city in the world.";
  facts[39] = "There are 41 countries that recognize sign language as an official language.";
  facts[40] = "The global adult literacy rate is around 86 percent.";
  facts[41] = "Facebook has more users than the population of the U.S., China, and Brazil combined.";
  facts[42] = "There are only two countries with names that begin with The.";
  facts[43] = "All the ants on Earth weigh about as much as all the humans.";
  facts[44] = "The oceans contain almost 200,000 different kinds of viruses.";
  facts[45] = "New Zealanders have more pets per household than any other country.";
  facts[46] = "Tokyo is the world's largest city with 37 million inhabitants.";
  facts[47] = "Interpol began in 1914 when legal professionals from 24 countries got together to discuss catching fugitives.";
  facts[48] = "Nearly two people die each second.";
  facts[49] = "Yawning Cools Your Brain.";
  facts[50] = "An Apple Can Last up to 10 Months.";

  
window.onload = function () { span.innerHTML = facts[Math.floor(Math.random()*facts.length)];}
init();

animate();
