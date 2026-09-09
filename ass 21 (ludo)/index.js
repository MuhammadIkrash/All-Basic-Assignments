// Importing All Board

const blue_Board = document.getElementById('blueBoard')
const green_Board = document.getElementById('greenBoard')
const red_Board = document.getElementById('redBoard')
const yellow_Board = document.getElementById('yellowBoard')
// Initial Variable 

let playerTurn = [] // this will hold player team Color
let currentPlayerTurnIndex = 0;
let prevPlayerTurnIndex;
let currentPlayerTurnStatus = true; // true mean Player Not Play False Mean Player Played
let teamHasBones = false; // when team killed ,reach Home

let diceResult;

// Setting Player piece Classes 

class Player_Piece {
    constructor(team, position, score, homePathEntry, playerId, gameEntry) {
        this.team = team;
        this.position = position;
        this.score = score;
        this.homePathEntry = homePathEntry;
        this.id = playerId;
        this.gameEntry = gameEntry
        this.status = 0; // Initially  it is Zero mean piece is locked and 1 Mean Unlocked
        this.initialPosition = position // to return The Piece when Kill    
    }

    unlockPiece() {
        this.status = 1; // mean UnLocked
    }
    updatePosition() {
        this.position = position;
    }
    movePiece(array) {
        //Function To Movie Piece 
    }
    sendMeToBoard() {
        //Function To return The Piece to the locked position when kill
    }
}

let numPvP = parseInt(prompt('Enter The Number of Player'));
let PlayerPiece = []; //Hold All Piece From All Teams

let boardDetail = [
    { boardColor: 'blue', board: blue_Board, homeEntry: 'y13', gameEntry: 'b1' },
    { boardColor: 'green', board: green_Board, homeEntry: 'r13', gameEntry: 'g1' },
    { boardColor: 'red', board: red_Board, homeEntry: 'b13', gameEntry: 'r1' },
    { boardColor: 'yellow', board: yellow_Board, homeEntry: 'g13', gameEntry: 'y1' },
]

for (let i = 0; i < numPvP; i++) {
    let boardColor = boardDetail[i].boardColor;
    let homeEntry = boardDetail[i].homeEntry;
    let gameEntry = boardDetail[i].gameEntry;
    const parentDiv = document.createElement('div')
    for (let i = 0; i < 4; i++) {
        const span = document.createElement('span')
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-location-pin', 'piece', `${boardColor}-piece`);
        icon.addEventListener('click', () => {
            // turnForUser(e)
        })
        let pieceID = `${boardColor}${i}`;
        let position = `${i}_${boardDetail}`;

        const player = new Player_Piece(boardColor, position, 0, homeEntry, pieceID, gameEntry)
        span.setAttribute('id', position);
        icon.setAttribute('piece_id', pieceID,);
        PlayerPiece.push(player);
        span.append(icon);
        parentDiv.append(span);
    }
    boardDetail[i].board.append(parentDiv)
}

if (numPvP === 2) {
    playerTurn = ['blue', 'green'];
} else if (numPvP === 3) {
    playerTurn = ['blue', 'green', 'red']
} else if (numPvP === 4) {
    playerTurn = ['blue', 'green', 'red', 'yellow']
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const setPlayerTurn = (playerTurnIndex) => {
    if (playerTurnIndex === null || playerTurnIndex === undefined) {
        return
    }

    let currentTeamTurn = playerTurn[playerTurnIndex];
    // filtering the board details array and finding currentTeamTurn Object
    let boardDetailObject = boardDetail.filter(obj => obj.boardColor === currentTeamTurn);
    boardDetailObject[0].board.classList.toggle('active');

}

setPlayerTurn(0);
const nextTeamTurn = async () => {
    prevPlayerTurnIndex = currentPlayerTurnIndex
    if (prevPlayerTurnIndex === (playerTurn.length - 1)) {
        currentPlayerTurnIndex = 0;
    } else {
        currentPlayerTurnIndex += 1;
    }

    // here the set player turn called twice to remove the active class from the last board and add to the new team board
    setPlayerTurn(prevPlayerTurnIndex);
    setPlayerTurn(currentPlayerTurnIndex);
    await delay(500);
    if (playerTurn[currentPlayerTurnIndex] !== 'blue') {
        // rollDiceButtonForBot();
    }
}
