
var $boxes = $('.my-box');
var game = {
  roundCounter: 0,
  roundTimer: 10,
  currentBox: null,
  player1: {
    name: "",
    score: 0
  },
  player2: {
    name: "",
    score: 0
  },
  winner: null,
  message: "",
  currentPlayer: {},
  //getPlayers: Function,
  startGame: function() {
    game.getPlayers();
    game.roundCountdown();
    //clearBox();
    //getWinner();
  },
  roundCountdown: function(){
     game.startPanda();
     timer = setInterval(function(){
        game.roundTimer--;
        if(game.roundTimer >= 0) {
          $("#game-time").text("countdown: " + game.roundTimer);
          $("#message").text(game.currentPlayer.name + ": " + game.currentPlayer.score);
        }
        else{
              $("#message").text("Times Up! You kissed " + game.currentPlayer.score + " pandas!");
              window.clearInterval(timer);
              window.clearInterval(movingPanda);
              if(game.roundCounter == 1){
                game.getWinner();
              }else{
                game.clearBox();
              }
        };
      }, 1000)
  },
  getPlayers: function(){
        game.player1.name = $("#player1").val();
        game.player2.name = $("#player2").val();
        $("#player2-wrapper").hide("#player2-wrapper");
        $("#player1-wrapper").hide("#player1-wrapper");
        game.currentPlayer = game.player1; //player1's turn
        // $("#message").text(game.player1.name + ", you go first.");
  },
  clearBox: function() {
    $boxes[game.currentBox].innerHTML = "";
    $boxes.off();
    game.roundTimer = 10;
    game.roundCounter++;
    if(game.currentPlayer == game.player1) {
      //player1 finished turn
      //game.current = game.player2;
      game.currentPlayer = game.player2;
    } else {
      //game.turn = game.player1
      game.currentPlayer = game.player1;
    };
    game.roundCountdown();
  },
  startPanda: function(){
    movingPanda = setInterval(function(){
      if(game.currentBox != null) {
        $boxes[game.currentBox].innerHTML = "";
      }
      game.currentBox = Math.floor((Math.random()) * 9);
      $boxes[game.currentBox].innerHTML = '<img src="panda-transparent-bg.png">'

      for(var i = 0; i<=8; i++){
        $($boxes[i]).off();
        $($boxes[i]).on('click', function() {
          if(this.innerHTML !== ""){
            $(this).append('<img src="http://cdn.playbuzz.com/cdn/22b1695a-b15f-47ed-850e-6cdeba141e43/1d7ff0e6-7b10-4c18-bd8d-38038f95f77c.png">');
            game.currentPlayer.score = game.currentPlayer.score + 1;
            $("#message").text(game.currentPlayer.score);
          };
        });
      };
    }, 2000);
  },
  getWinner: function(){
    $boxes[game.currentBox].innerHTML = "";
    if(game.player1.score > game.player2.score){
      $("#message").text("YOU WIN " + game.player1.name + "!");
    }else{
      $("#message").text("YOU WIN " + game.player2.name + "!");
    }
  }
};




$(".startGame").on("click", function(){
  game.startGame();
  $(".startGame").hide();
});





////////////////////////////////
// CLEAR BOX AND SWITCH TURNS
////////////////////////////////

////////////////////////////////
//  CHECK FOR AND RETURN WINNER
///////////////////////////////

  /////////////////////////////////////////////////////////
  // CODE PARKING LOT - holding area for ideas not in use
  /////////////////////////////
  // ON YOUR MARK, GET SET, GO!
  /////////////////////////////
  //
  // var $announce = {
  //   announce1: "#on-your-mark",
  //   announce2: "#get-set",
  //   announce3: "#go"
  // };
  //
  // JQuery.slowEach = function(announce, interval, callback) {
  //   if (! announce.length) return;
  //   var i = 0;
  //   next();
  //
  //   function next() {
  //       if (callback.call(announce[i], i, announce[i]) !==false);
  //         if(==i < announce.length);
  //           setTimeout( next, interval );
  //   }
  // return announce;
  // };
  // JQuery.fn.slowEach = function (interval, callback) {
  //   return jQuery.slowEach(this, interval, callback);
  // };
  //
  // $(".reveal").slowEach(500, function() {
  //   $(this).show();
  // });

  //////////////////////////////
  //  FOR LOOP FOR PLACING KISSES
  /////////////////////////////
  //
  //   for(var i = 0; i<=8; i++){
  //   $(".my-box").off("click", function() {
  //     //console.log(this.innerHTML);
  //     if(this.innerHTML !== ""){
  //       $(".my-box").on("click", function() {
  //       $(this).append('<img src="http://cdn.playbuzz.com/cdn/22b1695a-b15f-47ed-850e-6cdeba141e43/1d7ff0e6-7b10-4c18-bd8d-38038f95f77c.png">');
  //       game.score = game.score + 1;
  //       console.log(game.score);
  //     });
  //   };
  // });

  ///////////////////////////////////////////////////////////
  //  ANOTHER FUNCTION FOR PLACING KISSES AND SCORING A POINT
  ///////////////////////////////////////////////////////////
  // function kisses() {
  //   if($boxes[game.currentBox].innerHTML !== "") {
  //     $(this).append('<img src="http://cdn.playbuzz.com/cdn/22b1695a-b15f-47ed-850e-6cdeba141e43/1d7ff0e6-7b10-4c18-bd8d-38038f95f77c.png">');
  //     game.score = game.score + 1;
  //     $("#message").text(game.score);
  //   };
  // }

  //////////////
  // START GAME
  /////////////
  // function setGame() {
  // function firstPlayer() {
  //     game.turn = game.player1.name;
  //     if (Math.random() < 0.5) {
  //       game.turn = game.player2.name;
  //     }
  //
  //     $("#message").text(game.turn + " gets to start!");
  //     console.log(game.turn);
  //   };


  ///////////////////////
  // make the panda move
  // var movingPanda = window.setInterval(function(){
  //   if(game.currentBox !== null){
  //     $boxes[game.currentBox].innerText = "";
  //
  //   }
  //
  //   game.currentBox = Math.floor((Math.random()) * 9);
  //   $boxes[game.currentBox].innerHTML = '<img src="panda-transparent-bg.png">';
  // }, 3000);


  /////////////////////////////////////
  // lips on the click to score a point
  /////////////////////////////////////
  // $boxes.on('click', function(){
  //   if($boxes[game.currentBox].innerHTML === '<img src="panda-transparent-bg.png">') {
  //     $(this).append('<img src="http://cdn.playbuzz.com/cdn/22b1695a-b15f-47ed-850e-6cdeba141e43/1d7ff0e6-7b10-4c18-bd8d-38038f95f77c.png">');
  //     game.score = game.score + 1;
  //     $("#message").text(game.score);
  //   } else if ($boxes[game.currentBox].innerText === null ||
  //              $boxes[game.currentBox].innerText === "" ||
  //              $boxes[game.currentBox].innerText === 0) {
  //     $boxes[game.currentBox].innerText = $boxes[game.currentBox].innerText;
  //     game.score = game.score;
  //   };
  // });

  /////////////////////////////
  // function reportScore () {
  //  $("#message").text(game.turn + "you made " + game.score + " pandas happy!")
  // }
  //
  //

  // function startGame() {
  //   roundCountdown();
  //   movingPanda();
  //   clearBox();
  //   getWinner();
  // };


  /////////////////////
  // COUNTDOWN FROM 30
  ////////////////////

    // var roundCountdown = window.setInterval(countDown, 1000);
    // var roundCountdown = setInterval(function(){
    //   game.roundTimer--;
    //
    //
    //   if(game.roundTimer >= 0) {
    //     $("#game-time").text("countdown: " + game.roundTimer);
    //         $("#message").text(game.score);
    //       } else{
    //         $("#message").text("Times Up! You kissed " + game.score + " pandas!");
    //
    //     window.clearInterval(roundCountdown);
    //     window.clearInterval(movingPanda);
    //     clearBox();
    //   };
    //   }, 1000);



  ////////////////////////////
  //  START THE PANDAS MOVING
  ///////////////////////////



  //////////////////////
  //   GET PLAYER NAMES
  /////////////////////
