var helicopter;
var helicopterIMG;
var package;
var packageIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function preload()
{
    helicopterIMG = loadImage("helicopter.png");
    packageIMG = loadImage("package.png")
}
function setup()
{
    createCanvas(800,800);
    helicopter = createSprite(400,100,50,50);
    helicopter.addImage(helicopterIMG);
    packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

    

}
function draw()
{
    background("black");
    if(keyDown(RIGHT_ARROW))
    {
        helicopter.x = helicopter.x+20
    }
    if(keyDown(LEFT_ARROW))
    {
        helicopter.x = helicopter.x-20
    }
    
    drawSprites();


}