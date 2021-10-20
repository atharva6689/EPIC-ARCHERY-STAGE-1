const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage,Archerimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  Archerimage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body

  var options = {
    isStatic: true
  };
  //create player body
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);

  /*playerArcher = Bodies.rectangle(340, 160, 50, 150);
  playerArcher.scale = 1;
  World.add(world, playerArcher);*/
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage,player.position.x,player.position.y, 50, 180);
  //show the playerbase image using image() function
  image(baseimage,playerBase.position.x,playerBase.position.y, 180, 150);

  //image(Archerimage,340, 160, 50, 180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
