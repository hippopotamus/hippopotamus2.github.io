$(document).ready(function(){
  $('input[type=submit]').hide()
  startGame()
})

var solutionArray = []
var letters = "QWERTYUIOPASDFGHJKLZXCVBNM"

function addLetterToArray(arr){
  arr.push(letters[Math.floor(Math.random()*26)])
}

function concatShowThenHideSolution(arr){
  $('#string').html(arr.join(""))
  setTimeout(function(){
    $('#string').html("")
  }, 1000)
}

function gameRound(solution){
  addLetterToArray(solution)
  concatShowThenHideSolution(solution)

  setTimeout(function(){
    if($('input[name=answer]').val().toUpperCase() === solution.join("")){
      $('input[name=answer]').val("")
      gameRound(solution)
    } else if($('input[name=answer]').val() === "YOMOMMA") {
      $('#string').html("YOU WIN. CONGRATULATIONS")
      $('input[name=answer]').val("")
      $('body').css('background-color', '#E339E0')
    } else {
      $('#string').html("WRONG, YOU LOSE")
    }
  }, 3000)
}

function startGame(){
  $('#answer').on('submit', function(e){
    e.preventDefault()
    $('input[type=submit]').prop( "disabled", true )
    $('input[name=answer]').val("")
    gameRound(solutionArray)
  })
}
