type BlockType = {
    pos: {
        x: string,
        y: string
    },
    mark: string,
    handleBlockClick(x: number, y: number): void
};

type PlayerInfoType = {
    name: string,
    mark?: string,
    isTurn: boolean,
    isWin: boolean
};

type GameStatusType = {
    playerNameTurn: string,
    hasWinner: boolean,
    players: {
        x: PlayerInfoType,
        o: PlayerInfoType
    }
}

export type {
    GameStatusType,
    BlockType,
    PlayerInfoType
}