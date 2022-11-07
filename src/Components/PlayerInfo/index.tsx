import React from "react";
import './style.scss'

import { PlayerInfoType } from "../../types";

function PlayerInfo(props: any) {
    return (
        <div className="player-info" data-is-turn={props.player.isTurn}>
            <h4 className="player-name"><span className="material-symbols-outlined fs-22">{props.player.mark}</span><span>{props.player.name}</span></h4>
            <p>Turn: <span className="turn-text">{props.player.isTurn ? "Here" : " "}</span></p>
        </div>
    );
}

export default PlayerInfo;