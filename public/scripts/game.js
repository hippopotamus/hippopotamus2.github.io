$(document).ready(function(){
  $('input[type=submit]').hide()
  var game = new Game()
  game.startGame()
})

function Game() {
  this.solutionArray = [],
  this.letters = "QWERTYUIOPASDFGHJKLZXCVBNM",

  this.addLetterToArray = function() {
    this.solutionArray.push(this.letters[Math.floor(Math.random()*26)])
  },

  this.concatShowThenHideSolution = function() {
    $('#string').html(this.solutionArray.join(""))
    setTimeout(function(){
      $('#string').html("")
    }, 1000)
  },
  this.gameRound = function(){
    var that = this
    this.addLetterToArray(this.solutionArray)
    this.concatShowThenHideSolution(this.solutionArray)

    setTimeout(function(){
      if($('input[name=answer]').val().toUpperCase() === that.solutionArray.join("")){
        $('input[name=answer]').val("")
        return that.gameRound()
      } else if($('input[name=answer]').val() === "YOMOMMA") {
        $('#string').html("YOU WIN. CONGRATULATIONS")
        $('input[name=answer]').val("")
        $('body').css('background-color', '#E339E0')
      } else {
        $('#string').html("WRONG, YOU LOSE")
        $('input[type=submit]').prop("disabled", false)
        that.solutionArray = []
      }
    }, 3000)
  },
  this.startGame = function() {
    var that = this
    $('#answer').on('submit', function(e){
      e.preventDefault()
      $('input[type=submit]').prop("disabled", true)
      $('input[name=answer]').val("")
      that.gameRound()
    })
  }
}
