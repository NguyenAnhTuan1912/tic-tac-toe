import React from "react";
import './style.scss';

import { BlockType } from "../../types";

import { 
    getPos,
    isClicked,
    clickButton
} from "../../functions/Block.function";

function Block(props: BlockType) {
    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        const {currentTarget} = event;
        if(isClicked(currentTarget)) return;
        const [x, y] = getPos(currentTarget);
        clickButton(currentTarget);
        props.handleBlockClick(x, y);
    };

    return (
        <button
            type="button"
            aria-label="game-block"
            className="btn btn-block"
            data-pos={props.pos.x + ";" + props.pos.y}
            data-is-clicked={false}
            onClick={handleClick}>
            <span className="material-symbols-outlined fs-66">{props.mark}</span>
        </button>
    );
}

export default Block;