import React from 'react';
import './style.scss';

import PlayerInfo from '../PlayerInfo';
import Block from '../Block';

import { 
    getNewMatrixState,
    getNewGameStatusAfterSwapPlayersTurn,
    getCurrentTurn,
    getMark
} from '../../functions/Game.function';

import { GameStatusType } from '../../types';

const gameMatrix: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const gameStatus: GameStatusType = {
    playerNameTurn: "Player1",
    hasWinner: false,
    players: {
        x: {
            name: 'Player1',
            mark: 'close',
            isTurn: true,
            isWin: false
        },
        o: {
            name: 'Player2',
            mark: 'circle',
            isTurn: false,
            isWin: false
        }
    }
}

function Game() {
    const [martix, setMatrix] = React.useState(gameMatrix);
    const [status, setStatus] = React.useState(gameStatus);
    const handleBlockClick = (posX: number, posY: number): void => {
        console.log('Is running...');
        setMatrix((prevState: number[][]): number[][] => {
            console.log('Set Matrix');
            return getNewMatrixState(prevState, posX, posY, getCurrentTurn(status));
        });
        setStatus((prevState: GameStatusType): GameStatusType => {
            console.log('Set status');
            return getNewGameStatusAfterSwapPlayersTurn(prevState);
        });
    };

    React.useEffect(() => {
        if(!status.hasWinner) return;
        
    }, [status.hasWinner]);

    return (
        <div className="game-section">
            <PlayerInfo player={status.players.x} />
                <div className="game">
                    <div className="game-status-message">
                        <h3>{status.players.x.isTurn === true ? status.players.x.name : status.players.o.name} turn</h3>
                    </div>
                    <div className="block-container">
                        <Block mark={getMark(martix[0][0])} pos={{x: '0', y: '0'}} handleBlockClick={handleBlockClick} />
                        <Block mark={getMark(martix[0][1])} pos={{x: '0', y: '1'}} handleBlockClick={handleBlockClick} />
                        <Block mark={getMark(martix[0][2])} pos={{x: '0', y: '2'}} handleBlockClick={handleBlockClick} />
                        <Block mark={getMark(martix[1][0])} pos={{x: '1', y: '0'}} handleBlockClick={handleBlockClick} />
                        <Block mark={getMark(martix[1][1])} pos={{x: '1', y: '1'}} handleBlockClick={handleBlockClick} />
                        <Block mark={getMark(martix[1][2])} pos={{x: '1', y: '2'}} handleBlockClick={handleBlockClick} />
                        <Block mark={getMark(martix[2][0])} pos={{x: '2', y: '0'}} handleBlockClick={handleBlockClick} />
                        <Block mark={getMark(martix[2][1])} pos={{x: '2', y: '1'}} handleBlockClick={handleBlockClick} />
                        <Block mark={getMark(martix[2][2])} pos={{x: '2', y: '2'}} handleBlockClick={handleBlockClick} />
                    </div>
                </div>
            <PlayerInfo player={status.players.o} />
        </div>
        
    );
}

export default Game;