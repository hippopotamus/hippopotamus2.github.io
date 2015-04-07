---
layout: post
title: HTML5 Canvas
date: 2015-04-07
---

I was reading about HTML5 canvas. Seems pretty cool. I followed one of the tutorials and made a shitty little game. I added a little bit of functionality to it. Hopefully I'll get some more time to play with it. This was fun.
<style>
  #canvas {
    display: block;
    border: 1px solid #000;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
</style>
<canvas id="canvas" width="512" height="480"></canvas>
<script>
var ctx, bgImage, then, canvas
var keysDown = {}
var bgReady = false

var hero = {
  image: new Image(),
  speed: 256,
  x: 0,
  y: 0
}

var monster = {
  image: new Image(),
  x: 0,
  y: 0
}

var monstersCaught = 0

$(document).ready(function() {
  bgImage = new Image()
  bgImage.src = "/public/images/canvas-game/background.png"
  hero.image.src = "/public/images/canvas-game/hero.png"
  monster.image.src = "/public/images/canvas-game/monster.png"

  canvas = $('#canvas')[0]
  ctx = canvas.getContext("2d")

  $(document).keydown(function(e) {
    keysDown[e.keyCode] = true
  })

  $(document).keyup(function(e) {
    delete keysDown[e.keyCode]
  })
  reset()
  main()
})

function reset() {
  hero.x = canvas.width / 2
  hero.y = canvas.height / 2

  monster.x = 32 + (Math.random() * (canvas.width - 96))
	monster.y = 32 + (Math.random() * (canvas.height - 96))
}


function update(modifier) {
  if(37 in keysDown && hero.x > 32) { hero.x -= hero.speed * modifier }
  if(38 in keysDown && hero.y > 32) { hero.y -= hero.speed * modifier }
  if(39 in keysDown && hero.x < canvas.width - 64) { hero.x += hero.speed * modifier }
  if(40 in keysDown && hero.y < canvas.height - 64) { hero.y += hero.speed * modifier }

  if(
    hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32) &&
    hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)
  ) {
    ++monstersCaught
    reset()
  }
}

function render() {
  ctx.drawImage(bgImage, 0, 0)
  ctx.drawImage(hero.image, hero.x, hero.y)
  ctx.drawImage(monster.image, monster.x, monster.y)

  ctx.fillStyle = "rgb(250, 250, 250)"
  ctx.font = "24px Inconsolata"
  ctx.textAlign = "left"
  ctx.textBaseline = "top"
  ctx.fillText("Monsters caught: " + monstersCaught, 32, 32)
}

function main() {
  var now = Date.now();
  if(then) {
    var delta = now - then;
    update(delta / 1000);
    render();
  }

  then = now;
  requestAnimationFrame(main);
}
</script>
