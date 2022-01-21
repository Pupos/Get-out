let rar = 72;
let access = 0;
let glob;
let shipPlaces = [];
let position = 1;
let position2 = 1;
let position3 = 1;
let position4 = 1;
let position5 = 1;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}

let errorMessage = [0, 0, 0, 0, 0];
let notTheSame = [0, 0, 0, 0, 0];
let check1 = 0;
let check2 = 0;
let check3 = 0;
let check4 = 0;
let check5 = 0;

let playerNumber = null;
let numPlayers = null;
let bothPlayersOnline = false;

let checkAll = [0, 0, 0, 0, 0];
let access2 = 0;
let access3 = 0;
let access4 = 0;
let access5 = 0;

let counter1 = 0;
let counter2 = 0;

let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

let dead1 = [];
let dead2 = [];
let dead3 = [];
let dead4 = [];
let dead5 = [];
let randShot;
let j1 = [999];
let j2 = [999];
let j3 = [999];
let j4 = [999];
let j5 = [999];

let keepNumber;
let type = 0;
let up;
let left;
let gameBoard = [];
let upT;
let leftT;
let pos1;
let pos2;

let pos3;

let pos4;

let pos5;

let upS;
let leftS;
let turn = "user";
let upL;
let leftL;
let typeCheck = [0, 0, 0, 0, 0, 0];
let upA;
let leftA;
var firebaseConfig = {
  apiKey: "AIzaSyAPEC_pyzD9_lcIlMQ5f_KtMUL3yvdu6GY",
  authDomain: "first-eac36.firebaseapp.com",
  databaseURL: "https://first-eac36-default-rtdb.firebaseio.com",
  projectId: "first-eac36",
  storageBucket: "first-eac36.appspot.com",
  messagingSenderId: "463243228425",
  appId: "1:463243228425:web:b59b71546616dc25114fd8",
  measurementId: "G-XW3G2J2MW5",
};

let cells = [];

function showLightBox(message) {
  // set message
  document.getElementById("message").innerHTML = message;

  // show lightbox
  changeVisibility("lightbox");
}

function changeType(i) {
  type = i;
  typeCheck[i] = 1;
  console.log(typeCheck + " my array");
}
firebase.initializeApp(firebaseConfig);

function changeVisibility(divID) {
  var element = document.getElementById(divID);

  // if element exists, it is considered true
  if (element) {
    element.className = element.className == "hidden" ? "unhidden" : "hidden";
  } // if
} // changeVisibility

const numPlayersDB = firebase.database().ref("numPlayers");
numPlayersDB.on("value", function (data) {
  numPlayers = data.val();
  updateGame();
});

numPlayersDB.once("value", function (data) {
  let numPlayers = data.val();
  console.log(numPlayers);

  if (numPlayers == 0) {
    playerNumber = 1;
    numPlayersDB.set(1);
  } else if (numPlayers == 1) {
    playerNumber = 2;
    numPlayersDB.set(2);
  } else if (numPlayers == 2) {
    showLightBox("Game Full");
  } else {
    showLightBox("An error has occured");
  }
});

function updateGame() {
  console.log("WORKS");
  if (document.getElementById("lightbox").className == "unhidden") {
    return;
  }

  if (bothPlayersOnline == false && numPlayers == 2) {
    bothPlayersOnline == true;
  }

  if (bothPlayersOnline == true && numPlayers == 1) {
    let changePlayerMessage = "";
    bothPlayersOnline == false;

    if (playerNumber == 2) {
      playerNumber = 1;
      changePlayerMessage = "You're X now!";
    }
    if (playerNumber == 1) {
    }
    showLightBox("The ther player left the game." + changePlayerMessage);
    return;
  }

  let winner = checkWin();
  if (winner != null) {
    if (winner == playerNumber) {
      showLightBox("You Win!");
    } else {
      showLightBox("You lose!");
    }
    return;
  }

  if (isMyTurn()) {
    setMessage("You are " + playerSymbol() + ". Your turn.");
  } else {
    setMessage("You are " + playerSymbol() + ". Waiting for opponent.");
  }
}
function setMessage(message) {
  let messageElement = document.getElementById("gameMessage");
  messageElement.innerHTML = message;
} // setMessage
window.onunload = function () {
  numPlayersDB.once("value", function (data) {
    let numPlayers = data.val();
    console.log(numPlayers + " playeeeeeeeers!");
    numPlayers--;
    console.log(numPlayers + " playeeeeeeeers!");

    if (numPlayers < 0) numPlayers = 0;
    numPlayersDB.set(numPlayers);
  });
};

function checkWin() {}

function getNumTurns() {
  if (gameBoard != null) {
    let count = 0;
    for (let i = 0; i < gameBoard.length; i++) {
      if (gameBoard[i] != "") count++;
      console.log(count);
    }
    return count;
  }
}

function isMyTurn() {
  if (getNumTurns() % 2 == 0) {
    if (playerNumber == 1) return true;
    else return false;
  } else {
    if (playerNumber == 1) return false;
    else return true;
  }
}

function playerSymbol() {
  if (playerNumber == 1) return "X";
  else if (playerNumber == 2) return "O";
  else return "E"; //Meaning "Error"
}

function Game() {
  console.log(turn);
  
  if (turn == "PC") {
        turn = "user";

        Shoot(Math.floor(Math.random() * (109 - 0) + 0),IIK1,IIK2,IIK3,IIK4,IIK5, turn);

  }
  if (turn == "user") {
    turn = "PC";
  

  for (let i = 0; i < cells.length; i++) {
    let keepH;
    if (cells[i][0] == "r") {
      console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

      if (cells[i][1] == 1) {
        console.log(counter1 + " whaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        

       
          console.log(cells[i][2] + " cells");
          counter1++;
          dead1.push(cells[i][2]);
          console.log(counter1 + " counter");
          notTheSame[0] = 0;
          if (counter1 == 3) {
            for (let j = 0; j < dead1.length; j++) {
              console.log(dead1);
              document.getElementById("n" + dead1[j]).style.backgroundColor =
                "orange";
              document.getElementById("n" + dead1[j]).style.color = "orange";
            }
          }
          cells[i][0]="R";
        }
      
     else if (cells[i][1] == 2) {
        console.log(counter2 + " whaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        

       
          console.log(cells[i][2] + " cells");
          counter2++;
          dead2.push(cells[i][2]);
          console.log(counter2 + " counter");
          if (counter2 == 4) {
            for (let j = 0; j < dead2.length; j++) {
              console.log(dead2);
              document.getElementById("n" + dead2[j]).style.backgroundColor =
                "orange";
              document.getElementById("n" + dead2[j]).style.color = "orange";
            }
          }
          cells[i][0]="R";
    } else if (cells[i][1] == 3) {
        console.log(counter3 + " whaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        

       
          console.log(cells[i][2] + " cells");
          counter3++;
          dead3.push(cells[i][2]);
          console.log(counter3 + " counter");
          if (counter3 == 3) {
            for (let j = 0; j < dead1.length; j++) {
              console.log(dead3);
              document.getElementById("n" + dead3[j]).style.backgroundColor =
                "orange";
              document.getElementById("n" + dead3[j]).style.color = "orange";
            }
          }
          cells[i][0]="R";
    } else if (cells[i][1] == 4) {
        console.log(counter4 + " whaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        

       
          console.log(cells[i][2] + " cells");
          counter4++;
          dead4.push(cells[i][2]);
          console.log(counter4 + " counter");
          if (counter4 == 5) {
            for (let j = 0; j < dead4.length; j++) {
              console.log(dead4);
              document.getElementById("n" + dead4[j]).style.backgroundColor =
                "orange";
              document.getElementById("n" + dead4[j]).style.color = "orange";
            }
          }
          cells[i][0]="R";
    } else if (cells[i][1] == 5) {
        console.log(counter5 + " whaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        

       
          console.log(cells[i][2] + " cells");
          counter5++;
          dead5.push(cells[i][2]);
          console.log(counter5 + " counter");
          if (counter5 == 2) {
            for (let j = 0; j < dead5.length; j++) {
              console.log(dead5);
              document.getElementById("n" + dead5[j]).style.backgroundColor =
                "orange";
              document.getElementById("n" + dead5[j]).style.color = "orange";
            }
          }
          cells[i][0]="R";
    }
  }
}
  }
}

const tyle = firebase.database().ref("tyleNum");
tyle.on("value", function (data) {
  tyleNum = data.val();
});

let gameBoardDB = firebase.database().ref("gameBoard");
gameBoardDB.on("value", function (data) {
  gameBoardDB = data.val();
});
for (let i = 0; i < 110; i++) {
  gameBoard.push("");
}

let length = document.getElementsByClassName("figure");
console.log("working");
let j;
let deg;
let degA;
let degT;
let degS;
let degL;

let stick = document.getElementById("stick");

gameBoard[0] = 1212;

gameBoard[1] = 7327;
gameBoardDB.update(gameBoard);

gameBoard[0] = 12;

let IIK1;
let IIK2;
let IIK3;
let IIK4;
let IIK5;


let ship = "";
function putShip(name) {
  document.getElementById("putStick").style.background = "white";

  document.getElementById("putLong").style.background = "white";

  document.getElementById("putShort").style.background = "white";

  document.getElementById("putAvia").style.background = "white";

  document.getElementById("putTriple").style.background = "white";
  document.getElementById("putStick2").style.background = "white";

  document.getElementById("putLong2").style.background = "white";

  document.getElementById("putShort2").style.background = "white";

  document.getElementById("putAvia2").style.background = "white";

  document.getElementById("putTriple2").style.background = "white";

  if (ship == name) {
    if (ship == "stick" || ship == "stick2") {
      position = 1;
      position5 = 1;
      document.getElementById("putStick" || "putStick2").style.background =
        "white";
    } else if (ship == "longStick" || ship == "longStick2") {
      position2 = 1;

      document.getElementById("putLong").style.background = "white";
    } else if (ship == "smallStick" || ship == "smallStick2") {
      position5 = 1;

      document.getElementById("putShort").style.background = "white";
    } else if (ship == "aviaShip" || ship == "aviaShip2") {
      position4 = 1;

      document.getElementById("putAvia").style.background = "white";
    } else if (ship == "tripleShip" || ship == "tripleShip2") {
      position3 = 1;

      document.getElementById("putTriple").style.background = "white";
    }

    ship = "";
  } else {
    ship = name;

    if (ship == "stick") {
      document.getElementById("putStick").style.background = "grey";
      up = 93;
      deg = 90;
      left = 50;
    } else if (ship == "longStick") {
      document.getElementById("putLong").style.background = "grey";
      upL = 158;
      leftL = 65;
      degL = 90;
    } else if (ship == "smallStick") {
      document.getElementById("putShort").style.background = "grey";
      upS = 93;
      degS = 40;
      leftS = 40;
    } else if (ship == "aviaShip") {
      document.getElementById("putAvia").style.background = "grey";
      upA = 60;
      leftA = 20;
      degA = 0;
    } else if (ship == "tripleShip") {
      document.getElementById("putTriple").style.background = "grey";
      upT = 150;
      leftT = 40;
      degT = 60;
    }
    if (ship == "stick2") {
      document.getElementById("putStick2").style.background = "grey";
      up = 93;
      deg = 90;
      left = 50;
    } else if (ship == "longStick2") {
      document.getElementById("putLong2").style.background = "grey";
      upL = 158;
      leftL = 65;
      degL = 90;
    } else if (ship == "smallStick2") {
      document.getElementById("putShort2").style.background = "grey";
      upS = 93;
      degS = 40;
      leftS = 40;
    } else if (ship == "aviaShip2") {
      document.getElementById("putAvia2").style.background = "grey";
      upA = 60;
      leftA = 20;
      degA = 0;
    } else if (ship == "tripleShip2") {
      document.getElementById("putTriple2").style.background = "grey";
      upT = 150;
      leftT = 40;
      degT = 60;
    }
  }
}
function toles(rar) {
  let e = document.getElementById("n60");

  console.log(e.getBoundingClientRect().top + " loooooooooooooooooooool");

  if (rar == 0 && ship != "") {
    for (let i = 0; i < length.length; i++) {
      shipPlaces[i] = i;
      let x = Math.ceil(getOffset(length[i]).top / 10);

      if (x < 120) {
        length[i].onclick = function Fill() {
          let x = Math.ceil(getOffset(length[i]).top / 10);
          let y = Math.ceil(getOffset(length[i]).left / 10);
          if (j == i + 1) {
            if (type == 1) {
              if (position == 1) {
                deg = 146;
                position = 2;
              } else if (position == 2) {
                position = 3;
                deg = 34;
              } else if (position == 3) {
                position = 1;
                deg = 90;
              }
            } else if (type == 2) {
              if (position2 == 1) {
                upL = 100;
                leftL = 70;
                degL = 146;
                position2 = 2;
              } else if (position2 == 2) {
                position2 = 3;
                upL = 90;
                leftL = 0;
                degL = 34;
              } else if (position2 == 3) {
                position2 = 1;
                degL = 90;
                upL = 158;
                leftL = 65;
              }
            } else if (type == 3) {
              if (position3 == 1) {
                degT = 120;
                position3 = 2;
                upT = 80;
                leftT = 80;
              } else if (position3 == 2) {
                upT = 150;
                leftT = 40;
                position3 = 1;
                degT = 60;
              }
            } else if (type == 4) {
              if (position4 == 1) {
                degA = 50;
                position4 = 2;
                upA = 60;
                leftA = -30;
              } else if (position4 == 2) {
                position4 = 3;
                degA = 128;
                upA = 10;
                leftA = -20;
              } else if (position4 == 3) {
                position4 = 4;
                degA = 179;
                upA = -10;
                leftA = 30;
              } else if (position4 == 4) {
                position4 = 5;
                degA = 240;
                upA = -10;
                leftA = 10;
              } else if (position4 == 5) {
                position4 = 6;
                degA = 300;
                upA = 60;
                leftA = 10;
              } else if (position4 == 6) {
                position4 = 1;
                degA = 0;
                upA = 60;
                leftA = 20;
              }
            } else if ((type = 5)) {
              if (position5 == 1) {
                degS = 140;
                position5 = 2;
                upS = 97;
                leftS = 30;
              } else if (position5 == 2) {
                upS = 97;
                leftS = 40;
                position5 = 1;
                degS = 40;
              }
            }
            tyle.set(j);
            // gameBoardDB.update(gameBoard);
          }
          j = i + 1;
          let num = "n" + j;
          let rot;

          let point = document.getElementById(num);
          console.log(Math.ceil(getOffset(point).left / 10));
          if (type == 1) {
            rot = "rotate(" + deg + "deg" + ")";
            document.getElementById(ship).style.transform = rot;
            document.getElementById(ship).style.top =
              getOffset(point).top - up + "px";
            document.getElementById(ship).style.left =
              getOffset(point).left + left + "px";
          } else if (type == 2) {
            rot = "rotate(" + degL + "deg" + ")";
            document.getElementById(ship).style.transform = rot;
            document.getElementById(ship).style.top =
              getOffset(point).top - upL + "px";
            document.getElementById(ship).style.left =
              getOffset(point).left + leftL + "px";
          } else if (type == 3) {
            rot = "rotate(" + degT + "deg" + ")";
            document.getElementById(ship).style.transform = rot;
            document.getElementById(ship).style.top =
              getOffset(point).top - upT + "px";
            document.getElementById(ship).style.left =
              getOffset(point).left + leftT + "px";
          } else if (type == 4) {
            rot = "rotate(" + degA + "deg" + ")";
            document.getElementById(ship).style.transform = rot;
            document.getElementById(ship).style.top =
              getOffset(point).top - upA + "px";
            document.getElementById(ship).style.left =
              getOffset(point).left + leftA + "px";
          } else if (type == 5) {
            rot = "rotate(" + degS + "deg" + ")";
            document.getElementById(ship).style.transform = rot;
            document.getElementById(ship).style.top =
              getOffset(point).top - upS + "px";
            document.getElementById(ship).style.left =
              getOffset(point).left + leftS + "px";
          }
          console.log(x);
          if (type == 1) {
            if (position == 1) {
              access = 0;
              access2 = 0;
              for (let g = 0; g < length.length; g++) {
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 9 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 10 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 11) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access2 = 1;
                  console.log("done");
                }

                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y - 9 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y - 10 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y - 11) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access = 1;
                  console.log("done");
                }
                console.log(g);
                if (access == 1 && access2 == 1) {
                  gameBoard[j] = { type, position, playerNumber };
                }
              }
              console.log(gameBoard);
              if (access != 1 || access2 != 1) {
                checkAll[0] = 2;

                document.getElementById("error").style.visibility = "visible";
                console.log("?");
              } else {
                document.getElementById("error").style.visibility = "hidden";
                console.log("yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees");
                check1 = 1;
                checkAll[0] = 1;
                pos1 = j;
              }
            }
            if (position == 2) {
              access = 0;
              access2 = 0;
              for (let j = 0; j < length.length; j++) {
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 7 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 3 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 8) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 12 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 13)
                ) {
                  access2 = 1;
                  console.log("done");
                }

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y - 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 3 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 7 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 8) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13)
                ) {
                  access = 1;
                  console.log("done");
                }
                console.log(j);
              }
              console.log("Output" + access + " " + access2);

              if (access != 1 || access2 != 1 || x > 110) {
                document.getElementById("error").style.visibility = "visible";
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check1 = 1;
                checkAll[0] = 1;
                pos1 = j;
              }
            }
            if (position == 3) {
              access = 0;
              access2 = 0;
              for (let j = 0; j < length.length; j++) {
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 7 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 3 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 8) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13)
                ) {
                  access2 = 1;
                  console.log("done");
                }

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y - 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 3 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 7 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 8) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 7 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 12)
                ) {
                  access = 1;
                  console.log("done");
                }
                console.log(j);
              }
              console.log("Output" + access + " " + access2);

              if (access != 1 || access2 != 1 || x > 110) {
                document.getElementById("error").style.visibility = "visible";
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check1 = 1;
                checkAll[0] = 1;
                pos1 = j;
              }
            }
          } else if (type == 2) {
            if (position2 == 1) {
              access = 0;
              access2 = 0;
              access3 = 0;
              for (let g = 0; g < length.length; g++) {
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 9 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 10 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 11) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access2 = 1;
                  console.log("done");
                }
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 19 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 20 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 21) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access3 = 1;
                  console.log("working");
                }
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y - 9 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y - 10 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y - 11) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access = 1;
                  console.log("done");
                }
              }
              console.log(errorMessage[0] + " sdfsdfsfsdfsdfsdfsdfsfsdfsdfs");

              if (access != 1 || access2 != 1 || access3 != 1) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
                checkAll[1] = 2;
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check2 = 1;
                checkAll[1] = 1;
                pos2 = j;
              }
            }
            if (position2 == 2) {
              access = 0;
              access2 = 0;
              for (let j = 0; j < length.length; j++) {
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 7 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 3 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 8) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 12 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 13)
                ) {
                  access2 = 1;
                  console.log("done");
                }

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y - 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 3 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 7 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 8) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13)
                ) {
                  access = 1;
                  console.log("done");
                }
                console.log(j);
              }
              console.log("Output" + access + " " + access2);

              if (access != 1 || access2 != 1 || x > 100) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check2 = 1;
                checkAll[1] = 1;
                pos2 = j;
              }
            }
            if (position2 == 3) {
              access = 0;
              access2 = 0;
              for (let j = 0; j < length.length; j++) {
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 7 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 3 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 8) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13)
                ) {
                  access2 = 1;
                  console.log("done");
                }

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y - 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 3 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 7 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 8) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 7 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 12)
                ) {
                  access = 1;
                  console.log("done");
                }
                console.log(j);
              }
              console.log("Output" + access + " " + access2);

              if (access != 1 || access2 != 1 || x > 100) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check2 = 1;
                checkAll[1] = 1;
                pos2 = j;
              }
            }
          } else if (type == 3) {
            if (position3 == 1) {
              console.log("1pppp");
              check3 = 0;
              access = 0;
              access2 = 0;
              for (let g = 0; g < length.length; g++) {
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 6) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 7 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 12)
                ) {
                  access2 = 1;
                }

                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y - 5 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y - 4 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y - 6) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 7 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 12)
                ) {
                  access = 1;
                }
              }
              if (access != 1 || access2 != 1) {
                document.getElementById("error").style.visibility = "visible";
                checkAll[2] = 2;
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check3 = 1;
                checkAll[2] = 1;
                console.log("hhhhhhhhhhhhhhhhhhhhh");
                pos3 = j;
              }
            }
            if (position3 == 2) {
              console.log("2pppp");
              access = 0;
              access2 = 0;
              for (let g = 0; g < length.length; g++) {
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 6) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 7 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 12)
                ) {
                  access2 = 1;
                  console.log("data 111");
                }

                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 10 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 9 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 11) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access = 1;
                  console.log("data 222");
                }

                console.log(
                  y +
                    "   " +
                    x +
                    "   " +
                    Math.ceil(getOffset(length[g]).left / 10) +
                    " " +
                    Math.ceil(getOffset(length[g]).top / 10)
                );
              }
              console.log("Output" + access + " " + access2);

              if (access != 1 || access2 != 1) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
              } else {
                checkAll[2] = 1;
                pos3 = j;
                document.getElementById("error").style.visibility = "hidden";
                check3 = 1;
              }
            }
          } else if (type == 4) {
            if (position4 == 1) {
              access2 = 0;
              access3 = 0;
              access4 = 0;
              access5 = 0;
              console.log("dfbffffffffffffffffffffffffffffffffffffff");
              for (let g = 0; g < length.length; g++) {
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 9 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 10 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 11) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access2 = 1;
                  console.log("done1");
                }
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 19 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 20 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 21) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access3 = 1;
                  console.log(
                    "done3 " +
                      x +
                      " " +
                      Math.ceil(getOffset(length[g]).top / 10)
                  );
                }

                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 6) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 7 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 12)
                ) {
                  access4 = 1;
                  console.log("done4");
                }
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 15 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 14 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 16) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 7 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 12)
                ) {
                  access5 = 1;
                  console.log("done5");
                }
                console.log(g);
              }

              if (
                access2 != 1 ||
                access3 != 1 ||
                access4 != 1 ||
                access5 != 1
              ) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
                checkAll[3] = 2;
                console.log(checkAll + "?????????????????");
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check4 = 1;
                checkAll[3] = 1;
                console.log(checkAll + "?????????????????");
                pos4 = j;
              }
            }
            if (position4 == 2) {
              access2 = 0;
              access3 = 0;
              access4 = 0;
              access5 = 0;
              for (let j = 0; j < length.length; j++) {
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 12)
                ) {
                  access2 = 1;
                  console.log("done2");
                }

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y - 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 6) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12)
                ) {
                  access3 = 1;
                  console.log("done3");
                }
                console.log(j);

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 7) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12)
                ) {
                  access4 = 1;
                  console.log("done4");
                }
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 9 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 10 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 11) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 1)
                ) {
                  access5 = 1;
                  console.log("done5");
                }
              }
              console.log("Output" + access + " " + access2);

              if (
                access2 != 1 ||
                access3 != 1 ||
                access4 != 1 ||
                access5 != 1 ||
                x > 110
              ) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check4 = 1;
                checkAll[3] = 1;
                pos4 = j;
              }
            }

            if (position4 == 3) {
              access2 = 0;
              access3 = 0;
              access4 = 0;
              access5 = 0;
              for (let j = 0; j < length.length; j++) {
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 12)
                ) {
                  access2 = 1;
                  console.log("done2");
                }

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y - 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y - 6) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12)
                ) {
                  access3 = 1;
                  console.log("done3");
                }
                console.log(j);

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 7) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12)
                ) {
                  access4 = 1;
                  console.log("done4");
                }
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 9 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 10 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 11) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 1)
                ) {
                  access5 = 1;
                  console.log("done5");
                }
              }
              console.log("Output" + access + " " + access2);

              if (
                access2 != 1 ||
                access3 != 1 ||
                access4 != 1 ||
                access5 != 1 ||
                x > 110
              ) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
              } else {
                checkAll[3] = 1;
                pos4 = j;
                document.getElementById("error").style.visibility = "hidden";
                check4 = 1;
              }
            }
            if (position4 == 4) {
              access2 = 0;
              access3 = 0;
              access4 = 0;
              access5 = 0;
              console.log("dfbffffffffffffffffffffffffffffffffffffff");
              for (let g = 0; g < length.length; g++) {
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 9 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 10 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 11) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access2 = 1;
                  console.log("done1");
                }
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 19 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 20 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 21) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 1)
                ) {
                  access3 = 1;
                  console.log(
                    "done3 " +
                      x +
                      " " +
                      Math.ceil(getOffset(length[g]).top / 10)
                  );
                }

                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 6) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 7 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 12)
                ) {
                  access4 = 1;
                  console.log("done4");
                }
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 15 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 14 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 16) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 7 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x + 12)
                ) {
                  access5 = 1;
                  console.log("done5");
                }
                console.log(g);
              }

              if (
                access2 != 1 ||
                access3 != 1 ||
                access4 != 1 ||
                access5 != 1
              ) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
              } else {
                checkAll[3] = 1;
                pos4 = j;
                document.getElementById("error").style.visibility = "hidden";
                check4 = 1;
              }
            }
            if (position4 == 5) {
              access2 = 0;
              access3 = 0;
              access4 = 0;
              access5 = 0;
              for (let j = 0; j < length.length; j++) {
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 12)
                ) {
                  access2 = 1;
                  console.log("done2");
                }

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 16 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 14 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 15 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 13 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 17 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 12) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12)
                ) {
                  access3 = 1;
                  console.log("done3");
                }
                console.log(j);

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 7) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12)
                ) {
                  access4 = 1;
                  console.log("done4");
                }
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 9 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 10 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 11) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 1)
                ) {
                  access5 = 1;
                  console.log("done5");
                }
              }
              console.log("Output" + access + " " + access2);

              if (
                access2 != 1 ||
                access3 != 1 ||
                access4 != 1 ||
                access5 != 1 ||
                x > 110
              ) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check4 = 1;
                checkAll[3] = 1;
                pos4 = j;
              }
            }
            if (position4 == 6) {
              access2 = 0;
              access3 = 0;
              access4 = 0;
              access5 = 0;
              for (let j = 0; j < length.length; j++) {
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x + 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 12)
                ) {
                  access2 = 1;
                  console.log("done2");
                }

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 6) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12)
                ) {
                  access3 = 1;
                  console.log("done3");
                }
                console.log(j);

                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 4 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 7) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 13 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 12)
                ) {
                  access4 = 1;
                  console.log("done4");
                }
                if (
                  (Math.ceil(getOffset(length[j]).left / 10) == y + 9 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 10 ||
                    Math.ceil(getOffset(length[j]).left / 10) == y + 11) &&
                  (Math.ceil(getOffset(length[j]).top / 10) == x ||
                    Math.ceil(getOffset(length[j]).top / 10) == x + 1 ||
                    Math.ceil(getOffset(length[j]).top / 10) == x - 1)
                ) {
                  access5 = 1;
                  console.log("done5");
                }
              }
              console.log("Output" + access + " " + access2);

              if (
                access2 != 1 ||
                access3 != 1 ||
                access4 != 1 ||
                access5 != 1 ||
                x > 110
              ) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check4 = 1;
                checkAll[3] = 1;
                pos4 = j;
              }
            }
          } else if (type == 5) {
            if (position5 == 1) {
              console.log("2pppp");
              access = 0;
              access2 = 0;
              for (let g = 0; g < length.length; g++) {
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y - 5 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y - 6 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y - 4) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 7 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 12)
                ) {
                  access = 1;
                }

                console.log(
                  y +
                    "   " +
                    x +
                    "   " +
                    Math.ceil(getOffset(length[g]).left / 10) +
                    " " +
                    Math.ceil(getOffset(length[g]).top / 10)
                );
              }
              console.log("Output" + access + " " + access2);

              if (access != 1) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
                checkAll[4] = 2;
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check5 = 1;
                checkAll[4] = 1;
                console.log(checkAll + " ??????????????");
                pos5 = j;
              }
            }
            if (position5 == 2) {
              console.log("2pppp");
              access = 0;
              access2 = 0;
              for (let g = 0; g < length.length; g++) {
                if (
                  (Math.ceil(getOffset(length[g]).left / 10) == y + 5 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 6 ||
                    Math.ceil(getOffset(length[g]).left / 10) == y + 4) &&
                  (Math.ceil(getOffset(length[g]).top / 10) == x - 10 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 11 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 9 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 8 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 7 ||
                    Math.ceil(getOffset(length[g]).top / 10) == x - 12)
                ) {
                  access = 1;
                }

                console.log(
                  y +
                    "   " +
                    x +
                    "   " +
                    Math.ceil(getOffset(length[g]).left / 10) +
                    " " +
                    Math.ceil(getOffset(length[g]).top / 10)
                );
              }
              console.log("Output" + access + " " + access2);

              if (access != 1) {
                document.getElementById("error").style.visibility = "visible";
                console.log("?");
                checkAll[4] = 2;
              } else {
                document.getElementById("error").style.visibility = "hidden";
                check5 = 1;
                checkAll[4] = 1;
                pos5 = j;
                console.log(checkAll + " ??????????????");
              }
            }
          }
        };
      }
    }
  } else if (
    checkAll[0] == 1 &&
    checkAll[1] == 1 &&
    checkAll[2] == 1 &&
    checkAll[3] == 1 &&
    checkAll[4] == 1
  ) {
    console.log("yes");
    if (
      check2 == 1 &&
      check1 == 1 &&
      check3 == 1 &&
      check4 == 1 &&
      check5 == 1
    ) {
      keepNumber = pos2;
      let keepNumber2 = pos3;
      let keepNumber3 = pos4;
      let keepNumber4 = pos5;
       IIK1=pos1;
 IIK2=pos2;
 IIK3=pos3;
 IIK4=pos4;
 IIK5=pos5;

      console.log(
        keepNumber +
          " " +
          keepNumber2 +
          " " +
          keepNumber3 +
          " " +
          keepNumber4 +
          " " +
          pos1
      );

      for (let i = 0; i < length.length; i++) {
        console.log(keepNumber);
length[i].onclick = function(){
  Shoot(i, pos1, keepNumber, keepNumber2, keepNumber3, keepNumber4, turn);
}
      }
    }
  } else if (
    checkAll[0] == 2 ||
    checkAll[1] == 2 ||
    checkAll[2] == 2 ||
    checkAll[3] == 2 ||
    checkAll[4] == 2
  ) {
    document.getElementById("error").style.visibility = "visible";
    toles(0);
  }
}

console.log(rar);

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

function isCollide(a, b) {
  return !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  );
}
 function Shoot(i, pos1, keepNumber, keepNumber2, keepNumber3, keepNumber4, turn) {
             let j = i + 1;
   console.log("SHOOOOOTING");

   if (turn=="PC"){
              console.log((Math.ceil(getOffset(length[j]).top / 10))+" top");

       if((Math.ceil(getOffset(length[j]).top / 10)>120)){
         console.log((Math.ceil(getOffset(length[j]).top / 10))+" top");
         for(let i = 0;i<cells.length;i++){
         if (j!=cells[i][2]){
           break;
           
       }
         }
       } else  {
         Shoot(Math.floor(Math.random() * (109 - 0) + 0), pos1, keepNumber, keepNumber2, keepNumber3, keepNumber4, turn);
       }
   }
          let x5 = Math.ceil(getOffset(length[j]).top / 10);
          let y5 = Math.ceil(getOffset(length[j]).left / 10);
          let x4 = Math.ceil(getOffset(length[j]).top / 10);
          let y4 = Math.ceil(getOffset(length[j]).left / 10);
          let x2 = Math.ceil(getOffset(length[j]).top / 10);
          let y2 = Math.ceil(getOffset(length[j]).left / 10);
          let num = "n" + j;
          let x3 = Math.ceil(getOffset(length[j]).top / 10);
          let y3 = Math.ceil(getOffset(length[j]).left / 10);
          let x = Math.ceil(getOffset(length[j]).top / 10);
          let y = Math.ceil(getOffset(length[j]).left / 10);

          if (
            position == 1 &&
            (((Math.ceil(getOffset(length[pos1]).left / 10) == y + 10 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 9 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 11) &&
              (Math.ceil(getOffset(length[pos1]).top / 10) == x ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x + 1 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x - 1)) ||
              ((Math.ceil(getOffset(length[pos1]).left / 10) == y - 10 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 9 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 11) &&
                (Math.ceil(getOffset(length[pos1]).top / 10) == x ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x + 1 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x - 1)))
          ) {
            console.log("coming through");
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 1, j]);
            console.log(cells);
          } else if (
            position == 2 &&
            (((Math.ceil(getOffset(length[pos1]).left / 10) == y + 5 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 4 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 6 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 7 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 3 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 8) &&
              (Math.ceil(getOffset(length[pos1]).top / 10) == x + 10 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x + 11 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x + 9 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x + 8 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x + 7 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x + 12)) ||
              ((Math.ceil(getOffset(length[pos1]).left / 10) == y - 5 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 4 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 6 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 3 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 7 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 8) &&
                (Math.ceil(getOffset(length[pos1]).top / 10) == x - 10 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x - 9 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x - 11 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x - 8 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x - 7 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x - 12)))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 1, j]);
          } else if (
            position == 3 &&
            (((Math.ceil(getOffset(length[pos1]).left / 10) == y + 5 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 4 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 6 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 7 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 3 ||
              Math.ceil(getOffset(length[pos1]).left / 10) == y + 8) &&
              (Math.ceil(getOffset(length[pos1]).top / 10) == x - 10 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x - 11 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x - 9 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x - 8 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x - 7 ||
                Math.ceil(getOffset(length[pos1]).top / 10) == x - 12)) ||
              ((Math.ceil(getOffset(length[pos1]).left / 10) == y - 5 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 4 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 6 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 3 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 7 ||
                Math.ceil(getOffset(length[pos1]).left / 10) == y - 8) &&
                (Math.ceil(getOffset(length[pos1]).top / 10) == x + 10 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x + 9 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x + 11 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x + 8 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x + 7 ||
                  Math.ceil(getOffset(length[pos1]).top / 10) == x + 12)))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 1, j]);
          } else if (
            position2 == 1 &&
            (((Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 10 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 9 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 11) &&
              (Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 1 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 1)) ||
              ((Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 20 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 19 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) ==
                  y2 - 21) &&
                (Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 1 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 1)) ||
              ((Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 10 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 9 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) ==
                  y2 - 11) &&
                (Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 1 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 1)))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            console.log("long");
            cells.push(["r", 2, j]);
          } else if (
            position2 == 2 &&
            (((Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 5 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 4 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 6 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 7 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 3 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 8) &&
              (Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 10 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 11 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 9 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 8 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 7 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                  x2 + 12)) ||
              ((Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 10 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 9 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 11 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 12 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 18 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) ==
                  y2 - 13) &&
                (Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 15 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 16 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 14 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 13 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 12 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 17)) ||
              ((Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 5 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 4 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 6 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 3 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 7 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 8) &&
                (Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 10 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 9 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 11 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 8 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 7 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 12)))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            gameBoard[num] = "r";
            gameBoardDB.set(gameBoard);
            document.getElementById(num).style.color = "red";
            cells.push(["r", 2, j]);
          } else if (
            position2 == 3 &&
            (((Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 5 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 4 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 6 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 7 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 3 ||
              Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 8) &&
              (Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 10 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 11 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 9 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 8 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 7 ||
                Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                  x2 - 12)) ||
              ((Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 10 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 9 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 11 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 12 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 + 18 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) ==
                  y2 + 13) &&
                (Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 - 15 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 16 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 14 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 13 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 12 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 - 17)) ||
              ((Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 5 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 4 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 6 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 3 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 7 ||
                Math.ceil(getOffset(length[keepNumber]).left / 10) == y2 - 8) &&
                (Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 10 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 9 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 + 11 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 8 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) == x2 + 7 ||
                  Math.ceil(getOffset(length[keepNumber]).top / 10) ==
                    x2 + 12)))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 2, j]);
          } else if (j == keepNumber) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 2, j]);
          } else if (
            position3 == 1 &&
            (((Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 + 5 ||
              Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 + 4 ||
              Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 + 6) &&
              (Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 + 10 ||
                Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 + 11 ||
                Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 + 9 ||
                Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 + 8 ||
                Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 + 7 ||
                Math.ceil(getOffset(length[keepNumber2]).top / 10) ==
                  x3 + 12)) ||
              ((Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 5 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 4 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) ==
                  y3 - 6) &&
                (Math.ceil(getOffset(length[keepNumber2]).top / 10) ==
                  x3 + 10 ||
                  Math.ceil(getOffset(length[keepNumber2]).top / 10) ==
                    x3 + 11 ||
                  Math.ceil(getOffset(length[keepNumber2]).top / 10) ==
                    x3 + 9 ||
                  Math.ceil(getOffset(length[keepNumber2]).top / 10) ==
                    x3 + 8 ||
                  Math.ceil(getOffset(length[keepNumber2]).top / 10) ==
                    x3 + 7 ||
                  Math.ceil(getOffset(length[keepNumber2]).top / 10) ==
                    x3 + 12)))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 3, j]);

            console.log("triple");
          } else if (
            (position3 == 2 &&
              (Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 10 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 9 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) ==
                  y3 - 11 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 5 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 6 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 7 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 8 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 4 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) ==
                  y3 - 12 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) ==
                  y3 - 13 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) ==
                  y3 - 14 ||
                Math.ceil(getOffset(length[keepNumber2]).left / 10) ==
                  y3 - 3) &&
              (Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 ||
                Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 + 1 ||
                Math.ceil(getOffset(length[keepNumber2]).top / 10) ==
                  x3 - 1)) ||
            ((Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 6 ||
              Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 5 ||
              Math.ceil(getOffset(length[keepNumber2]).left / 10) == y3 - 4) &&
              (Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 ||
                Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 + 10 ||
                Math.ceil(getOffset(length[keepNumber2]).top / 10) == x3 + 9))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 3, j]);
          } else if (j == keepNumber2) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 3, j]);
          } else if (
            position4 == 1 &&
            (((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 9 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 10 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 11) &&
              (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 1 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 1)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                y4 - 19 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 20 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 21) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 1 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 1)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 5 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 4 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 6) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 + 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 7 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 12)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                y4 - 15 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 14 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 16) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 + 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 7 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 12)))
          ) {
            console.log("four");
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 4, j]);
          } else if (
            (position4 == 2 &&
              (((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                y4 + 6 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 + 4 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 + 5) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 + 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 13 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 12)) ||
                ((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 5 ||
                  Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                    y4 - 4 ||
                  Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                    y4 - 6) &&
                  (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 10 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 9 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 11 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 13 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 8 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 12)))) ||
            ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 6 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 4 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 5 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 7) &&
              (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 9 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 10 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 11 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 13 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 8 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 + 12)) ||
            ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 9 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 10 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 11) &&
              (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 1 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 1))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 4, j]);
          } else if (
            position4 == 3 &&
            (((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 + 5 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 + 4 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 + 6 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 + 7 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 + 3 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 + 8) &&
              (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 10 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 11 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 9 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 8 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 7 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 12)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                y4 + 10 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 + 9 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 + 11 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 + 12 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 + 18 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 + 13) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 15 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 16 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 14 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 13 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 12 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 17)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 5 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 4 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 6 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 3 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 7 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 8) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 + 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 7 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 12)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 6 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 4 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 5) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 13 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 12)))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 4, j]);
          } else if (
            position4 == 4 &&
            (((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 9 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 10 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 11) &&
              (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 1 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 1)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                y4 - 19 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 20 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 21) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 1 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 1)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 5 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 4 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 6) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 7 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 12)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                y4 - 15 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 14 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 16) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 7 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 12)))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 4, j]);
          } else if (
            position4 == 5 &&
            (((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 15 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 14 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 16 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 17 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 13 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 18) &&
              (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 10 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 11 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 9 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 8 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 7 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 12)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                y4 + 10 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 + 9 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 + 11 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 + 12 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 + 18 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 + 13) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 15 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 16 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 14 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 13 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 12 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 17)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 5 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 4 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 6 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 3 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 7 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 8) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 + 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 7 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 12)) ||
              ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 6 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 4 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 5) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 - 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 13 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 12)))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 4, j]);

            console.log("five");
          } else if (
            (position4 == 6 &&
              (((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                y4 - 16 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 14 ||
                Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 15) &&
                (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 + 10 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 9 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 11 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 13 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 8 ||
                  Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 + 12)) ||
                ((Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                  y4 - 5 ||
                  Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                    y4 - 4 ||
                  Math.ceil(getOffset(length[keepNumber3]).left / 10) ==
                    y4 - 6) &&
                  (Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                    x4 - 10 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 9 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 11 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 13 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 8 ||
                    Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                      x4 - 12)))) ||
            ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 6 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 4 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 5 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 7) &&
              (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 9 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 10 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 11 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 13 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 8 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) ==
                  x4 + 12)) ||
            ((Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 9 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 10 ||
              Math.ceil(getOffset(length[keepNumber3]).left / 10) == y4 - 11) &&
              (Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 + 1 ||
                Math.ceil(getOffset(length[keepNumber3]).top / 10) == x4 - 1))
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
          } else if (j == keepNumber3) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 4, j]);
          } else if (
            position5 == 2 &&
            (Math.ceil(getOffset(length[keepNumber4]).left / 10) == y5 + 5 ||
              Math.ceil(getOffset(length[keepNumber4]).left / 10) == y5 + 4 ||
              Math.ceil(getOffset(length[keepNumber4]).left / 10) == y5 + 6) &&
            (Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 10 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 11 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 9 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 8 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 7 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 12)
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 5, j]);
          } else if (
            position5 == 1 &&
            (Math.ceil(getOffset(length[keepNumber4]).left / 10) == y5 - 5 ||
              Math.ceil(getOffset(length[keepNumber4]).left / 10) == y5 - 4 ||
              Math.ceil(getOffset(length[keepNumber4]).left / 10) == y5 - 6) &&
            (Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 10 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 11 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 9 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 8 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 7 ||
              Math.ceil(getOffset(length[keepNumber4]).top / 10) == x5 + 12)
          ) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 5, j]);

            console.log("small");
          } else if (j == keepNumber4) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 5, j]);
          } else if (j == pos1) {
            document.getElementById(num).style.backgroundColor = "red";
            document.getElementById(num).style.color = "red";
            cells.push(["r", 1, j]);
          } else {
            console.log("white");
            document.getElementById(num).style.backgroundColor = "#DDDDDD";
            document.getElementById(num).style.color = "#DDDDDD";
            cells.push(["w", j]);
          }
          Game();
        }
