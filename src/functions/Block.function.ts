function getPos(target: any): number[] {
    const pos = target.getAttribute('data-pos')!.split(';');
    const x = parseInt(pos[0]);
    const y = parseInt(pos[1]);
    return [x, y];
}

function isClicked(target: any): boolean {
    const check = target.getAttribute('data-is-clicked');
    return check === 'true';
}

function clickButton(target: any): void {
    target.setAttribute('data-is-clicked', true);
}

export { 
    getPos,
    isClicked,
    clickButton
}