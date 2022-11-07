import { GameStatusType } from "../types";

function getNewMatrixState(martrix: number[][], x: number, y: number, turn: string): number[][] {
    const newMartrix = [...martrix];
    newMartrix[x][y] = (turn === 'x') ? 1 : -1;
    console.log(newMartrix);
    return [...newMartrix];
}

function getNewGameStatusAfterSwapPlayersTurn(gameStatus: GameStatusType): GameStatusType {
    const newGameStatus = {...gameStatus};
    newGameStatus.players.x.isTurn = !newGameStatus.players.x.isTurn;
    newGameStatus.players.o.isTurn = !newGameStatus.players.o.isTurn;
    if(newGameStatus.players.x.isTurn) newGameStatus.playerNameTurn = newGameStatus.players.x.name;
    else newGameStatus.playerNameTurn = newGameStatus.players.o.name
    console.log(newGameStatus);
    return {...newGameStatus};
}

function getMark(number: number): string {
    return (number === 0) ? '' : (number === 1) ? 'close' : 'circle';
}

function getCurrentTurn(gameStatus: GameStatusType): string {
    const copyGameStatus = {...gameStatus};
    return (copyGameStatus.players.x.isTurn) ? 'x' : 'o';
}

function setWinner(gameStatus: GameStatusType): void {

}

function hasWinner(matrix: number[][], gameStatus: GameStatusType): GameStatusType {
    let sumRow: number = 0;
    let sumCol: number = 0;
    let sumDiagonalTopLeft: number = 0;
    let sumDiagonalTopRight: number = 0;
    const copyGameStatus = {...gameStatus};
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            sumRow += matrix[col][row];
            sumCol += matrix[row][col];
            sumDiagonalTopLeft += matrix[col][col];
            sumDiagonalTopRight += matrix[3 - col - 1][3 - col - 1];
        }
        if(sumRow === 3 || sumCol === 3 || sumDiagonalTopLeft === 3 || sumDiagonalTopRight === 3) {
            setWinner(copyGameStatus);
            return copyGameStatus;
        }
        if(sumRow === -3 || sumCol === -3 || sumDiagonalTopLeft === -3 || sumDiagonalTopRight === -3) {
            setWinner(copyGameStatus);
            return copyGameStatus;
        }
    }
    return gameStatus;
}

export {
    getNewMatrixState,
    getNewGameStatusAfterSwapPlayersTurn,
    getCurrentTurn,
    getMark
}